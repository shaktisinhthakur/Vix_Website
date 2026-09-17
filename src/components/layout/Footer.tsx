import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { Logo } from '../Logo';

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.53 3h3.06l-6.69 7.64L21.8 21h-5.6l-4.39-5.74L6.7 21H3.63l7.15-8.17L2.6 3h5.74l4.07 5.38L17.53 3Zm-1.07 16.1h1.7L7.6 4.8H5.78l10.68 14.3Z" />
    </svg>
  );
}

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'X', icon: XIcon, href: 'https://x.com' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-ink">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_auto] lg:items-start">
          <div>
            <Logo />
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-brand-cyan">Ideas to Impact</p>
            <p className="mt-5 max-w-sm text-[0.88rem] leading-relaxed text-slateish">A technology studio turning ambitious ideas into intelligent digital products.</p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface/40 text-slateish transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:text-ivory">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/60">Company</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/about" className="text-[0.9rem] text-slateish hover:text-ivory">About</Link></li>
                <li><Link to="/work" className="text-[0.9rem] text-slateish hover:text-ivory">Work</Link></li>
                <li><Link to="/insights" className="text-[0.9rem] text-slateish hover:text-ivory">Insights</Link></li>
                <li><Link to="/contact" className="text-[0.9rem] text-slateish hover:text-ivory">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/60">Services</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/services/ai-development" className="text-[0.9rem] text-slateish hover:text-ivory">AI Development</Link></li>
                <li><Link to="/services/software-development" className="text-[0.9rem] text-slateish hover:text-ivory">Software Development</Link></li>
                <li><Link to="/services/web-development" className="text-[0.9rem] text-slateish hover:text-ivory">Web Development</Link></li>
                <li><Link to="/services/saas-development" className="text-[0.9rem] text-slateish hover:text-ivory">SaaS Development</Link></li>
                <li><Link to="/services/ui-ux-design" className="text-[0.9rem] text-slateish hover:text-ivory">UI/UX Design</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/60">Solutions</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/solutions/ai-agents" className="text-[0.9rem] text-slateish hover:text-ivory">AI Agents</Link></li>
                <li><Link to="/solutions/generative-ai" className="text-[0.9rem] text-slateish hover:text-ivory">Generative AI</Link></li>
                <li><Link to="/solutions/intelligent-automation" className="text-[0.9rem] text-slateish hover:text-ivory">Intelligent Automation</Link></li>
              </ul>
              <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slateish/60">Legal</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link to="/privacy" className="text-[0.9rem] text-slateish hover:text-ivory">Privacy</Link></li>
                <li><Link to="/terms" className="text-[0.9rem] text-slateish hover:text-ivory">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-slateish/70">© 2026 Ideavix. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[0.8rem] text-slateish/70 hover:text-ivory">Privacy</Link>
            <Link to="/terms" className="text-[0.8rem] text-slateish/70 hover:text-ivory">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
