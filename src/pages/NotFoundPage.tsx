import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo path="/404" title="Page Not Found" description="The page you're looking for doesn't exist or may have moved." />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28 sm:pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 ivx-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000,transparent_70%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-blue/12 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-purple/14 blur-[130px]" />
        <div className="relative mx-auto w-full max-w-[720px] px-5 text-center sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.26em] text-slateish">404 — Not found</span>
          </span>
          <h1 className="mt-8 font-heading text-[2.4rem] font-semibold leading-tight tracking-tight text-ivory sm:text-[3.4rem]">Looks like this idea <span className="ivx-text-gradient">hasn't been built yet.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed text-slateish">The page you're looking for doesn't exist — or may have moved. Let's get you back on track.</p>
          <Link to="/" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-8 py-4 text-[0.96rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.7)]">
            Back to Ideavix <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
