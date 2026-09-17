import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { technologies } from '../data/site';

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative border-t border-hairline/60 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Technology"
            title="A Considered Stack."
            copy="We pick tools for longevity, not novelty — typed end to end, observable in production and boring where boring is a virtue." />
          

          <div>
            <ul className="flex flex-wrap gap-2.5">
              {technologies.map((tech, i) =>
              <Reveal key={tech.name} delay={i * 0.035}>
                  <li>
                    <button
                    type="button"
                    onMouseEnter={() => setActive(tech.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(tech.name)}
                    onBlur={() => setActive(null)}
                    className="group relative flex items-center gap-2.5 rounded-full border border-hairline bg-surface/40 px-4 py-2.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:bg-surface/80">
                    
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue transition-colors duration-300 group-hover:bg-brand-cyan" />
                      <span className="text-[0.88rem] font-medium text-ivory">{tech.name}</span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-slateish/60">
                        {tech.group}
                      </span>
                    </button>
                  </li>
                </Reveal>
              )}
            </ul>

            <div className="mt-8 flex min-h-[64px] items-center rounded-2xl border border-hairline bg-surface/30 px-6 py-5">
              <p className="text-[0.9rem] text-slateish">
                {active ?
                <>
                    <span className="text-ivory">{active}</span> — part of our{' '}
                    <span className="text-brand-cyan">
                      {technologies.find((t) => t.name === active)?.group.toLowerCase()}
                    </span>{' '}
                    layer, used in production across client platforms.
                  </> :

                'Hover a technology to see where it sits in our architecture.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}