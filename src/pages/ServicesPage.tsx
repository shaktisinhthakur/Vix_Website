import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code2, Bot, Layers, PenTool, Cloud, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { services, Service } from '../data/site';

const iconMap: Record<Service['icon'], React.ComponentType<{ className?: string; style?: React.CSSProperties } & { strokeWidth?: number }>> = { brain: Brain, code: Code2, bot: Bot, layers: Layers, pen: PenTool, cloud: Cloud };

const serviceExtras: Record<string, { capabilities: string[] }> = {
  'ai-development': { capabilities: ['LLM Integration', 'RAG Systems', 'AI Agents'] },
  'software-development': { capabilities: ['APIs & Backends', 'Event Systems', 'Integrations'] },
  'web-development': { capabilities: ['React / Next.js', 'Design Systems', 'Performance'] },
  'saas-development': { capabilities: ['Multi-tenant', 'Billing & Auth', 'Dashboards'] },
  'ui-ux-design': { capabilities: ['Product Design', 'Design Systems', 'Prototyping'] },
  'cloud-infrastructure': { capabilities: ['Cloud Architecture', 'CI/CD', 'Observability'] },
};

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Engineering Ideas Into <span className="ivx-text-gradient">Digital Products.</span></>}
        copy="Six disciplines, one senior delivery team. We assemble the capability mix your product actually needs — from AI and engineering to design and infrastructure."
      />
      <section className="relative border-t border-hairline/60 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 ivx-dots opacity-30 [mask-image:radial-gradient(ellipse_55%_45%_at_50%_0%,#000,transparent)]" />
        <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon];
              const extra = serviceExtras[s.slug];
              return (
                <Reveal key={s.id} delay={(i % 3) * 0.07}>
                  <Link to={`/services/${s.slug}`} className="ivx-border-anim group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-surface/80 hover:shadow-[0_28px_60px_-30px_rgba(0,107,255,0.45)]">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-35" style={{ backgroundColor: s.accent }} />
                    <div className="relative flex items-start justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-ink/70" style={{ boxShadow: `inset 0 0 22px -12px ${s.accent}` }}>
                        <Icon className="h-5 w-5" style={{ color: s.accent }} strokeWidth={1.6} />
                      </span>
                      <ArrowUpRight className="h-4 w-4 translate-y-1 text-slateish/40 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory group-hover:opacity-100" />
                    </div>
                    <h3 className="relative mt-7 font-heading text-[1.18rem] font-medium leading-snug text-ivory">{s.title}</h3>
                    <p className="relative mt-3 text-[0.92rem] leading-relaxed text-slateish">{s.copy}</p>
                    {extra ? (
                      <ul className="relative mt-5 flex flex-wrap gap-2">
                        {extra.capabilities.map(c => (
                          <li key={c} className="rounded-full border border-hairline bg-ink/40 px-3 py-1 text-[0.68rem] font-mono uppercase tracking-[0.12em] text-slateish">{c}</li>
                        ))}
                      </ul>
                    ) : null}
                    <span className="relative mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-ivory">Explore Service <span className="text-brand-cyan transition-transform group-hover:translate-x-0.5">→</span></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection title={<>Have an idea that <span className="ivx-text-gradient">deserves proper engineering?</span></>} copy="Tell us what you're building — we'll help you shape it into technology that matters." primaryLabel="Start a Conversation" primaryTo="/contact" secondaryLabel="See How We Work" secondaryTo="/about" />
    </>
  );
}
