import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { solutionsOverview } from '../data/site';

export function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title={<>Intelligence That <span className="ivx-text-gradient">Moves Business Forward.</span></>} copy="Ideavix's intelligent technology solutions — grounded in your data, governed for production, and designed to compound." />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {solutionsOverview.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link to={`/solutions/${s.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-surface/80">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-30" style={{ backgroundColor: s.accent }} />
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-slateish/60">0{i + 1} — Solution</p>
                  <h3 className="mt-4 font-heading text-[1.35rem] font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-slateish">{s.copy}</p>
                  <ul className="mt-6 space-y-2 text-[0.84rem] text-slateish/80">
                    {s.slug === 'ai-agents' ? <><li>• Tool calling & memory</li><li>• Multi-agent orchestration</li></> : null}
                    {s.slug === 'generative-ai' ? <><li>• RAG & semantic search</li><li>• Grounded generation</li></> : null}
                    {s.slug === 'intelligent-automation' ? <><li>• Event-driven workflows</li><li>• Workflow orchestration</li></> : null}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-ivory">Explore solution <ArrowRight className="h-4 w-4 text-brand-cyan transition-transform group-hover:translate-x-0.5" /></span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Mention row */}
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-hairline bg-surface/30 px-6 py-6 sm:px-8">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-slateish/60">Also within our solutions</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['RAG', 'AI-powered applications', 'Knowledge systems', 'Workflow automation', 'Semantic search', 'Human-in-the-loop'].map(t => (
                  <span key={t} className="rounded-full border border-hairline bg-ink/50 px-3.5 py-2 text-[0.82rem] text-slateish">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection title={<>Ready to put <span className="ivx-text-gradient">intelligence</span> to work?</>} copy="Let's map the highest-leverage place to apply AI in your business." primaryTo="/contact" secondaryLabel="View Services" secondaryTo="/services" />
    </>
  );
}
