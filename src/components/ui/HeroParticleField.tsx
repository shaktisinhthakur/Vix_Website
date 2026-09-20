import { useEffect, useMemo, useRef, useState, Component, ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Detects WebGL/WebGL2 support without creating a persistent context.
 * Returns null if detection hasn't run yet (SSR), true if supported, false if not.
 */
function detectWebGLSupport(): boolean | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null; // SSR - detection not possible yet
  }
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true }) ||
               canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });
    return !!gl;
  } catch {
    return false;
  }
}

/**
 * ErrorBoundary to catch WebGL context creation errors and render a fallback.
 * Prevents the entire app from crashing when WebGL fails.
 */
class WebGLFallbackBoundary extends Component<{ children: ReactNode; fallback?: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[WebGLFallbackBoundary] WebGL error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

/**
 * Three.js particle atmosphere for the Ideavix hero.
 *
 * Independent points only — no connecting lines, no network graph.
 * Three depth layers (background / midground / foreground) built as three
 * separate THREE.Points objects sharing one scene, so the whole field is
 * three draw calls regardless of particle count.
 *
 * PERFORMANCE MODEL (GPU-driven):
 * Drift, sinusoidal wobble, bounds-wrapping, and cursor repulsion/
 * brighten/enlarge are all computed in the vertex shader from per-particle
 * attributes (velocity, phase, freq) and a handful of uniforms (uTime,
 * uMouse, uMouseActive). The CPU side only updates ~5 uniform values per
 * layer per frame — it never loops over particles. That's what lets
 * particle count scale into the thousands without the frame budget
 * degrading; the limiting factor becomes GPU fill-rate, not JS.
 *
 * One trade-off from moving to the GPU: the old CPU version eased size/
 * opacity toward their cursor-proximity target over several frames
 * (a lerp with factor 0.08) for a soft "spring" feel. The shader instead
 * recomputes purely from current distance each frame, so the response is
 * spatially smooth (via the radial falloff) but not time-smoothed. In
 * practice this reads as slightly snappier, not jittery, since particles
 * are drifting slowly relative to the cursor radius.
 *
 * Gating:
 * - Dark-theme only: watches document.documentElement's `dark` class via
 *   MutationObserver, same pattern used across the site's other themed
 *   effects.
 * - prefers-reduced-motion: renders one static frame (uTime stays 0, no
 *   animation loop), no cursor interaction.
 * - Cursor interaction only when the pointer is `(pointer: fine)` — touch
 *   devices get ambient drift only.
 */

const IVX_WHITE = new THREE.Color('#FFFFFF');
const IVX_LIGHT_GRAY = new THREE.Color('#E8EDF2');

type LayerConfig = {
  sizeRange: [number, number];
  opacityRange: [number, number];
  speedRange: [number, number];
  driftAmount: number;
  parallax: number; // 0..1, how strongly this layer responds to cursor
  cursorRadiusPx: number;
};

const LAYERS: Record<'background' | 'midground' | 'foreground', LayerConfig> = {
  background: {
    sizeRange: [0.5, 1.0],
    opacityRange: [0.12, 0.25],
    speedRange: [0.003, 0.008],
    driftAmount: 0.4,
    parallax: 0.2,
    cursorRadiusPx: 90
  },
  midground: {
    sizeRange: [1.0, 1.5],
    opacityRange: [0.25, 0.45],
    speedRange: [0.006, 0.014],
    driftAmount: 0.7,
    parallax: 0.5,
    cursorRadiusPx: 110
  },
  foreground: {
    sizeRange: [1.5, 2.5],
    opacityRange: [0.45, 0.75],
    speedRange: [0.01, 0.02],
    driftAmount: 1.1,
    parallax: 1.0,
    cursorRadiusPx: 140
  }
};

type Tier = { total: number; interactive: boolean };

// GPU-driven now, so counts can go much higher than the old CPU-loop
// version without touching frame budget. Fill-rate (tiny alpha-blended
// discs) is the only real cost, and that stays cheap at these sizes.
function getTier(width: number, pointerFine: boolean): Tier {
  if (width < 640) return { total: 400, interactive: false };
  if (width < 1024) return { total: 750, interactive: pointerFine };
  return { total: 1200, interactive: pointerFine };
}

/**
 * Biases x toward the right side of the hero (0..1 range) with a smooth
 * probability curve rather than a hard boundary, and keeps a clean band
 * around the heading (roughly the left/center third) low-density.
 */
function biasedX(): number {
  const u = Math.random();
  const skewed = Math.pow(u, 1.6); // pushes mass to the right (toward 1)
  return skewed;
}

interface LayerData {
  positions: Float32Array; // base spawn position, xyz
  velocities: Float32Array; // per-particle base drift, xyz
  phases: Float32Array; // per-particle phase for sinusoidal wobble, x&y
  freqs: Float32Array; // per-particle frequency, x&y
  sizes: Float32Array; // base on-screen size (px)
  baseOpacities: Float32Array;
  config: LayerConfig;
  count: number;
}

function buildLayer(config: LayerConfig, count: number, boundsX: number, boundsY: number): LayerData {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const phases = new Float32Array(count * 2);
  const freqs = new Float32Array(count * 2);
  const sizes = new Float32Array(count);
  const baseOpacities = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const nx = biasedX(); // 0..1, right-biased
    const x = (nx * 2 - 1) * boundsX;
    const y = (Math.random() * 2 - 1) * boundsY;
    const z = (Math.random() - 0.5) * 2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const angle = Math.random() * Math.PI * 2;
    const speed = config.speedRange[0] + Math.random() * (config.speedRange[1] - config.speedRange[0]);
    velocities[i * 3] = Math.cos(angle) * speed;
    velocities[i * 3 + 1] = Math.sin(angle) * speed;
    velocities[i * 3 + 2] = 0;

    phases[i * 2] = Math.random() * Math.PI * 2;
    phases[i * 2 + 1] = Math.random() * Math.PI * 2;
    freqs[i * 2] = 0.15 + Math.random() * 0.25;
    freqs[i * 2 + 1] = 0.15 + Math.random() * 0.25;

    sizes[i] = config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]);
    baseOpacities[i] = config.opacityRange[0] + Math.random() * (config.opacityRange[1] - config.opacityRange[0]);
  }

  return { positions, velocities, phases, freqs, sizes, baseOpacities, config, count };
}

