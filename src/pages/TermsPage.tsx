import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Seo } from '../components/Seo';
import { company } from '../data/company';

export function TermsPage() {
  return (
    <>
      <Seo path="/terms" title="Terms of Service" description="The terms that govern use of the Ideavix website." />
      <PageHero eyebrow="Legal" title="Terms of Service" copy="The terms that govern use of the Ideavix website." />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <article className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-slateish">
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Acceptance</h2>
              <p className="mt-3">By accessing this website you agree to these terms. If you do not agree, please do not use the site.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Intellectual property</h2>
              <p className="mt-3">Content on this site — including text, graphics and design — is owned by {company.name} or its licensors and may not be reproduced without permission.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">No professional advice</h2>
              <p className="mt-3">Content is for general information only and does not constitute professional advice. Consult qualified advisors for decisions specific to your situation.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Limitation of liability</h2>
              <p className="mt-3">To the maximum extent permitted by law, {company.name} shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the website.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Governing law</h2>
              <p className="mt-3">These terms shall be governed by and construed in accordance with the laws of the jurisdiction where {company.name} operates, without regard to conflict of law principles.</p>
              <p className="mt-2 text-[0.82rem] text-slateish/60">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
