import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { products } from '../data/site';

export function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>Technology We Build <span className="ivx-text-gradient">for Tomorrow.</span></>} copy="Reference architectures and platform primitives we use with clients — built to be cloned, extended, and owned by your team." />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-hairline bg-surface/40 p-7 transition-colors hover:bg-surface/70">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-[1.35rem] font-semibold text-ivory">{p.name}</h3>
                    <span className="shrink-0 rounded-full border border-hairline bg-ink/50 px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-slateish">{p.status}</span>
                  </div>
                  <p className="mt-1 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-brand-cyan">{p.category}</p>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-slateish">{p.description}</p>
                  <p className="mt-4 font-mono text-[0.72rem] text-slateish/60">{p.tech}</p>
                  <span className="mt-6 inline-flex text-[0.86rem] font-medium text-slateish group-hover:text-ivory">Learn more <span className="ml-1 text-brand-cyan">→</span></span>
                  <p className="mt-2 text-[0.72rem] text-slateish/50">Placeholder — ready to replace with real product detail when available.</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-dashed border-hairline bg-surface/20 px-6 py-8 text-center">
              <p className="font-heading text-[1.1rem] font-medium text-ivory">Have a product in mind?</p>
              <p className="mx-auto mt-2 max-w-xl text-[0.92rem] leading-relaxed text-slateish">We can shape these primitives around your domain — tenancy, billing, and observability included from day one.</p>
              <Link to="/contact" className="mt-5 inline-flex rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-[0.9rem] font-medium text-white">Talk to us →</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection title={<>Build your next product <span className="ivx-text-gradient">on solid ground.</span></>} copy="We bring the primitives — you bring the domain. Together we ship something durable." primaryTo="/contact" secondaryLabel="See Our Work" secondaryTo="/work" />
    </>
  );
}
