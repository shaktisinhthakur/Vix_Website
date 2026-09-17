import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { serviceDetails, services, processSteps } from '../data/site';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const detail = slug ? serviceDetails[slug] : undefined;
  if (!detail) return <Navigate to="/services" replace />;

  const related = services.filter(s => s.slug !== detail.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={detail.title} title={detail.heroTitle} copy={detail.heroCopy} actions={<><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.7)]">Start a Project <ArrowRight className="h-4 w-4" /></Link><Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-brand-cyan/40">View Work</Link></>} />

      {/* Overview */}
      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-brand-cyan">Service overview</p>
              <p className="mt-4 text-[1.06rem] leading-relaxed text-slateish sm:text-[1.12rem]">{detail.overview}</p>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-slateish">{detail.overview2}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-hairline bg-surface/40 p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slateish/60">At a glance</p>
                <ul className="mt-5 space-y-3">
                  {detail.capabilities.slice(0, 4).map(c => (
                    <li key={c} className="flex items-start gap-2.5 text-[0.92rem] text-slateish"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />{c}</li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.82rem] leading-relaxed text-slateish/70">Every engagement is scoped to outcomes, not hours — with explicit deliverables and review checkpoints.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-hairline/60 bg-navy/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading eyebrow="What we build" title="Capabilities tailored to this service." copy={`From discovery to production — here's what ${detail.title.toLowerCase()} covers at Ideavix.`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.whatWeBuild.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors hover:bg-surface/70">
                  <h3 className="font-heading text-[1.02rem] font-medium text-ivory">{item.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-slateish">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + Technologies + Use cases */}
      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal>
              <h3 className="font-heading text-[1.2rem] font-medium text-ivory">Capabilities</h3>
              <ul className="mt-5 space-y-2.5">
                {detail.capabilities.map(c => (
                  <li key={c} className="flex items-center gap-2.5 text-[0.9rem] text-slateish"><Check className="h-4 w-4 shrink-0 text-brand-cyan" />{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="font-heading text-[1.2rem] font-medium text-ivory">Technology</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {detail.technologies.map(t => (
                  <span key={t} className="rounded-full border border-hairline bg-surface/50 px-3.5 py-2 text-[0.84rem] text-ivory">{t}</span>
                ))}
              </div>
              <p className="mt-4 text-[0.84rem] leading-relaxed text-slateish/70">Stack is chosen per engagement — these are the tools we reach for most in this domain.</p>
            </Reveal>
            <Reveal delay={0.14}>
              <h3 className="font-heading text-[1.2rem] font-medium text-ivory">Use cases</h3>
              <ul className="mt-5 space-y-2.5">
                {detail.useCases.map(u => (
                  <li key={u} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-slateish"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-violet" />{u}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-hairline/60 bg-navy/20 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading eyebrow="How we deliver" title="From idea to impact." copy="A continuous line from first conversation to a platform that keeps growing." />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(s => (
              <li key={s.number} className="rounded-2xl border border-hairline bg-surface/40 p-6">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-slateish/60">{s.number}</span>
                <h4 className="mt-3 font-heading text-[1.05rem] font-medium text-ivory">{s.title}</h4>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-slateish">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <h3 className="font-heading text-[1.4rem] font-semibold text-ivory">Related services</h3>
            <Link to="/services" className="hidden text-[0.88rem] font-medium text-brand-cyan hover:text-ivory sm:inline-flex">View all →</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors hover:bg-surface/70">
                <h4 className="font-heading text-[1.02rem] font-medium text-ivory">{s.title}</h4>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slateish">{s.copy}</p>
                <span className="mt-4 inline-flex text-[0.84rem] font-medium text-brand-cyan">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={<>Let's build your <span className="ivx-text-gradient">{detail.title.toLowerCase()}</span> properly.</>} copy="Tell us what you're building — we'll map the fastest path to production." primaryTo="/contact" secondaryLabel="View All Services" secondaryTo="/services" />
    </>
  );
}