function makeGeometry(layer: LayerData, color: THREE.Color) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(layer.positions, 3));
  geometry.setAttribute('velocity', new THREE.BufferAttribute(layer.velocities, 3));
  geometry.setAttribute('phase', new THREE.BufferAttribute(layer.phases, 2));
  geometry.setAttribute('freq', new THREE.BufferAttribute(layer.freqs, 2));

  const colors = new Float32Array(layer.count * 3);
  for (let i = 0; i < layer.count; i++) {
    // Depth/variation comes from opacity, not hue. Keep color variation
    // extremely subtle: white, with a small fraction nudged toward a
    // very light gray — never toward a saturated brand color.
    const t = Math.random() * 0.18;
    const c = color.clone().lerp(IVX_LIGHT_GRAY, t);
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('alpha', new THREE.BufferAttribute(layer.baseOpacities, 1));
  geometry.setAttribute('pSize', new THREE.BufferAttribute(layer.sizes, 1));

  return geometry;
}

// Drift, wobble, wrap-around, and cursor repulsion/brighten/enlarge all
// happen here now — the CPU only feeds uTime and uMouse each frame.
const VERTEX_SHADER = `
  attribute float alpha;
  attribute float pSize;
  attribute vec3 velocity;
  attribute vec2 phase;
  attribute vec2 freq;

  varying float vAlpha;
  varying vec3 vColor;

  uniform float uPixelRatio;
  uniform float uTime;
  uniform float uBoundsX;
  uniform float uBoundsY;
  uniform float uDriftAmount;
  uniform vec2 uMouse;
  uniform float uMouseActive;
  uniform float uCursorRadiusPx;
  uniform float uParallax;
  uniform float uViewportWidth;

  // Wraps v into [-bound, bound) instead of clamping/bouncing, matching
  // the old CPU version's "wrap around bounds" behavior.
  float wrapCoord(float v, float bound) {
    float range = bound * 2.0;
    return mod(v + bound, range) - bound;
  }

  void main() {
    // Linear drift: velocity is added once per frame in the original CPU
    // version, which is equivalent to base + velocity * frameCount here.
    vec3 pos = position + velocity * uTime;

    // Subtle sinusoidal wobble on top of the linear drift.
    pos.x += sin(uTime * 0.01 * freq.x + phase.x) * uDriftAmount * 0.01;
    pos.y += cos(uTime * 0.01 * freq.y + phase.y) * uDriftAmount * 0.01;

    pos.x = wrapCoord(pos.x, uBoundsX);
    pos.y = wrapCoord(pos.y, uBoundsY);

    // Cursor interaction: gentle repulsion + brighten/enlarge, scaled by
    // this layer's parallax response (background barely reacts,
    // foreground reacts the most) and by radial falloff from the cursor.
    float falloff = 0.0;
    if (uMouseActive > 0.5) {
      float radiusWorld = (uCursorRadiusPx / 1000.0) * uViewportWidth * 0.5 + 0.6;
      vec2 delta = pos.xy - uMouse;
      float dist = length(delta);
      if (dist < radiusWorld && dist > 0.0001) {
        falloff = (1.0 - dist / radiusWorld) * uParallax;
        vec2 dir = delta / dist;
        pos.xy += dir * 0.02 * falloff;
      }
    }

    vAlpha = alpha + (1.0 - alpha) * 0.35 * falloff;
    vColor = color;

    float finalSize = pSize * (1.0 + 0.2 * falloff);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    // finalSize is the intended on-screen (CSS-pixel) size. Multiplying by
    // the capped device pixel ratio compensates for the canvas's
    // framebuffer resolution — nothing else scales this, so the final dot
    // size stays small and constant instead of ballooning with distance.
    gl_PointSize = finalSize * uPixelRatio;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = `
  varying float vAlpha;
  varying vec3 vColor;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    if (d > 0.5) discard;
    // Crisp dot: only the outermost sliver is antialiased so the point
    // reads as a small solid circle, not a soft glowing blur.
    float edge = smoothstep(0.5, 0.4, d);
    gl_FragColor = vec4(vColor, vAlpha * edge);
  }
