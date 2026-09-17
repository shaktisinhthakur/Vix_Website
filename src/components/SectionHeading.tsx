import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <Reveal className={className}>
      <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        <div
          className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-brand-cyan" />
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-brand-cyan">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-5 font-heading text-[2.1rem] font-semibold leading-[1.08] tracking-tightest text-ivory sm:text-[2.75rem] lg:text-[3.35rem]">
          {title}
        </h2>
        {copy ?
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-slateish sm:text-[1.05rem]">
            {copy}
          </p> :
        null}
      </div>
    </Reveal>);

}