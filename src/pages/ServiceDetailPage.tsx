import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { LiveComparison } from '../components/LiveComparison';
import { ProofMetrics } from '../components/ProofMetrics';
import { serviceDetails, services, processSteps } from '../data/site';

const whatWeBuildAccents = [
  { badge: 'bg-brand-cyan/10 text-brand-cyan', line: 'from-brand-cyan to-brand-cyan/0', glow: 'bg-brand-cyan/25', border: 'hover:border-brand-cyan/40' },
  { badge: 'bg-brand-blue/10 text-brand-blue', line: 'from-brand-blue to-brand-blue/0', glow: 'bg-brand-blue/25', border: 'hover:border-brand-blue/40' },
  { badge: 'bg-brand-violet/10 text-brand-violet', line: 'from-brand-violet to-brand-violet/0', glow: 'bg-brand-violet/25', border: 'hover:border-brand-violet/40' },
  { badge: 'bg-brand-purple/10 text-brand-purple', line: 'from-brand-purple to-brand-purple/0', glow: 'bg-brand-purple/25', border: 'hover:border-brand-purple/40' },
  { badge: 'bg-[#FF9A3D]/10 text-[#FF9A3D]', line: 'from-[#FF9A3D] to-[#FF9A3D]/0', glow: 'bg-[#FF9A3D]/25', border: 'hover:border-[#FF9A3D]/40' },
];

const slugImageMap: Record<string, string> = {
  'software-development': '/se.png',
  'web-development': '/web.png',
  'cloud-infrastructure': '/cloud.png',
  'saas-development': '/saas.png',
  'ui-ux-design': '/uiux.png',
};

