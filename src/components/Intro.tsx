import React from 'react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { introStats } from '../data/site';

export function Intro() {
  return (
    <section  className="relative border-t border-hairline/60 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title={
            <>
                Where Ideas Become
                <br className="hidden sm:block" /> Technology.
              </>
            } />
          
          <Reveal delay={0.1}>
            <div className="space-y-6 lg:pt-16">
              <p className="text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem]">
                Ideavix is a technology studio built at the intersection of{' '}
                <span className="text-ivory">applied AI</span>,{' '}
                <span className="text-ivory">software engineering</span> and{' '}
                <span className="text-ivory">product design</span>. We work with founders and
                enterprise teams who have a serious idea and need it built properly.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-slateish">
                Our teams pair machine learning and intelligent automation with modern web
                architecture — so the product you launch is not a prototype with a demo script, but
                a system your business can run on.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline/60 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {introStats.map((stat, i) =>
          <Reveal key={stat.value} delay={i * 0.08}>
              <div className="group relative h-full bg-ink px-6 py-8 transition-colors duration-500 hover:bg-navy sm:px-7 sm:py-10">
                <span className="font-mono text-[0.66rem] text-slateish/50">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-heading text-[1.15rem] font-medium leading-snug text-ivory sm:text-[1.25rem]">
                  {stat.value}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-slateish">{stat.detail}</p>
                <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}