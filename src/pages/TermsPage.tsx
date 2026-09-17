import React from 'react';
import { PageHero } from '../components/ui/PageHero';

export function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" copy="The terms that govern use of the Ideavix website." />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-4 text-[0.86rem] leading-relaxed text-amber-200">
            <strong>Review required before production:</strong> Replace with terms reviewed by counsel for your jurisdiction and business model.
          </div>
          <article className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-slateish">
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Acceptance</h2>
              <p className="mt-3">By accessing this website you agree to these terms. If you do not agree, please do not use the site.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Intellectual property</h2>
              <p className="mt-3">Content on this site — including text, graphics and design — is owned by Ideavix or its licensors and may not be reproduced without permission.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">No professional advice</h2>
              <p className="mt-3">Content is for general information only and does not constitute professional advice. Consult qualified advisors for decisions specific to your situation.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Limitation of liability</h2>
              <p className="mt-3">[Replace: include the limitation of liability appropriate to your offering and jurisdiction.]</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Governing law</h2>
              <p className="mt-3">[Replace: specify governing law and venue.]</p>
              <p className="mt-2 text-[0.82rem] text-slateish/60">Last updated: March 2026</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
