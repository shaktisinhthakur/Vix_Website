import React from 'react';
import { Reveal } from './Reveal';

export function ProofMetrics() {
  const metrics = [
    {
      value: '99.4%',
      label: 'factual grounding accuracy via hybrid BM25 + dense retrieval',
    },
    {
      value: '420ms',
      label: 'average response latency with streaming + semantic caching',
    },
    {
      value: '70%',
      label: 'reduction in support triage time via tool-calling agents',
    },
  ];

  return (
    <section className="relative border-t border-hairline/60 bg-navy/20 py-16 sm:py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 rounded-full bg-brand-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-brand-purple/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          {/* Eyebrow tag without number prefix */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/60 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-slateish">
              PROOF, NOT PROMISES
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-ivory sm:text-[3.2rem] max-w-3xl">
            Numbers from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-violet">
              systems already in production.
            </span>
          </h2>
        </Reveal>

        {/* 3 Metric Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {metrics.map((item, idx) => (
            <Reveal key={item.value} delay={idx * 0.08}>
              <div className="h-full rounded-2xl border border-hairline/80 bg-surface/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/50 hover:bg-surface/70 hover:shadow-[0_20px_40px_-20px_rgba(0,107,255,0.3)]">
                <p className="font-heading text-[2.4rem] sm:text-[2.85rem] font-bold tracking-tight text-brand-blue">
                  {item.value}
                </p>
                <p className="mt-4 text-[0.93rem] leading-relaxed text-slateish">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
