import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Cpu, Rocket, Target, Heart, Compass } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';

export function AboutPage() {
  return (
    <>
      <Seo path="/about" title="About Ideavix" description="Ideavix is a technology studio at the intersection of applied AI, software engineering and product design — deliberately small, senior, and accountable for outcomes." />
      <PageHero eyebrow="About Ideavix" title={<>Technology Starts <span className="ivx-text-gradient">With an Idea.</span></>} copy="We are a technology studio at the intersection of applied AI, software engineering and product design — deliberately small, senior, and accountable for outcomes." />

      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Our story" title="Too much ambitious thinking dies in a slide deck." copy="Ideavix was founded on that frustration — by engineers, designers and applied AI practitioners who would rather build the thing and prove it works." />
              <Reveal delay={0.08}>
                <div className="mt-8 space-y-5 max-w-2xl">
                  <p className="text-[1rem] leading-relaxed text-slateish sm:text-[1.06rem]">We stay deliberately small and senior. Fewer handoffs, direct access to the people writing the code, and decisions made by the people accountable for the outcome.</p>
                  <p className="text-[0.96rem] leading-relaxed text-slateish">We choose problems where technology can create genuine leverage — and we stay until it does. No slideware, no handoff theatre.</p>
                </div>
              </Reveal>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Target, title: 'Our Mission', copy: 'Turn ambitious ideas into systems businesses can run on.' },
                  { icon: Compass, title: 'Our Philosophy', copy: 'Clarity over novelty. Systems written to be read and extended.' },
                  { icon: Heart, title: 'Our Values', copy: 'Craft, accountability, and impact as the metric.' },
                ].map(item => (
                  <Reveal key={item.title}>
                    <div className="rounded-2xl border border-hairline bg-surface/40 p-5">
                      <item.icon className="h-5 w-5 text-brand-cyan" strokeWidth={1.7} />
                      <h3 className="mt-3 font-heading text-[1rem] font-medium text-ivory">{item.title}</h3>
                      <p className="mt-2 text-[0.84rem] leading-relaxed text-slateish">{item.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.12}>
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="overflow-hidden rounded-3xl border border-hairline bg-ink/70 p-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-slateish/60">the throughline</p>
                  <div className="mt-6 space-y-4">
                    {['Ideas','Intelligence','Engineering','Impact'].map((word, i) => (
                      <div key={word} className="flex items-center gap-4">
                        <span className="font-mono text-[0.68rem] text-slateish/50">0{i+1}</span>
                        <span className={`font-heading text-[1.5rem] font-semibold tracking-tight sm:text-[1.9rem] ${i===3 ? 'ivx-text-gradient' : 'text-ivory'}`}>{word}</span>
                        <span className="h-px flex-1 bg-gradient-to-r from-hairline to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-hairline bg-surface/50 p-6">
                  <p className="font-heading text-[1.6rem] font-semibold text-ivory">How we think</p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-slateish">We pair discovery, design and engineering in one team — so decisions are made where the context lives.</p>
                  <Link to="/contact" className="mt-4 inline-flex text-[0.86rem] font-medium text-brand-cyan hover:text-ivory">Start a conversation →</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline/60 bg-navy/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading eyebrow="Innovation" title="What we optimise for." copy="Typed contracts, observable boundaries and boring infrastructure — so the next good idea is easy to say yes to." align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { icon: Lightbulb, title: 'Ideas taken seriously', copy: 'Every engagement starts with the problem, not the tech stack.' },
              { icon: Cpu, title: 'Engineering as craft', copy: 'Systems written to be read, extended and trusted years from now.' },
              { icon: Rocket, title: 'Impact as the metric', copy: 'We measure success by what the product changes.' },
            ].map(p => (
              <Reveal key={p.title}>
                <div className="rounded-2xl border border-hairline bg-surface/40 p-6 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-ink/60"><p.icon className="h-5 w-5 text-brand-cyan" strokeWidth={1.7} /></span>
                  <h3 className="mt-4 font-heading text-[1rem] font-medium text-ivory">{p.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-slateish">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={<>Let's turn your idea <span className="ivx-text-gradient">into impact.</span></>} copy="Tell us what you're building — we'll map the path to production." primaryTo="/contact" secondaryLabel="View Work" secondaryTo="/work" />
    </>
  );
}
