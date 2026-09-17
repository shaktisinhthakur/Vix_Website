import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { insights } from '../data/site';

const cats = ['All', 'AI', 'Engineering', 'SaaS', 'AI Agents', 'Product', 'Innovation'] as const;

export function InsightsPage() {
  const [active, setActive] = useState<typeof cats[number]>('All');
  const filtered = useMemo(() => active === 'All' ? insights : insights.filter(i => i.category === active), [active]);
  return (
    <>
      <PageHero eyebrow="Insights" title={<>Thinking on <span className="ivx-text-gradient">Building.</span></>} copy="Notes from the studio on AI, engineering, SaaS and product — how we ship technology that lasts." />
      <section className="border-t border-hairline/60 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} type="button" onClick={() => setActive(c)} className={`rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-colors ${active===c ? 'border-brand-cyan/50 bg-surface text-ivory' : 'border-hairline bg-surface/30 text-slateish hover:border-brand-cyan/30 hover:text-ivory'}`}>{c}</button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Reveal key={post.slug}>
                <Link to={`/insights/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-hairline bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70 hover:shadow-[0_24px_60px_-30px_rgba(0,107,255,0.4)]">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-cyan/15 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-brand-cyan">{post.category}</span>
                    <span className="font-mono text-[0.64rem] text-slateish/60">{post.date} · {post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-[1.12rem] font-medium leading-snug text-ivory group-hover:text-white">{post.title}</h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-slateish">{post.description}</p>
                  <span className="mt-5 inline-flex text-[0.84rem] font-medium text-brand-cyan group-hover:text-ivory">Read Article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
          {!filtered.length ? <p className="mt-10 rounded-2xl border border-hairline bg-surface/30 px-6 py-8 text-center text-slateish">No articles in this category yet.</p> : null}
        </div>
      </section>
      <CTASection title={<>Want insights <span className="ivx-text-gradient">applied to your product?</span></>} copy="We can bring the same thinking to your roadmap — concretely." primaryTo="/contact" secondaryLabel="Our Services" secondaryTo="/services" />
    </>
  );
}
