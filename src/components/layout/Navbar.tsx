import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { navLinks, serviceNav, solutionNav } from '../../data/site';

const dropdownLinkCls = "block rounded-lg px-3 py-2.5 text-[0.84rem] font-medium text-slateish transition-colors hover:bg-surface hover:text-ivory";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [deskServices, setDeskServices] = useState(false);
  const [deskSolutions, setDeskSolutions] = useState(false);
  const [mobServices, setMobServices] = useState(false);
  const [mobSolutions, setMobSolutions] = useState(false);
  const loc = useLocation();
  const servicesRef = useRef<HTMLLIElement>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setDeskServices(false); setDeskSolutions(false); }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const t = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(t)) setDeskServices(false);
      if (solutionsRef.current && !solutionsRef.current.contains(t)) setDeskSolutions(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const isActive = (href: string) => href === '/' ? loc.pathname === '/' : loc.pathname === href || loc.pathname.startsWith(href + '/');

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`border-b transition-all duration-500 ${scrolled ? 'border-hairline/80 bg-ink/80 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-5 sm:h-[72px] sm:px-8">
          <Link to="/" className="group flex items-center shrink-0 gap-2.5" aria-label="Ideavix home">
            <img src="/logo.png" alt="Ideavix Logo" width="800" height="320" fetchPriority="high" decoding="async" className="h-10 w-auto object-contain sm:h-11" />
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const label = link.label;
              if (label === 'Services') {
                const active = isActive('/services');
                return (
                  <li key={label} ref={servicesRef} className="relative">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setDeskServices(v => !v); setDeskSolutions(false); }}
                      className={`group flex items-center gap-1 rounded-full px-4 py-2 text-[0.86rem] font-medium transition-colors ${active ? 'text-ivory' : 'text-slateish hover:text-ivory'}`}
                      aria-expanded={deskServices}
                    >
                      Services
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${deskServices ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {deskServices ? (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-hairline bg-ink/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                          {serviceNav.map(s => (
                            <Link key={s.href} to={s.href} onClick={() => setDeskServices(false)} className={dropdownLinkCls}>{s.label}</Link>
                          ))}
                          <Link to="/services" onClick={() => setDeskServices(false)} className="mt-1 flex items-center gap-1.5 border-t border-hairline/60 pt-2 text-[0.8rem] font-medium text-brand-cyan hover:text-ivory px-3 py-2">View all services <ArrowRight className="h-3 w-3" /></Link>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }
              if (label === 'Solutions') {
                const active = isActive('/solutions');
                return (
                  <li key={label} ref={solutionsRef} className="relative">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setDeskSolutions(v => !v); setDeskServices(false); }}
                      className={`group flex items-center gap-1 rounded-full px-4 py-2 text-[0.86rem] font-medium transition-colors ${active ? 'text-ivory' : 'text-slateish hover:text-ivory'}`}
                      aria-expanded={deskSolutions}
                    >
                      Solutions
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${deskSolutions ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {deskSolutions ? (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-hairline bg-ink/95 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                          {solutionNav.map(s => (
                            <Link key={s.href} to={s.href} onClick={() => setDeskSolutions(false)} className={dropdownLinkCls}>{s.label}</Link>
                          ))}
                          <Link to="/solutions" onClick={() => setDeskSolutions(false)} className="mt-1 flex items-center gap-1.5 border-t border-hairline/60 pt-2 text-[0.8rem] font-medium text-brand-cyan hover:text-ivory px-3 py-2">View all solutions <ArrowRight className="h-3 w-3" /></Link>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }
              const active = isActive(link.href);
              return (
                <li key={label}>
                  <NavLink to={link.href} className={`relative block rounded-full px-4 py-2 text-[0.86rem] font-medium transition-colors ${active ? 'text-ivory' : 'text-slateish hover:text-ivory'}`}>
                    {label}
                    {active ? <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple" /> : <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-purple transition-transform duration-300 group-hover:scale-x-100" />}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <Link to="/contact" className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-[#2b8bff] to-brand-purple p-[1px] sm:inline-flex">
              <span className="flex items-center gap-2 rounded-full bg-ink/70 px-5 py-2.5 text-[0.85rem] font-medium text-ivory transition-colors duration-300 group-hover:bg-transparent">
                Let's Talk
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
            <button type="button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface/60 text-ivory transition-colors hover:border-brand-cyan/50 lg:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div key="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-hairline bg-ink/95 backdrop-blur-xl lg:hidden">
            <ul className="mx-auto flex w-full max-w-[1320px] flex-col px-5 py-2 sm:px-8">
              <li className="border-b border-hairline/60">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center justify-between py-4 text-base font-medium text-ivory">Home <ArrowRight className="h-4 w-4 text-slateish" /></Link>
              </li>
              <li className="border-b border-hairline/60">
                <button type="button" onClick={() => setMobServices(v => !v)} className="flex w-full items-center justify-between py-4 text-base font-medium text-ivory">
                  Services <ChevronDown className={`h-4 w-4 text-slateish transition-transform ${mobServices ? 'rotate-180' : ''}`} />
                </button>
                {mobServices ? (
                  <div className="pb-3 pl-2">
                    {serviceNav.map(s => (
                      <Link key={s.href} to={s.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-[0.9rem] text-slateish hover:text-ivory">{s.label}</Link>
                    ))}
                    <Link to="/services" onClick={() => setOpen(false)} className="block px-3 py-2 text-[0.85rem] font-medium text-brand-cyan">View all services →</Link>
                  </div>
                ) : null}
              </li>
              <li className="border-b border-hairline/60">
                <button type="button" onClick={() => setMobSolutions(v => !v)} className="flex w-full items-center justify-between py-4 text-base font-medium text-ivory">
                  Solutions <ChevronDown className={`h-4 w-4 text-slateish transition-transform ${mobSolutions ? 'rotate-180' : ''}`} />
                </button>
                {mobSolutions ? (
                  <div className="pb-3 pl-2">
                    {solutionNav.map(s => (
                      <Link key={s.href} to={s.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-[0.9rem] text-slateish hover:text-ivory">{s.label}</Link>
                    ))}
                    <Link to="/solutions" onClick={() => setOpen(false)} className="block px-3 py-2 text-[0.85rem] font-medium text-brand-cyan">View all solutions →</Link>
                  </div>
                ) : null}
              </li>
              {[
                { label: 'Products', href: '/products' },
                { label: 'Work', href: '/work' },
                { label: 'About', href: '/about' },
                { label: 'Insights', href: '/insights' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <li key={l.label} className="border-b border-hairline/60 last:border-0">
                  <Link to={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 text-base font-medium text-ivory">{l.label} <ArrowRight className="h-4 w-4 text-slateish" /></Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-6 sm:px-8">
              <Link to="/contact" onClick={() => setOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3.5 text-[0.95rem] font-medium text-white">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
