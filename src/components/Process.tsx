import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '../data/site';

export function Process() {
  return (
    <section className="relative border-t border-hairline/60 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-blue/8 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="From Idea to Impact"
          copy="A single continuous line from first conversation to a platform that keeps growing."
          align="center" />
        

        {/* Desktop: horizontal flow */}
        <div className="relative mt-20 hidden lg:block">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-[26px] h-[120px] w-full"
            aria-hidden="true">
            
            <defs>
              <linearGradient id="ivx-process-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#006BFF" />
                <stop offset="50%" stopColor="#00D9FF" />
                <stop offset="100%" stopColor="#C238FF" />
              </linearGradient>
            </defs>
            <motion.path
              d="M40 60 C 180 8, 300 110, 440 60 S 700 8, 840 60 S 1080 110, 1160 60"
              fill="none"
              stroke="url(#ivx-process-line)"
              strokeWidth="1.6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2, ease: 'easeInOut' }} />
            
            <path
              d="M40 60 C 180 8, 300 110, 440 60 S 700 8, 840 60 S 1080 110, 1160 60"
              fill="none"
              stroke="#00D9FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 1200"
              className="animate-dash-flow"
              style={{ animationDuration: '6s' }} />
            
          </svg>

          <ol className="relative grid grid-cols-5 gap-6">
            {processSteps.map((step, i) =>
            <Reveal key={step.number} delay={0.15 + i * 0.12}>
                <li className={`group ${i % 2 === 0 ? 'pt-0' : 'pt-24'}`}>
                  <div className="flex items-center gap-3">
                    <span className="relative inline-flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-3 w-3 rounded-full bg-brand-cyan/25" />
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    </span>
                    <span className="font-mono text-[0.72rem] tracking-[0.18em] text-slateish/70">
                      {step.number}
                    </span>
                  </div>
                  <div className="mt-5 rounded-2xl border border-hairline bg-surface/40 p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand-cyan/40 group-hover:bg-surface/70">
                    <h3 className="font-heading text-[1.3rem] font-medium text-ivory">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slateish">{step.copy}</p>
                    <p className="mt-4 border-t border-hairline/70 pt-4 text-[0.82rem] leading-relaxed text-slateish/70">
                      {step.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            )}
          </ol>
        </div>

        {/* Mobile / tablet: vertical flow */}
        <ol className="relative mt-14 lg:hidden">
          <span className="absolute bottom-4 left-[15px] top-2 w-px bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-violet opacity-70" />
          {processSteps.map((step, i) =>
          <Reveal key={step.number} delay={i * 0.06}>
              <li className="relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-ink">
                  <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                </span>
                <div className="flex-1 rounded-2xl border border-hairline bg-surface/45 p-5">
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-slateish/70">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-heading text-[1.2rem] font-medium text-ivory">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-slateish">{step.copy}</p>
                </div>
              </li>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}