import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { company, activeSocials } from '../../data/company';

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.53 3h3.06l-6.69 7.64L21.8 21h-5.6l-4.39-5.74L6.7 21H3.63l7.15-8.17L2.6 3h5.74l4.07 5.38L17.53 3Zm-1.07 16.1h1.7L7.6 4.8H5.78l10.68 14.3Z" />
    </svg>
  );
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  instagram: InstagramIcon,
};

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-ink">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_auto] lg:items-start">
          <div>
            <img src="/footer.png" alt="Ideavix" className="h-24 w-auto" />
            <p className="mt-5 max-w-sm text-[0.88rem] leading-relaxed text-slateish">{company.tagline}</p>
            <div className="mt-6 flex items-center gap-2.5">
              {activeSocials.map((social) => {
                const Icon = socialIconMap[social.key as keyof typeof socialIconMap];
                return (
                  <a key={social.key} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface/40 text-slateish transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/50 hover:text-ivory">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
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
          <p className="text-[0.8rem] text-slateish/70">© {company.foundedYear}–{new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[0.8rem] text-slateish/70 hover:text-ivory">Privacy</Link>
            <Link to="/terms" className="text-[0.8rem] text-slateish/70 hover:text-ivory">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
