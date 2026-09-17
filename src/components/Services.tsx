import React from "react";
import { Link } from "react-router-dom";
import { Bot, Brain, Cloud, Code2, Layers, PenTool, ArrowUpRight, BoxIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { services, Service } from "../data/site";
const iconMap: Record<Service['icon'], BoxIcon> = {
  brain: Brain,
  code: Code2,
  bot: Bot,
  layers: Layers,
  pen: PenTool,
  cloud: Cloud
};
export function Services() {
  return <section  className="relative border-t border-hairline/60 bg-navy/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 ivx-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Capabilities" title="What We Build" copy="Six disciplines, one delivery team. We assemble the capability mix your product actually needs." />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return <Reveal key={service.id} delay={i % 3 * 0.08}>
                <Link to={`/services/${service.slug}`} className="ivx-border-anim group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-surface/80 hover:shadow-[0_28px_60px_-30px_rgba(0,107,255,0.45)]">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{
                backgroundColor: service.accent
              }} />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-ink/70" style={{
                  boxShadow: `inset 0 0 22px -12px ${service.accent}`
                }}>
                      <Icon className="h-5 w-5" style={{
                    color: service.accent
                  }} strokeWidth={1.6} />
                    </span>
                    <ArrowUpRight className="h-4 w-4 translate-y-1 text-slateish/40 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory group-hover:opacity-100" />
                  </div>
                  <h3 className="relative mt-7 font-heading text-[1.18rem] font-medium leading-snug text-ivory">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-[0.92rem] leading-relaxed text-slateish">
                    {service.copy}
                  </p>
                  <span className="relative mt-5 inline-flex text-[0.82rem] font-medium text-brand-cyan opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
                </Link>
              </Reveal>;
        })}
        </div>
      </div>
    </section>;
}