import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  align?: 'left' | 'center';
  actions?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
};

export function PageHero({ eyebrow, title, copy, align = 'left', actions, imageSrc, imageAlt, visual }: Props) {
  const centered = align === 'center' && !visual && !imageSrc;
  const rightElement = visual ? visual : (imageSrc ? (
    <div className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <img
        src={imageSrc}
        alt={imageAlt ?? ''}
        className="w-full h-auto object-contain filter brightness-[1.05] contrast-[1.05] saturate-[1.1] transition-all duration-700 hover:brightness-[1.1]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-transparent mix-blend-overlay rounded-full blur-2xl" />
    </div>
  ) : null);

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28 pb-10 sm:pb-16">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 ivx-grid opacity-[0.32] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,#000_20%,transparent_78%)]" />
        <div className="absolute -left-40 top-[-8%] h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-[130px]" />
        <div className="absolute -right-28 top-[18%] h-[460px] w-[460px] rounded-full bg-brand-purple/12 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        {rightElement ? (
          <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left lg:max-w-none">
              {eyebrow ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md mx-auto lg:mx-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-slateish">{eyebrow}</span>
                </motion.div>
              ) : null}

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 font-heading font-semibold leading-[0.98] tracking-tightest text-ivory text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] max-w-4xl mx-auto lg:mx-0"
              >
                {title}
              </motion.h1>

              {copy ? (
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem] mx-auto lg:mx-0"
                >
                  {copy}
                </motion.p>
              ) : null}

              {actions ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22 }}
                  className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  {actions}
                </motion.div>
              ) : null}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 lg:mt-0 flex justify-center lg:justify-end items-center"
            >
              {rightElement}
            </motion.div>
          </div>
        ) : (
          <div className={centered ? 'text-center' : ''}>
            {eyebrow ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className={`inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md ${centered ? 'mx-auto' : ''}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-slateish">{eyebrow}</span>
              </motion.div>
            ) : null}
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className={`mt-7 font-heading font-semibold leading-[0.98] tracking-tightest text-ivory text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] ${centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'}`}>
              {title}
            </motion.h1>
            {copy ? (
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} className={`mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem] ${centered ? 'mx-auto' : ''}`}>
                {copy}
              </motion.p>
            ) : null}
            {actions ? <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>{actions}</motion.div> : null}
          </div>
        )}
      </div>
    </section>
  );
}
