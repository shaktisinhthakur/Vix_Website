import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { HeroThreeParticles } from './ui/HeroParticleField';

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const }
  })
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-start overflow-hidden pt-16 pb-12 lg:pt-32 lg:pb-16 lg:items-center">
      {/* Light theme hero glow */}
      <div className="hero-glow" />
      <div className="pointer-events-none absolute inset-0 ivx-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_20%,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/12 blur-[130px] lg:block hidden dark:block" />
      <div className="pointer-events-none absolute -right-32 top-[20%] h-[460px] w-[460px] rounded-full bg-brand-purple/14 blur-[140px] lg:block hidden dark:block" />
      <div className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px] lg:block hidden" />
      <div className="pointer-events-none absolute -right-32 top-[20%] h-[460px] w-[460px] rounded-full bg-purple/10 blur-[140px] lg:block hidden" />

      {/* Interactive particle field — dark theme only */}
      <HeroThreeParticles />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left lg:max-w-none">
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 backdrop-blur-md mx-auto lg:mx-0 sm:gap-3 sm:px-4"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-70" />
              </span>

              <span className="min-w-0 truncate whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.1em] text-muted-foreground sm:hidden">
                Applied AI • Software • Design
              </span>
              <span className="hidden min-w-0 truncate whitespace-nowrap font-mono text-[0.64rem] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
                Applied AI • Software Engineering • Product Design
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-5 font-heading text-[3rem] leading-[1.05] tracking-tight text-foreground sm:text-[3.5rem] lg:text-[3.8rem] lg:leading-[1.0] lg:tracking-tightest xl:text-[4.5rem] 2xl:text-[5.1rem]"
            >
              IDEAVIX
              <br />
              <span className="ivx-text-gradient">Idea to Impact.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-5 text-lg leading-[1.7] text-muted-foreground max-w-[42ch] mx-auto lg:mx-0 lg:text-lg lg:leading-[1.75] lg:max-w-xl"
            >
              We design and engineer intelligent digital products — AI systems, SaaS platforms, and cloud infrastructure — that turn ambitious ideas into scalable technology.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-7 flex flex-col gap-3 w-full lg:w-auto lg:flex-row lg:items-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue via-[#2f7dff] to-brand-purple px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.75)] transition-transform duration-300 hover:-translate-y-0.5 lg:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-[0.95rem] font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-accent lg:w-auto"
              >
                <Play className="h-3.5 w-3.5 text-brand-cyan" />
                Explore Our Work
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start"
            >
              {['AI Agents & RAG', 'SaaS Platforms', 'Cloud Infrastructure'].map((item) => (
                <span
                  key={item}
                  className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground/60 lg:text-[0.68rem] lg:tracking-[0.22em]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 lg:mt-0 flex justify-center lg:justify-end items-center"
          >
            <div className="relative aspect-square w-full max-w-[98vw] lg:max-w-[800px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative w-full h-full">
                <img
                  src="/her.png"
                  alt="Ideavix AI Innovation Visual"
                  width="1402"
                  height="1122"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-contain filter brightness-[1.05] contrast-[1.05] saturate-[1.1] transition-all duration-700 hover:brightness-[1.1]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
