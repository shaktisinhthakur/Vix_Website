import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { solutionDetails, solutionsOverview } from '../data/site';

function AgentFlow() {
  const steps = ['User', 'AI Agent', 'Reasoning', 'Tools', 'Data', 'Action'];
  return (
    <div className="rounded-3xl border border-hairline bg-ink/60 p-6 sm:p-8">
      <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-slateish/60">agent workflow</p>
      <div className="mt-6 flex flex-col items-center gap-3 sm:gap-4">
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-hairline bg-surface/60 px-4 py-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 font-mono text-[0.68rem] text-brand-cyan">{i + 1}</span>
              <span className="text-[0.92rem] font-medium text-ivory">{label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-cyan opacity-60" />
            </div>
            {i < steps.length - 1 ? <span className="h-5 w-px bg-gradient-to-b from-brand-cyan/60 to-hairline" /> : null}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline/50">
        {[{k:'traced',v:'Traced'},{k:'grounded',v:'Cited'},{k:'eval',v:'Measured'}].map(m=>(
          <div key={m.k} className="bg-surface/70 px-3 py-4 text-center">
            <p className="font-heading text-[1rem] font-medium text-ivory">{m.v}</p>
            <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-slateish/60">{m.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams();
  const detail = slug ? solutionDetails[slug] : undefined;
  if (!detail) return <Navigate to="/solutions" replace />;
  const others = solutionsOverview.filter(s => s.slug !== detail.slug);

  return (
    <>
      <PageHero eyebrow={detail.title} title={detail.heroTitle} copy={detail.heroCopy} actions={<><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 text-[0.95rem] font-medium text-white">Talk to us <ArrowRight className="h-4 w-4" /></Link><Link to="/solutions" className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-brand-cyan/40">All solutions</Link></>} />

      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.9fr] lg:gap-12">
            <div>
              <SectionHeading eyebrow="What this solution covers" title="Designed for production from the first line." copy="We treat each capability as a system concern — with contracts, observability and evaluation built in." />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {detail.sections.map((sec, i) => (
                  <Reveal key={sec.title} delay={(i % 2) * 0.06}>
                    <div className="h-full rounded-2xl border border-hairline bg-surface/40 p-6 hover:bg-surface/60">
                      <h3 className="font-heading text-[1rem] font-medium text-ivory">{sec.title}</h3>
                      <p className="mt-2 text-[0.88rem] leading-relaxed text-slateish">{sec.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.12}>
              {detail.slug === 'ai-agents' ? <AgentFlow /> : (
                <div className="rounded-3xl border border-hairline bg-surface/40 p-7">
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-slateish/60">how we ship it</p>
                  <ul className="mt-6 space-y-4">
                    {['Discovery & golden sets','Architecture & contracts','Build & evaluation','Hardening & rollout','Measure & compound'].map((step, i) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline bg-ink font-mono text-[0.62rem] text-brand-cyan">{i+1}</span>
                        <span className="text-[0.92rem] text-slateish">{step}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[0.84rem] leading-relaxed text-slateish/70">Every solution is delivered with traces, evals and a handoff your team can own on day two.</p>
                </div>
              )}
            </Reveal>
          </div>

          {others.length ? (
            <div className="mt-16 border-t border-hairline/60 pt-10">
              <h3 className="font-heading text-[1.2rem] font-medium text-ivory">Other solutions</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {others.map(o => (
                  <Link key={o.slug} to={`/solutions/${o.slug}`} className="rounded-2xl border border-hairline bg-surface/40 p-6 hover:bg-surface/70">
                    <h4 className="font-heading text-[1.05rem] font-medium text-ivory">{o.title}</h4>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-slateish">{o.copy}</p>
                    <span className="mt-3 inline-flex text-[0.84rem] font-medium text-brand-cyan">Explore →</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <CTASection title={<>Bring <span className="ivx-text-gradient">{detail.title.toLowerCase()}</span> into your product.</>} copy="Let's find the sharpest place to start — and ship something your team can run on." primaryTo="/contact" secondaryLabel="View All Solutions" secondaryTo="/solutions" />
    </>
  );
}
