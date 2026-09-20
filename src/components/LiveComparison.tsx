import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

type TabMode = 'prototype' | 'production' | 'all';

export function LiveComparison() {
  const [activeTab, setActiveTab] = useState<TabMode>('all');

  const prototypeItems = [
    'Unstructured prompts, no schema enforcement',
    'High hallucination risk, no fact-checking pass',
    'Unmetered API cost, no budget ceiling',
    'No fallback — errors surface directly to the user',
  ];

  const productionItems = [
    'Deterministic schemas validated before use',
    'Guardrails + automated evals on every response',
    'Latency caching via Redis, semantic dedup',
    'Full observability via Langfuse / OpenTelemetry',
    'Human-in-the-loop fallback on low-confidence output',
  ];

  return (
    <section className="relative border-t border-hairline/60 bg-ink py-16 sm:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-brand-blue/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-48 top-1/2 h-96 w-96 rounded-full bg-brand-purple/12 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-slateish">
              LIVE COMPARISON
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-ivory sm:text-[3.2rem] max-w-3xl">
            A demo and a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-violet">
              production system
            </span>{' '}
            aren't the same thing.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.08rem]">
            Toggle to see what changes between a weekend prototype and what we actually ship.
          </p>

          {/* Interactive Toggle Pill Switch */}
          <div className="mt-8 inline-flex items-center rounded-full border border-hairline/80 bg-ink/70 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'prototype' ? 'all' : 'prototype')}
              className={`relative rounded-full px-5 py-2 text-[0.88rem] font-medium transition-all duration-300 ${
                activeTab === 'prototype'
                  ? 'bg-gradient-to-r from-[#7B2CFF] to-[#A855F7] text-white shadow-[0_4px_20px_-4px_rgba(168,85,247,0.6)]'
                  : 'text-slateish hover:text-ivory'
              }`}
            >
              Prototype
            </button>
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'production' ? 'all' : 'production')}
              className={`relative rounded-full px-5 py-2 text-[0.88rem] font-medium transition-all duration-300 ${
                activeTab === 'production'
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_4px_20px_-4px_rgba(0,107,255,0.6)]'
                  : 'text-slateish hover:text-ivory'
              }`}
            >
              Ideavix Production
            </button>
          </div>
        </Reveal>

        {/* Comparison Cards Grid — no borders, no dividers */}
        <div className="mt-10">
          <Reveal delay={0.1}>
            <div className="grid gap-5 md:grid-cols-2">
              {/* Prototype demo Column */}
              <div
                className={`rounded-2xl bg-navy/60 p-7 sm:p-9 transition-all duration-300 ${
                  activeTab === 'production' ? 'opacity-40 grayscale-[40%]' : 'opacity-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF5C5C]" />
                  <h3 className="font-heading text-[1.22rem] font-semibold text-[#FF5C5C]">
                    Prototype demo
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {prototypeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[0.94rem] leading-relaxed text-slateish">
                      <span className="mr-3 font-mono text-[1.1rem] font-bold text-[#FF5C5C] leading-none select-none">
                        ×
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideavix production Column */}
              <div
                className={`rounded-2xl bg-navy/60 p-7 sm:p-9 transition-all duration-300 ${
                  activeTab === 'prototype' ? 'opacity-40 grayscale-[40%]' : 'opacity-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00E599]" />
                  <h3 className="font-heading text-[1.22rem] font-semibold text-[#00E599]">
                    Ideavix production
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {productionItems.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[0.94rem] leading-relaxed text-slateish">
                      <span className="mr-3 font-mono text-[1.05rem] font-bold text-[#00E599] leading-none select-none">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
