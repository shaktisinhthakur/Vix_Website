import React from 'react';
import { Lightbulb, Cpu, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Ideas taken seriously',
    copy: 'Every engagement starts with the problem, not the tech stack.',
    color: '#FFB800'
  },
  {
    icon: Cpu,
    title: 'Engineering as craft',
    copy: 'Systems written to be read, extended and trusted years from now.',
    color: '#00D9FF'
  },
  {
    icon: Rocket,
    title: 'Impact as the metric',
    copy: 'We measure success by what the product changes, not what it ships with.',
    color: '#7B2CFF'
  }
];

export function About() {
  return (
    <section className="relative border-t border-border/60 bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About Ideavix"
              title={
                <>
                  Built by People Who Believe Technology Should Create Impact.
                </>
              }
            />

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 max-w-2xl">
                <p className="text-[1rem] leading-relaxed text-muted-foreground sm:text-[1.08rem]">
                  Ideavix was founded on a simple frustration: too much ambitious thinking dies in a
                  slide deck. We assembled a team of engineers, designers and applied AI
                  practitioners who would rather build the thing and prove it works.
                </p>
                <p className="text-[0.96rem] leading-relaxed text-muted-foreground">
                  We stay deliberately small and senior. That means fewer handoffs, direct access to
                  the people writing the code, and decisions made by the people accountable for the
                  outcome. We choose problems where technology can create genuine leverage — and we
                  stay until it does.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.1 + i * 0.08}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-all duration-500 hover:border-primary/40 hover:bg-card/70">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background/70"
                      style={{
                        boxShadow: `inset 0 0 20px -12px ${pillar.color}`
                      }}
                    >
                      <pillar.icon className="h-4 w-4" style={{ color: pillar.color }} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading text-[1rem] font-medium text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted-foreground">
                        {pillar.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2}>
            <div className="relative lg:sticky lg:top-28">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-border bg-background/70 p-7">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-muted-foreground/60">
                    the throughline
                  </p>
                  <div className="mt-6 space-y-4">
                    {['Ideas', 'Intelligence', 'Engineering', 'Impact'].map((word, i) => (
                      <div key={word} className="flex items-center gap-4">
                        <span className="font-mono text-[0.68rem] text-muted-foreground/50">0{i + 1}</span>
                        <span
                          className={`font-heading text-[1.5rem] font-semibold tracking-tight sm:text-[1.9rem] ${
                            i === 3 ? 'ivx-text-gradient' : 'text-foreground'
                          }`}
                        >
                          {word}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-card/50 p-6">
                  <p className="font-heading text-[1.15rem] font-medium text-foreground">Product-minded</p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                    Design and engineering under one roof
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card/50 p-6">
                  <p className="font-heading text-[1.15rem] font-medium text-foreground">Cross-industry</p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                    From fintech to healthcare and beyond
                  </p>
                </div>
                <div className="col-span-2 rounded-3xl border border-border bg-card/50 p-6">
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    "We only take on work where we can see the line from the idea to the impact."
                  </p>
                  <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-brand-cyan">
                    Ideavix engineering principles
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}