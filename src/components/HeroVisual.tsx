import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
{ x: 150, y: 70 },
{ x: 232, y: 118 },
{ x: 236, y: 214 },
{ x: 150, y: 262 },
{ x: 64, y: 214 },
{ x: 68, y: 118 },
{ x: 150, y: 166 },
{ x: 108, y: 142 },
{ x: 192, y: 190 }];


const edges: Array<[number, number]> = [
[0, 1],
[1, 2],
[2, 3],
[3, 4],
[4, 5],
[5, 0],
[6, 0],
[6, 2],
[6, 4],
[7, 6],
[8, 6],
[7, 5],
[8, 1]];


/**
 * Brand-specific hero visual: the Ideavix hex/idea mark abstracted into a
 * living lattice — circuit traces, neural links and a single golden idea core.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-brand-blue/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-[8%] top-[14%] h-40 w-40 rounded-full bg-brand-purple/25 blur-[80px]" />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}>
        
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <circle
            cx="150"
            cy="150"
            r="142"
            fill="none"
            stroke="#172653"
            strokeWidth="1"
            strokeDasharray="2 10" />
          
          <circle cx="150" cy="8" r="2.5" fill="#00D9FF" />
          <circle cx="292" cy="150" r="2" fill="#7B2CFF" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 54, repeat: Infinity, ease: 'linear' }}>
        
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <circle cx="150" cy="150" r="118" fill="none" stroke="#172653" strokeWidth="1" />
          <circle cx="268" cy="150" r="3" fill="#FFB800" />
        </svg>
      </motion.div>

      <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="ivx-hero-hex" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#006BFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7B2CFF" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ivx-hero-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#006BFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C238FF" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="ivx-hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* circuit traces */}
        <g stroke="#172653" strokeWidth="1" fill="none">
          <path d="M18 196 H62 V164 H92" />
          <path d="M282 108 H238 V140 H208" />
          <path d="M40 92 H74 V60" />
          <path d="M260 210 H224 V244" />
        </g>
        <g fill="#00D9FF" opacity="0.7">
          <circle cx="18" cy="196" r="2" />
          <circle cx="282" cy="108" r="2" />
          <circle cx="74" cy="60" r="1.8" />
          <circle cx="224" cy="244" r="1.8" />
        </g>

        {/* hex frame */}
        <path
          d="M150 26 L257 88 V212 L150 274 L43 212 V88 Z"
          fill="none"
          stroke="url(#ivx-hero-hex)"
          strokeWidth="1.4"
          strokeLinejoin="round" />
        
        <path
          d="M150 26 L257 88 V212 L150 274 L43 212 V88 Z"
          fill="#07112F"
          fillOpacity="0.55" />
        

        {/* neural lattice */}
        {edges.map(([a, b], i) =>
        <line
          key={`edge-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#ivx-hero-edge)"
          strokeWidth="0.9" />

        )}
        {edges.slice(0, 7).map(([a, b], i) =>
        <line
          key={`flow-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#00D9FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 190"
          className="animate-dash-flow"
          style={{ animationDelay: `${i * 0.42}s` }} />

        )}

        {/* the V stroke from the mark */}
        <path
          d="M104 108 L150 218 L196 108"
          fill="none"
          stroke="url(#ivx-hero-hex)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round" />
        

        {nodes.map((n, i) =>
        <circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r={i === 6 ? 0 : 2.6}
          fill="#0B1638"
          stroke={i % 3 === 0 ? '#00D9FF' : '#7B2CFF'}
          strokeWidth="1.2"
          className="animate-pulse-soft"
          style={{ animationDelay: `${i * 0.3}s` }} />

        )}

        {/* golden idea core */}
        <circle cx="150" cy="82" r="26" fill="url(#ivx-hero-core)" opacity="0.5" />
        <circle cx="150" cy="82" r="4.5" fill="#FFB800" />
        <circle cx="150" cy="82" r="10" fill="none" stroke="#FFB800" strokeOpacity="0.4" strokeWidth="1" />
      </svg>

      <motion.div
        className="absolute left-[4%] top-[26%] hidden rounded-xl border border-hairline bg-surface/80 px-3.5 py-2 backdrop-blur-md sm:block"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
        
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-cyan">idea</p>
        <p className="mt-0.5 text-[0.78rem] text-ivory">signal captured</p>
      </motion.div>

      <motion.div
        className="absolute bottom-[16%] right-[2%] hidden rounded-xl border border-hairline bg-surface/80 px-3.5 py-2 backdrop-blur-md sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
        
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-brand-violet">impact</p>
        <p className="mt-0.5 text-[0.78rem] text-ivory">shipped to production</p>
      </motion.div>
    </div>);

}