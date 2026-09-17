import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../Reveal';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function CTASection({ eyebrow = 'Ideas to Impact', title, copy, primaryLabel = 'Start a Conversation', primaryTo = '/contact', secondaryLabel, secondaryTo }: Props) {
  return (
    <section className="relative overflow-hidden border-t border-hairline/60 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/12 blur-[150px]" />
      <div className="pointer-events-none absolute left-[22%] top-[58%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[18%] top-[30%] h-[360px] w-[360px] rounded-full bg-brand-purple/14 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 ivx-grid opacity-15 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000,transparent_75%)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.26em] text-slateish">{eyebrow}</span>
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-8 max-w-4xl font-heading text-[2.2rem] font-semibold leading-[1.05] tracking-tightest text-ivory sm:text-[3.4rem] lg:text-[4rem]">{title}</h2>
        </Reveal>
        {copy ? <Reveal delay={0.14}><p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-relaxed text-slateish sm:text-[1.08rem]">{copy}</p></Reveal> : null}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to={primaryTo} className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue via-[#2f7dff] to-brand-purple px-8 py-4 text-[0.98rem] font-medium text-white shadow-[0_22px_50px_-20px_rgba(0,107,255,0.8)] transition-transform duration-300 hover:-translate-y-0.5">
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            {secondaryLabel && secondaryTo ? (
              <Link to={secondaryTo} className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface/40 px-8 py-4 text-[0.98rem] font-medium text-ivory backdrop-blur-md transition-all duration-300 hover:border-brand-cyan/50 hover:bg-surface/70">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
