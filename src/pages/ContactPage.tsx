import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/Reveal';
import { submitContact } from '../services/contactService';

const projectTypes = ['AI / Machine Learning','AI Agent','Web Application','SaaS Product','Software Development','UI/UX Design','Automation','Cloud / Infrastructure','Consulting','Other'];
const budgets = ['Not sure yet','Under $5k','$5k – $15k','$15k – $50k','$50k+','Prefer to discuss'];
const timelines = ['ASAP','1–2 months','3–6 months','6+ months','Exploring an idea'];

type FormState = {
  fullName: string; workEmail: string; company: string; phone: string;
  projectType: string; budget: string; timeline: string; description: string; privacyAccepted: boolean;
};

const initial: FormState = { fullName:'', workEmail:'', company:'', phone:'', projectType:'', budget:'', timeline:'', description:'', privacyAccepted:false };

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function validate(): boolean {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.workEmail.trim()) e.workEmail = 'Work email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) e.workEmail = 'Enter a valid email.';
    if (!form.projectType) e.projectType = 'Select a project type.';
    if (!form.description.trim()) e.description = 'Tell us a bit about the project.';
    else if (form.description.trim().length < 20) e.description = 'Please add a little more detail (at least 20 characters).';
    if (!form.privacyAccepted) e.privacyAccepted = 'Please accept the Privacy Policy.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMsg('');
    const res = await submitContact({ fullName: form.fullName, workEmail: form.workEmail, company: form.company, phone: form.phone, projectType: form.projectType, budget: form.budget, timeline: form.timeline, description: form.description, privacyAccepted: form.privacyAccepted });
    if (res.ok) { setStatus('success'); setForm(initial); }
    else { setStatus('error'); setErrorMsg(res.error); }
  }

  const fieldCls = (hasErr?: string) => `w-full rounded-xl border bg-ink/60 px-4 py-3.5 text-[0.92rem] text-ivory placeholder:text-slateish/40 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 ${hasErr ? 'border-red-500/60 focus:border-red-500/60' : 'border-hairline focus:border-brand-cyan/40'}`;

  if (status === 'success') {
    return (
      <>
        <PageHero eyebrow="Contact" title={<>Let's Build Something <span className="ivx-text-gradient">That Matters.</span></>} copy="Have an idea, product, or challenge? Tell us about it and let's explore what we can build together." />
        <section className="border-t border-hairline/60 py-16">
          <div className="mx-auto w-full max-w-[720px] px-5 sm:px-8">
            <div className="rounded-3xl border border-brand-cyan/30 bg-surface/50 p-8 text-center sm:p-10">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-cyan/15"><CheckCircle2 className="h-6 w-6 text-brand-cyan" /></span>
              <h2 className="mt-6 font-heading text-[1.6rem] font-semibold text-ivory">Thanks for reaching out.</h2>
              <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-relaxed text-slateish">Your idea is now one step closer to impact. We'll get back to you soon.</p>
              <p className="mt-3 text-[0.82rem] text-slateish/60">If you don't hear back within one business day, reach us at hello@ideavix.com</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-8 rounded-full border border-hairline bg-surface px-6 py-3 text-[0.9rem] font-medium text-ivory hover:border-brand-cyan/40">Send another inquiry</button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's Build Something <span className="ivx-text-gradient">That Matters.</span></>} copy="Have an idea, product, or challenge? Tell us about it and let's explore what we can build together." />
      <section className="border-t border-hairline/60 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <Reveal>
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-2xl border border-hairline bg-surface/40 p-7">
                  <h2 className="font-heading text-[1.2rem] font-medium text-ivory">Ideavix</h2>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-slateish">A technology studio turning ambitious ideas into intelligent digital products. We work with founders and enterprise teams who have a serious idea and need it built properly.</p>
                  <div className="mt-6 space-y-3 border-t border-hairline/60 pt-6">
                    <a href="mailto:hello@ideavix.com" className="flex items-center gap-3 text-[0.92rem] text-slateish hover:text-ivory"><Mail className="h-4 w-4 text-brand-cyan" /> hello@ideavix.com</a>
                    <span className="flex items-center gap-3 text-[0.92rem] text-slateish"><MapPin className="h-4 w-4 text-brand-cyan" /> Remote-first · Available worldwide</span>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-hairline px-4 py-2 text-[0.8rem] text-slateish hover:text-ivory">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-hairline px-4 py-2 text-[0.8rem] text-slateish hover:text-ivory">GitHub</a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" className="rounded-full border border-hairline px-4 py-2 text-[0.8rem] text-slateish hover:text-ivory">X</a>
                  </div>
                </div>
                <p className="rounded-xl border border-hairline/60 bg-surface/20 px-4 py-3 text-[0.78rem] leading-relaxed text-slateish/70">By submitting this form you agree that Ideavix may store the information you provide to respond to your inquiry. See our <Link to="/privacy" className="text-brand-cyan hover:text-ivory">Privacy Policy</Link>.</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-hairline bg-surface/40 p-6 sm:p-8">
                {status === 'error' ? (
                  <div className="mb-6 flex gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[0.9rem] text-red-200">
                    <AlertCircle className="h-5 w-5 shrink-0" /> <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
                  </div>
                ) : null}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-[0.82rem] font-medium text-ivory">Full Name *</label>
                    <input id="fullName" value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} placeholder="Jane Doe" className={`mt-2 ${fieldCls(errors.fullName)}`} aria-invalid={!!errors.fullName} />
                    {errors.fullName ? <p className="mt-2 text-[0.78rem] text-red-300">{errors.fullName}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="workEmail" className="text-[0.82rem] font-medium text-ivory">Work Email *</label>
                    <input id="workEmail" type="email" value={form.workEmail} onChange={e=>setForm({...form, workEmail:e.target.value})} placeholder="jane@company.com" className={`mt-2 ${fieldCls(errors.workEmail)}`} aria-invalid={!!errors.workEmail} />
                    {errors.workEmail ? <p className="mt-2 text-[0.78rem] text-red-300">{errors.workEmail}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="company" className="text-[0.82rem] font-medium text-ivory">Company / Organization</label>
                    <input id="company" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Acme Inc." className={`mt-2 ${fieldCls()}`} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[0.82rem] font-medium text-ivory">Phone Number</label>
                    <input id="phone" type="tel" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+1 (555) 000-0000" className={`mt-2 ${fieldCls()}`} />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="text-[0.82rem] font-medium text-ivory">Project Type *</label>
                    <select id="projectType" value={form.projectType} onChange={e=>setForm({...form, projectType:e.target.value})} className={`mt-2 ${fieldCls(errors.projectType)}`}>
                      <option value="">Select a type</option>
                      {projectTypes.map(o=> <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.projectType ? <p className="mt-2 text-[0.78rem] text-red-300">{errors.projectType}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="budget" className="text-[0.82rem] font-medium text-ivory">Estimated Budget</label>
                    <select id="budget" value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})} className={`mt-2 ${fieldCls()}`}>
                      <option value="">Select a budget</option>
                      {budgets.map(o=> <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="timeline" className="text-[0.82rem] font-medium text-ivory">Project Timeline</label>
                    <select id="timeline" value={form.timeline} onChange={e=>setForm({...form, timeline:e.target.value})} className={`mt-2 ${fieldCls()}`}>
                      <option value="">Select a timeline</option>
                      {timelines.map(o=> <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="text-[0.82rem] font-medium text-ivory">Project Description *</label>
                    <textarea id="description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} placeholder="Tell us about your idea, goals, and what success looks like..." rows={5} className={`mt-2 resize-none ${fieldCls(errors.description)}`} aria-invalid={!!errors.description} />
                    {errors.description ? <p className="mt-2 text-[0.78rem] text-red-300">{errors.description}</p> : <p className="mt-2 text-[0.74rem] text-slateish/50">At least 20 characters.</p>}
                  </div>
                </div>

                <label className="mt-6 flex gap-3 rounded-xl border border-hairline bg-ink/30 px-4 py-3">
                  <input type="checkbox" checked={form.privacyAccepted} onChange={e=>setForm({...form, privacyAccepted:e.target.checked})} className="mt-0.5 h-4 w-4 accent-brand-blue" />
                  <span className="text-[0.84rem] leading-relaxed text-slateish">I agree to the <Link to="/privacy" className="font-medium text-brand-cyan hover:text-ivory">Privacy Policy</Link>.</span>
                </label>
                {errors.privacyAccepted ? <p className="mt-2 text-[0.78rem] text-red-300">{errors.privacyAccepted}</p> : null}

                <button type="submit" disabled={status==='loading'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-8 py-4 text-[0.96rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(0,107,255,0.7)] disabled:opacity-60 sm:w-auto">
                  {status==='loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {status==='loading' ? 'Sending…' : 'Send Project Inquiry →'}
                </button>
                <p className="mt-3 text-[0.74rem] text-slateish/50">We typically respond within one business day. No spam.</p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
