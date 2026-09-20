const fs = require('fs');

const part1 = `import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Quote, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { solutionDetails, solutionsOverview } from '../data/site';

const accents = [
  { badge: 'bg-[#FF9A3D]/10 text-[#FF9A3D]', ring: 'border-[#FF9A3D]/30', line: 'from-[#FF9A3D] to-[#FF9A3D]/0', track: 'from-[#FF9A3D]/60 to-transparent', glow: 'bg-[#FF9A3D]/25', border: 'hover:border-[#FF9A3D]/40', dot: 'bg-[#FF9A3D]' },
  { badge: 'bg-brand-cyan/10 text-brand-cyan', ring: 'border-brand-cyan/30', line: 'from-brand-cyan to-brand-cyan/0', track: 'from-brand-cyan/60 to-transparent', glow: 'bg-brand-cyan/25', border: 'hover:border-brand-cyan/40', dot: 'bg-brand-cyan' },
  { badge: 'bg-brand-blue/10 text-brand-blue', ring: 'border-brand-blue/30', line: 'from-brand-blue to-brand-blue/0', track: 'from-brand-blue/60 to-transparent', glow: 'bg-brand-blue/25', border: 'hover:border-brand-blue/40', dot: 'bg-brand-blue' },
  { badge: 'bg-brand-violet/10 text-brand-violet', ring: 'border-brand-violet/30', line: 'from-brand-violet to-brand-violet/0', track: 'from-brand-violet/60 to-transparent', glow: 'bg-brand-violet/25', border: 'hover:border-brand-violet/40', dot: 'bg-brand-violet' },
  { badge: 'bg-brand-purple/10 text-brand-purple', ring: 'border-brand-purple/30', line: 'from-brand-purple to-brand-purple/0', track: 'from-brand-purple/60 to-transparent', glow: 'bg-brand-purple/25', border: 'hover:border-brand-purple/40', dot: 'bg-brand-purple' },
];

function AgentFlow() {
  const steps = ['User', 'AI Agent', 'Reasoning', 'Tools', 'Data', 'Action'];
  const stats = [
    { k: 'traced', v: 'Traced', icon: ShieldCheck },
    { k: 'grounded', v: 'Cited', icon: Quote },
    { k: 'eval', v: 'Measured', icon: Activity },
  ];

  return (
    <div className="rounded-3xl border border-hairline bg-ink/60 p-6 sm:p-8">
      <p className="flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.22em] text-slateish/60">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A3D]" /> agent workflow
      </p>

      <div className="mt-6 flex flex-col items-center">
        {steps.map((label, i) => {
          const accent = accents[i % accents.length];
          return (
            <React.Fragment key={label}>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                className={\`flex w-full max-w-sm items-center gap-3 rounded-2xl border border-hairline bg-surface px-4 py-3.5 transition-colors \${accent.border}\`}
              >
                <span className={\`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[0.68rem] \${accent.badge}\`}>{i + 1}</span>
                <span className="text-[0.92rem] font-medium text-ivory">{label}</span>
                <span className="relative ml-auto flex h-2 w-2">
                  <span className={\`absolute inline-flex h-full w-full animate-ping rounded-full \${accent.dot} opacity-50\`} />
                  <span className={\`relative inline-flex h-2 w-2 rounded-full \${accent.dot}\`} />
                </span>
              </motion.div>

              {i < steps.length - 1 ? (
                <div className="relative h-6 w-px bg-gradient-to-b from-transparent via-slateish/30 to-transparent mx-auto" />
              ) : null}
            </React.Fragment>
          );
        })}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm">
          {stats.map((m, i) => {
            const accent = accents[i % accents.length];
            return (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="text-center p-3 rounded-xl border border-hairline bg-surface/40"
              >
                <m.icon className="mx-auto h-4 w-4" style={{ color: accent.badge.split(' ')[1] }} strokeWidth={2} />
                <p className="mt-2 font-heading text-[1rem] font-medium text-ivory">{m.v}</p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-slateish/60">{m.k}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function SolutionDetailPage() {
  const { slug } = useParams();
  const detail = slug ? solutionDetails[slug] : undefined;
  if (!detail) return <Navigate to="/solutions" replace />;
  const others = solutionsOverview.filter(s => s.slug !== detail.slug);

  const isAIAgents = slug === 'ai-agents';
  const isGenerativeAI = slug === 'generative-ai';
  const isIntelligentAutomation = slug === 'intelligent-automation';

  return (
    <>
`;