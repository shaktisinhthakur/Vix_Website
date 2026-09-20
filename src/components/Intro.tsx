import React from 'react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { introStats } from '../data/site';

const ACCENTS = ['#0B4FD1', '#2ED8E6', '#FFC02E', '#A63BE0'] as const;

export function Intro() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Top hairline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #112DA7 15%, #2ED8E6 45%, #FFC02E 72%, transparent)',
          opacity: 0.55
        }}
      />

      <div
        className="pointer-events-none absolute -left-40 top-10 hidden h-[420px] w-[420px] rounded-full blur-[150px] lg:block"
        style={{ background: 'radial-gradient(circle, #0B4FD11F 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 hidden h-[380px] w-[380px] rounded-full blur-[150px] lg:block"
        style={{ background: 'radial-gradient(circle, #FFC02E14 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                Where Ideas Become
                <br className="hidden sm:block" /> Technology.
              </>
            }
          />

          <Reveal delay={0.1}>
            <div className="space-y-6 lg:pt-16">
              <p className="text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem]">
                Ideavix is a technology studio built at the intersection of{' '}
                <span className="font-medium text-ivory">applied AI</span>,{' '}
                <span className="font-medium text-ivory">software engineering</span> and{' '}
                <span className="font-medium text-ivory">product design</span>. We work with
                founders and enterprise teams who have a serious idea and need it built properly.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-slateish">
                Our teams pair machine learning and intelligent automation with modern web
                architecture — so the product you launch is not a prototype with a demo script, but
                a system your business can run on.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {introStats.map((stat, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={stat.value} delay={i * 0.08}>
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-navy/40 px-6 py-8 transition-all duration-500 hover:-translate-y-1 hover:border-transparent sm:px-7 sm:py-10"
                  style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.03) inset' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${accent}66`;
                    e.currentTarget.style.boxShadow = `0 20px 45px -25px ${accent}80, 0 1px 0 0 rgba(255,255,255,0.03) inset`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.boxShadow = '0 1px 0 0 rgba(255,255,255,0.03) inset';
                  }}
                >
                  <span
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: `${accent}33` }}
                  />

                  <span
                    className="relative flex h-9 w-9 items-center justify-center rounded-lg font-mono text-[0.72rem] tabular-nums transition-colors duration-500"
                    style={{ backgroundColor: `${accent}1A`, color: accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="relative mt-5 font-heading text-[1.15rem] font-medium leading-snug text-ivory sm:text-[1.25rem]">
                    {stat.value}
                  </h3>

                  <p className="relative mt-3 text-[0.88rem] leading-relaxed text-slateish">
                    {stat.detail}
                  </p>

                  <span
                    className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: accent }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}