import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-hairline/60 py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/14 blur-[150px]" />
      <div className="pointer-events-none absolute left-[22%] top-[58%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-cyan/12 blur-[130px]" />
      <div className="pointer-events-none absolute right-[18%] top-[30%] h-[360px] w-[360px] rounded-full bg-brand-purple/16 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 ivx-grid opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000,transparent_75%)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.26em] text-slateish">
              Ideas to Impact
            </span>
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-4xl font-heading text-[2.4rem] font-semibold leading-[1.03] tracking-tightest text-ivory sm:text-[3.6rem] lg:text-[4.4rem]">
            Have an Idea?
            <br />
            <span className="ivx-text-gradient">Let’s Turn It Into Impact.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-[1rem] leading-relaxed text-slateish sm:text-[1.1rem]">
            Tell us what you’re building. We’ll help transform the idea into technology that
            matters.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue via-[#2f7dff] to-brand-purple px-8 py-4 text-[0.98rem] font-medium text-white shadow-[0_22px_50px_-20px_rgba(0,107,255,0.8)] transition-transform duration-300 hover:-translate-y-0.5">
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface/40 px-8 py-4 text-[0.98rem] font-medium text-ivory backdrop-blur-md transition-all duration-300 hover:border-brand-cyan/50 hover:bg-surface/70">
              Explore Ideavix
            </Link>
          </div>
        </Reveal>
      </div>
    </section>);

}
