import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  copy?: string;
  align?: 'left' | 'center';
  actions?: React.ReactNode;
};

export function PageHero({ eyebrow, title, copy, align = 'left', actions }: Props) {
  const centered = align === 'center';
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 ivx-grid opacity-[0.32] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,#000_20%,transparent_78%)]" />
      <div className="pointer-events-none absolute -left-40 top-[-8%] h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-28 top-[18%] h-[460px] w-[460px] rounded-full bg-brand-purple/12 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      <div className={`relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 ${centered ? 'text-center' : ''}`}>
        {eyebrow ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }} className={`inline-flex items-center gap-3 rounded-full border border-hairline bg-surface/50 px-4 py-1.5 backdrop-blur-md ${centered ? 'mx-auto' : ''}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-slateish">{eyebrow}</span>
          </motion.div>
        ) : null}
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22,1,0.36,1] }} className={`mt-7 font-heading font-semibold leading-[0.98] tracking-tightest text-ivory text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] ${centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'}`}>
          {title}
        </motion.h1>
        {copy ? (
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16, ease: [0.22,1,0.36,1] }} className={`mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem] ${centered ? 'mx-auto' : ''}`}>
            {copy}
          </motion.p>
        ) : null}
        {actions ? <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.22 }} className={`mt-8 flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>{actions}</motion.div> : null}
      </div>
    </section>
  );
}
