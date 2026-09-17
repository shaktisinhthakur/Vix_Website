import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { caseStudies } from '../data/site';

type FeaturedWorkProps = {
  layout?: 'editorial' | 'grid';
};

export function FeaturedWork({ layout = 'editorial' }: FeaturedWorkProps) {
  const isGrid = layout === 'grid';

  return (
    <section className="relative border-t border-hairline/60 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured work"
            title="Built for the Future."
            copy="Selected platforms we designed, engineered and shipped with our partners." />
          <Reveal delay={0.1}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-[0.88rem] font-medium text-ivory">
              All case studies
              <ArrowRight className="h-4 w-4 text-brand-cyan transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div
          className={
          isGrid ?
          'mt-14 grid gap-6 md:grid-cols-2' :
          'mt-14 flex flex-col gap-6 sm:mt-16 sm:gap-8'
          }>
          {caseStudies.map((project, i) => {
            const flipped = !isGrid && i % 2 === 1;
            return (
              <Reveal key={project.id} delay={0.06 * (i % 2)}>
                <article
                  className={`group relative overflow-hidden rounded-3xl border border-hairline bg-surface/40 transition-all duration-500 hover:border-brand-blue/40 hover:bg-surface/70 hover:shadow-[0_40px_90px_-50px_rgba(0,107,255,0.6)] ${
                  isGrid ? '' : 'lg:grid lg:grid-cols-2 lg:items-stretch'}`
                  }>
                  <div
                    className={`relative overflow-hidden ${
                    isGrid ? 'aspect-[16/10]' : 'aspect-[16/10] lg:aspect-auto'} ${
                    flipped ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={`${project.name} interface`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline/60" />
                  </div>

                  <div
                    className={`flex flex-col justify-between gap-8 p-7 sm:p-9 ${
                    isGrid ? '' : 'lg:p-12'} ${
                    flipped ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-brand-cyan">
                          {project.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-hairline" />
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slateish/60">
                          {project.stack.join(' · ')}
                        </span>
                      </div>
                      <h3
                        className={`mt-5 font-heading font-semibold leading-tight tracking-tight text-ivory ${
                        isGrid ? 'text-[1.6rem]' : 'text-[1.75rem] sm:text-[2.2rem]'}`
                        }>
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-slateish">
                        {project.copy}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <ul className="flex flex-wrap gap-2">
                        {project.stack.map((tech) =>
                        <li
                          key={tech}
                          className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-slateish">
                            {tech}
                          </li>
                        )}
                      </ul>
                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-2 text-[0.88rem] font-medium text-ivory">
                        View Case Study
                        <ArrowRight className="h-4 w-4 text-brand-cyan transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>);
          })}
        </div>
      </div>
    </section>);

}
