import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

type HeroProps = {
  variant?: 'split' | 'centered';
};

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const }
  })
};

export function Hero({ variant = 'split' }: HeroProps) {
  const centered = variant === 'centered';

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 ivx-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_20%,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-[20%] h-[460px] w-[460px] rounded-full bg-brand-purple/14 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div
          className={
          centered ?
          'flex flex-col items-center text-center' :
          'grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10'
          }>
          <div className={centered ? 'max-w-3xl' : ''}>
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
              className={`inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md ${
              centered ? 'mx-auto' : ''}`
              }>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-70" />
              </span>
              <span className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-slateish">
                Innovation • Engineering • AI
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fade}
              initial="hidden"
              animate="show"
              className="mt-7 font-heading text-[2.9rem] font-semibold leading-[0.98] tracking-tightest text-ivory sm:text-[4.2rem] lg:text-[5.1rem]">
              Turning Ideas
              <br />
              <span className="ivx-text-gradient">Into Impact.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fade}
              initial="hidden"
              animate="show"
              className={`mt-7 text-[1.02rem] leading-relaxed text-slateish sm:text-[1.15rem] ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`
              }>
              We design and build intelligent digital products that transform ambitious ideas into
              real-world technology.
            </motion.p>

            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              animate="show"
              className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center ${
              centered ? 'sm:justify-center' : ''}`
              }>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue via-[#2f7dff] to-brand-purple px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.75)] transition-transform duration-300 hover:-translate-y-0.5">
                <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory backdrop-blur-md transition-all duration-300 hover:border-brand-cyan/50 hover:bg-surface/70">
                <Play className="h-3.5 w-3.5 text-brand-cyan" />
                Explore Our Work
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              variants={fade}
              initial="hidden"
              animate="show"
              className={`mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 ${
              centered ? 'justify-center' : ''}`
              }>
              {['AI Systems', 'Product Engineering', 'Enterprise Platforms'].map((item) =>
              <span
                key={item}
                className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slateish/70">
                  {item}
                </span>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={centered ? 'mt-16 w-full max-w-[460px]' : ''}>
            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              <img
                src="/hero.png"
                alt="Ideavix Hero Visual"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
