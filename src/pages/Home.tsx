import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { AISection } from '../components/AISection';
import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Seo } from '../components/Seo';

export function Home() {
  return (
    <>
      <Seo
        path="/"
        title="Idea to Impact"
        description="Ideavix is a technology studio building applied AI, software and digital products — from AI agents and RAG systems to SaaS platforms and cloud infrastructure."
      />
      <Hero />
      <Intro />
      {/* Core Capabilities */}
      <Services />
      <div className="border-t border-hairline/60 bg-navy/20">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 py-10 flex justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/50 px-6 py-3 text-[0.9rem] font-medium text-ivory hover:border-brand-cyan/50 hover:bg-surface/80">
            Explore all services →
          </Link>
        </div>
      </div>
      <AISection />
      <Process />
      <About />
      <CTA />
    </>
  );
}