`;

function ParticleLayer({
  layer,
  geometry,
  mouseRef,
  interactive,
  animate
}: {
  layer: LayerData;
  geometry: THREE.BufferGeometry;
  mouseRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
  interactive: boolean;
  animate: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);
  const { viewport, gl } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
        uTime: { value: 0 },
        uBoundsX: { value: viewport.width / 2 + 1 },
        uBoundsY: { value: viewport.height / 2 + 1 },
        uDriftAmount: { value: layer.config.driftAmount },
        uMouse: { value: new THREE.Vector2(-9999, -9999) },
        uMouseActive: { value: 0 },
        uCursorRadiusPx: { value: layer.config.cursorRadiusPx },
        uParallax: { value: layer.config.parallax },
        uViewportWidth: { value: viewport.width }
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      vertexColors: true
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  // Bounds/viewport-width uniforms only need updating when the viewport
  // actually changes size, not every frame.
  useEffect(() => {
    material.uniforms.uBoundsX.value = viewport.width / 2 + 1;
    material.uniforms.uBoundsY.value = viewport.height / 2 + 1;
    material.uniforms.uViewportWidth.value = viewport.width;
  }, [material, viewport.width, viewport.height]);

  useFrame(() => {
    if (!animate || !pointsRef.current) return;
    timeRef.current += 1;
    material.uniforms.uTime.value = timeRef.current;

    const mouseWorldX = mouseRef.current.x * (viewport.width / 2);
    const mouseWorldY = mouseRef.current.y * (viewport.height / 2);
    const active = interactive && mouseRef.current.active;
    material.uniforms.uMouse.value.set(mouseWorldX, mouseWorldY);
    material.uniforms.uMouseActive.value = active ? 1 : 0;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

function Scene({
  tier,
  mouseRef,
  animate
}: {
  tier: Tier;
  mouseRef: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
  animate: boolean;
}) {
  const { viewport } = useThree();

  const layerData = useMemo(() => {
    const bgCount = Math.round(tier.total * 0.5);
    const midCount = Math.round(tier.total * 0.35);
    const fgCount = Math.max(1, tier.total - bgCount - midCount);
    const boundsX = viewport.width / 2 + 1;
    const boundsY = viewport.height / 2 + 1;
    return {
      background: buildLayer(LAYERS.background, bgCount, boundsX, boundsY),
      midground: buildLayer(LAYERS.midground, midCount, boundsX, boundsY),
      foreground: buildLayer(LAYERS.foreground, fgCount, boundsX, boundsY)
    };
    // Rebuild only when viewport size or tier changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.width, viewport.height, tier.total]);

  const geometries = useMemo(
    () => ({
      background: makeGeometry(layerData.background, IVX_WHITE),
      midground: makeGeometry(layerData.midground, IVX_WHITE),
      foreground: makeGeometry(layerData.foreground, IVX_WHITE)
    }),
    [layerData]
  );

  useEffect(() => {
    return () => {
      geometries.background.dispose();
      geometries.midground.dispose();
      geometries.foreground.dispose();
    };
  }, [geometries]);

  return (
    <>
      <ParticleLayer
        layer={layerData.background}
        geometry={geometries.background}
        mouseRef={mouseRef}
        interactive={tier.interactive}
        animate={animate}
      />
      <ParticleLayer
        layer={layerData.midground}
        geometry={geometries.midground}
        mouseRef={mouseRef}
        interactive={tier.interactive}
        animate={animate}
      />
      <ParticleLayer
        layer={layerData.foreground}
        geometry={geometries.foreground}
        mouseRef={mouseRef}
        interactive={tier.interactive}
        animate={animate}
      />
    </>
  );
}

export function HeroThreeParticles() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -999, y: -999, active: false });
  const [isDark, setIsDark] = useState(false);
  const [tier, setTier] = useState<Tier>({ total: 400, interactive: false });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);

  // Detect WebGL support and initialize client-only state on mount
  useEffect(() => {
    setMounted(true);
    setWebglSupported(detectWebGLSupport());
    setIsDark(document.documentElement.classList.contains('dark'));
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const pointerFine = window.matchMedia('(pointer: fine)').matches;
    setTier(getTier(window.innerWidth, pointerFine));
  }, []);

  // Watch for theme changes
  useEffect(() => {
    if (!mounted) return;
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [mounted]);

  // Handle resize for tier updates
  useEffect(() => {
    if (!mounted) return;
    function updateTier() {
      const pointerFine = window.matchMedia('(pointer: fine)').matches;
      setTier(getTier(window.innerWidth, pointerFine));
    }
    updateTier();
    window.addEventListener('resize', updateTier);
    return () => window.removeEventListener('resize', updateTier);
  }, [mounted]);

  // Mouse tracking for interactive mode
  useEffect(() => {
    if (!mounted || reduceMotion || !tier.interactive) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    function handleMove(e: PointerEvent) {
      const rect = wrapper!.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.active = true;
    }
    function handleLeave() {
      mouseRef.current.active = false;
    }

    wrapper.addEventListener('pointermove', handleMove);
    wrapper.addEventListener('pointerleave', handleLeave);
    return () => {
      wrapper.removeEventListener('pointermove', handleMove);
      wrapper.removeEventListener('pointerleave', handleLeave);
    };
  }, [mounted, reduceMotion, tier.interactive]);

  // During SSR or before mount, render nothing (avoids hydration mismatch)
  if (!mounted) {
    return null;
  }

  // WebGL not supported - render nothing (graceful degradation)
  if (webglSupported === false) {
    return null;
  }

  // Dark theme only - render nothing in light mode
  if (!isDark) return null;

  // WebGL detection still pending - render nothing (will re-render when detected)
  if (webglSupported === null) {
    return null;
  }

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <WebGLFallbackBoundary fallback={null}>
        <Canvas
          dpr={[1, 1.5]} // Cap DPR at 1.5 to reduce GPU memory pressure on high-DPR devices
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'low-power',
            preserveDrawingBuffer: false, // Allow context to be lost/restored
            failIfMajorPerformanceCaveat: true, // Fail fast if GPU can't handle it
          }}
          style={{ background: 'transparent' }}
          frameloop={reduceMotion ? 'demand' : 'always'}
        >
          <Scene tier={tier} mouseRef={mouseRef} animate={!reduceMotion} />
        </Canvas>
      </WebGLFallbackBoundary>
    </div>
  );
}