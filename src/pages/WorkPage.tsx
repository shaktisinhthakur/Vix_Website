import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { caseStudies } from '../data/site';

const filters = ['All', 'AI', 'SaaS', 'Web', 'Developer Tools', 'Infrastructure'] as const;

export function WorkPage() {
  const [active, setActive] = useState<typeof filters[number]>('All');
  const filtered = active === 'All' ? caseStudies : caseStudies.filter(c => c.category.toLowerCase().includes(active.toLowerCase()) || c.stack.join(' ').toLowerCase().includes(active.toLowerCase()));
  // Keep category neutral — remove fabricated metrics; show stack and neutral copy
  return (
    <>
      <PageHero eyebrow="Work" title={<>Ideas We've Turned <span className="ivx-text-gradient">Into Technology.</span></>} copy="Selected platforms we designed, engineered and shipped with our partners. No invented metrics — just what the system does and how it's built." />
      <section className="border-t border-hairline/60 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} type="button" onClick={() => setActive(f)} className={`rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-colors ${active === f ? 'border-brand-cyan/50 bg-surface text-ivory' : 'border-hairline bg-surface/30 text-slateish hover:border-brand-cyan/30 hover:text-ivory'}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filtered.map((project) => (
              <Reveal key={project.id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/40 transition-all duration-500 hover:border-brand-blue/30 hover:bg-surface/60">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={project.image} alt={`${project.name} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ivory backdrop-blur">{project.category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <h3 className="font-heading text-[1.5rem] font-semibold text-ivory">{project.name}</h3>
                    <p className="mt-3 text-[0.92rem] leading-relaxed text-slateish">{project.copy}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map(t => (
                        <li key={t} className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-slateish">{t}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-medium text-ivory">View Project <span className="text-brand-cyan">→</span></Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {!filtered.length ? (
            <p className="mt-10 rounded-2xl border border-hairline bg-surface/30 px-6 py-8 text-center text-slateish">No projects in this category yet.</p>
          ) : null}

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-2xl border border-hairline bg-surface/20 px-6 py-6 text-center">
              <p className="text-[0.88rem] leading-relaxed text-slateish">Project details shown here are illustrative placeholders. Replace the copy, stack and imagery with real case studies when available — the layout is ready.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection title={<>Have a system worth <span className="ivx-text-gradient">building properly?</span></>} copy="We'd love to hear what you're building — and help you ship it." primaryTo="/contact" secondaryLabel="Our Services" secondaryTo="/services" />
    </>
  );
}
