import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { aiCapabilities } from '../data/site';

const flowNodes = [
{ x: 40, y: 150, label: 'input' },
{ x: 130, y: 70, label: 'retrieve' },
{ x: 130, y: 230, label: 'reason' },
{ x: 220, y: 150, label: 'decide' },
{ x: 310, y: 80, label: 'act' },
{ x: 310, y: 220, label: 'learn' }];


const flowEdges: Array<[number, number]> = [
[0, 1],
[0, 2],
[1, 3],
[2, 3],
[3, 4],
[3, 5],
[5, 2]];


export function AISection() {
  return (
    <section
      
      className="relative overflow-hidden border-t border-hairline/60 bg-navy/40 py-24 sm:py-32">
      
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-purple/12 blur-[130px]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Applied intelligence"
              title={
              <>
                  Intelligence, Built
                  <br className="hidden sm:block" /> Into Everything.
                </>
              }
              copy="AI is not a feature we bolt on at the end. It sits inside the architecture — retrieving the right context, reasoning over it, and acting with the guardrails an enterprise needs." />
            

            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline/50 sm:grid-cols-2">
              {aiCapabilities.map((cap, i) =>
              <Reveal key={cap.title} delay={i * 0.05}>
                  <div className="group h-full bg-ink/90 p-5 transition-colors duration-500 hover:bg-surface">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan transition-colors duration-500 group-hover:bg-brand-violet" />
                      <h3 className="font-heading text-[0.98rem] font-medium text-ivory">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-[0.85rem] leading-relaxed text-slateish">{cap.copy}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl border border-hairline bg-ink/60 p-6 backdrop-blur-sm sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-slateish/70">
                  agent runtime
                </span>
                <span className="flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.2em] text-brand-cyan">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-brand-cyan" />
                  live
                </span>
              </div>

              <svg viewBox="0 0 360 300" className="mt-6 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="ivx-ai-edge" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#006BFF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C238FF" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                {flowEdges.map(([a, b], i) => {
                  const s = flowNodes[a];
                  const e = flowNodes[b];
                  const mx = (s.x + e.x) / 2;
                  const d = `M${s.x} ${s.y} C ${mx} ${s.y}, ${mx} ${e.y}, ${e.x} ${e.y}`;
                  return (
                    <g key={`ai-edge-${i}`}>
                      <path d={d} fill="none" stroke="url(#ivx-ai-edge)" strokeWidth="1" opacity="0.6" />
                      <path
                        d={d}
                        fill="none"
                        stroke="#00D9FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="5 180"
                        className="animate-dash-flow"
                        style={{ animationDelay: `${i * 0.35}s`, animationDuration: '3.6s' }} />
                      
                    </g>);

                })}
                {flowNodes.map((n, i) =>
                <g key={n.label}>
                    <circle
                    cx={n.x}
                    cy={n.y}
                    r="17"
                    fill="#0B1638"
                    stroke={i === 3 ? '#FFB800' : '#172653'}
                    strokeWidth="1.2" />
                  
                    <circle cx={n.x} cy={n.y} r="4" fill={i === 3 ? '#FFB800' : '#00D9FF'} />
                    <text
                    x={n.x}
                    y={n.y + 33}
                    textAnchor="middle"
                    fill="#A7B1C8"
                    fontSize="9"
                    fontFamily="Geist Mono, monospace"
                    letterSpacing="1.4">
                    
                      {n.label.toUpperCase()}
                    </text>
                  </g>
                )}
              </svg>

              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline/50">
                {[
                { k: 'grounded', v: 'Cited' },
                { k: 'traced', v: 'Auditable' },
                { k: 'evaluated', v: 'Measured' }].
                map((m) =>
                <div key={m.k} className="bg-surface/70 px-3 py-4 text-center">
                    <p className="font-heading text-[0.95rem] font-medium text-ivory">{m.v}</p>
                    <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-slateish/70">
                      {m.k}
                    </p>
                  </div>
                )}
              </div>

              <motion.span
                className="pointer-events-none absolute -inset-px rounded-3xl"
                style={{
                  background:
                  'radial-gradient(400px circle at 80% 10%, rgba(123,44,255,0.14), transparent 70%)'
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
              
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}