export function ServiceDetailPage() {
  const { slug } = useParams();
  const detail = slug ? serviceDetails[slug] : undefined;
  if (!detail) return <Navigate to="/services" replace />;

  const related = services.filter(s => s.slug !== detail.slug).slice(0, 3);

  const heroVisual = detail.heroImage ? (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      {/* Brand ambient glows */}
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-brand-blue/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-[5%] top-[10%] h-48 w-48 rounded-full bg-brand-purple/25 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-40 w-40 rounded-full bg-brand-cyan/15 blur-[70px]" />

      {/* Floating Neural Network */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full"
      >
        <img
          src={detail.heroImage}
          alt={detail.title}
          className="h-full w-full object-contain"
          style={{
            filter: 'drop-shadow(0 0 35px rgba(0,217,255,0.4)) drop-shadow(0 0 70px rgba(123,44,255,0.25))',
          }}
        />
      </motion.div>
    </div>
  ) : undefined;

  const heroImageSrc = detail.heroImage ? undefined : slugImageMap[detail.slug];

  return (
    <>
      <PageHero
        eyebrow={detail.title}
        title={detail.heroTitle}
        copy={detail.heroCopy}
        visual={heroVisual}
        imageSrc={heroImageSrc}
        imageAlt={`${detail.title} Visual`}
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.7)]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-brand-cyan/40"
            >
              View Work
            </Link>
          </>
        }
      />

      {/* Overview */}
      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-brand-cyan via-brand-blue/50 to-transparent" />
                <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-brand-cyan">
                  <span className="h-px w-4 bg-brand-cyan" /> Service overview
                </p>
                <p className="mt-4 text-[1.06rem] leading-relaxed text-slateish sm:text-[1.12rem]">{detail.overview}</p>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-slateish">{detail.overview2}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-7 transition-colors duration-300 hover:border-brand-cyan/30"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-violet" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/15 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slateish/60">At a glance</p>
                  <span className="font-mono text-[0.65rem] text-slateish/40">{String(detail.capabilities.slice(0, 4).length).padStart(2, '0')}</span>
                </div>
                <ul className="relative mt-6 space-y-4">
                  {detail.capabilities.slice(0, 4).map((c, i) => (
                    <li key={c} className="flex items-start gap-3 text-[0.92rem] text-slateish">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 font-mono text-[0.62rem] text-brand-cyan">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 border-t border-hairline/60 pt-5">
                  <p className="text-[0.82rem] leading-relaxed text-slateish/70">Every engagement is scoped to outcomes, not hours — with explicit deliverables and review checkpoints.</p>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Live Comparison Section */}
      {detail.slug === 'ai-development' && <LiveComparison />}

      {/* What we build */}
      <section className="border-t border-hairline/60 bg-navy/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading eyebrow="What we build" title="Capabilities tailored to this service." copy={`From discovery to production — here's what ${detail.title.toLowerCase()} covers at Ideavix.`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.whatWeBuild.map((item, i) => {
              const accent = whatWeBuildAccents[i % whatWeBuildAccents.length];
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className={`group relative h-full overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors duration-300 ${accent.border}`}
                  >
                    <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accent.line}`} />
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.glow} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`} />
                    <div className={`relative flex h-9 w-9 items-center justify-center rounded-lg font-mono text-[0.72rem] ${accent.badge}`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="relative mt-4 font-heading text-[1.02rem] font-medium text-ivory">{item.title}</h3>
                    <p className="relative mt-2 text-[0.88rem] leading-relaxed text-slateish">{item.copy}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities + Use cases */}
      <section className="border-t border-hairline/60 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where it applies"
            title="Capabilities and the use cases they unlock."
            copy={`A closer look at what ${detail.title.toLowerCase()} actually covers, and where teams put it to work.`}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <div className="group h-full rounded-2xl border border-hairline bg-surface/40 p-8 transition-colors hover:border-brand-cyan/30 hover:bg-surface/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-[1.15rem] font-medium text-ivory">Capabilities</h3>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/50">{String(detail.capabilities.length).padStart(2, '0')}</span>
                </div>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {detail.capabilities.map(c => (
                    <li key={c} className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-slateish">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10">
                        <Check className="h-3 w-3 text-brand-cyan" />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group h-full rounded-2xl border border-hairline bg-surface/40 p-8 transition-colors hover:border-brand-violet/30 hover:bg-surface/60">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-[1.15rem] font-medium text-ivory">Use cases</h3>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/50">{String(detail.useCases.length).padStart(2, '0')}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {detail.useCases.map((u, i) => (
                    <li key={u} className="flex gap-3.5 text-[0.9rem] leading-relaxed text-slateish">
                      <span className="mt-0.5 shrink-0 font-mono text-[0.72rem] text-brand-violet/70">{String(i + 1).padStart(2, '0')}</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proof Metrics Section */}
      {detail.slug === 'ai-development' && <ProofMetrics />}

      {/* Process */}
      <section className="border-t border-hairline/60 bg-navy/20 py-16 sm:py-20 overflow-hidden">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <SectionHeading eyebrow="How we deliver" title="From idea to impact." copy="A continuous line from first conversation to a platform that keeps growing." />

          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-[38px] right-[38px] top-[38px] hidden h-px overflow-hidden lg:block">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left' }}
                className="absolute inset-0 h-px bg-gradient-to-r from-brand-cyan via-brand-violet to-[#FF9A3D]"
              />
              <motion.div
                initial={{ x: '-30%' }}
                animate={{ x: '130%' }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay: 1.3 }}
                className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
            </div>

            <ol className="grid items-stretch gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((s, i) => {
                const isLast = i === processSteps.length - 1;
                return (
                  <motion.li
                    key={s.number}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex h-full flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: i * 0.14 + 0.15, type: 'spring', stiffness: 260, damping: 18 }}
                      className={`relative z-10 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl border bg-ink shadow-[0_12px_30px_-14px_rgba(0,0,0,0.6)] ${isLast ? 'border-[#FF9A3D]/40' : 'border-hairline'}`}
                    >
                      <span className={`font-mono text-[0.85rem] tracking-[0.12em] ${isLast ? 'text-[#FF9A3D]' : 'text-brand-cyan'}`}>{s.number}</span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 0.35, scale: 1.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: i * 0.14 + 0.15 }}
                        className={`absolute inset-0 rounded-2xl blur-md ${isLast ? 'bg-[#FF9A3D]/25' : 'bg-brand-cyan/20'}`}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: i * 0.14 + 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-5 flex w-full flex-1 flex-col rounded-2xl border border-hairline bg-surface/40 p-6"
                    >
                      <h4 className="font-heading text-[1.05rem] font-medium text-ivory">{s.title}</h4>
                      <p className="mt-2 text-[0.86rem] leading-relaxed text-slateish">{s.copy}</p>
                    </motion.div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
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
