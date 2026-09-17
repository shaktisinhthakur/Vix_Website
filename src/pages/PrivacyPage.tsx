import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';

export function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" copy="How Ideavix handles information you share with us." align="left" />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-5 py-4 text-[0.86rem] leading-relaxed text-amber-200">
            <strong>Review required before production:</strong> Replace business-specific details (controller name, contact, retention, subprocessors) with your actual legal text. This template is a starting point, not legal advice.
          </div>
          <article className="prose-docs mt-10 space-y-8 text-[0.95rem] leading-relaxed text-slateish">
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Information we collect</h2>
              <p className="mt-3">When you submit the <Link to="/contact" className="text-brand-cyan hover:text-ivory">contact form</Link>, we collect the information you provide — such as name, work email, company, phone, project type, budget, timeline and project description — so we can respond to your inquiry.</p>
              <p className="mt-3">We also collect standard technical information (e.g. IP address, browser type) via hosting and analytics, where enabled, to operate and secure the site.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">How we use information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To respond to inquiries and manage the business relationship.</li>
                <li>To improve the website and its performance.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Sharing</h2>
              <p className="mt-3">We do not sell your personal information. We may share it with service providers that help us operate the site (e.g. hosting, email delivery) under appropriate safeguards.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Retention</h2>
              <p className="mt-3">[Replace: describe how long you retain contact submissions and how someone can request deletion.]</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Your rights</h2>
              <p className="mt-3">Depending on your jurisdiction, you may have rights to access, correct or delete your information. Contact us at hello@ideavix.com to exercise them.</p>
            </section>
            <section>
              <h2 className="font-heading text-[1.25rem] font-semibold text-ivory">Contact</h2>
              <p className="mt-3">Questions about this policy? Email hello@ideavix.com.</p>
              <p className="mt-2 text-[0.82rem] text-slateish/60">Last updated: March 2026</p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
