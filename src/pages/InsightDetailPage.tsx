import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { insights } from '../data/site';

export function InsightDetailPage() {
  const { slug } = useParams();
  const post = insights.find(i => i.slug === slug);
  if (!post) return <Navigate to="/insights" replace />;
  const related = insights.filter(i => i.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-10">
        <div className="pointer-events-none absolute inset-0 ivx-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000,transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <Link to="/insights" className="inline-flex items-center gap-2 text-[0.86rem] text-slateish hover:text-ivory"><ArrowLeft className="h-4 w-4" /> Back to Insights</Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-cyan/15 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-brand-cyan">{post.category}</span>
            <span className="font-mono text-[0.7rem] text-slateish/70">{post.date} · {post.readingTime}</span>
          </div>
          <h1 className="mt-6 font-heading text-[2rem] font-semibold leading-tight tracking-tight text-ivory sm:text-[2.6rem]">{post.title}</h1>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-slateish">{post.description}</p>
        </div>
      </section>

      <article className="border-t border-hairline/60 py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <div className="space-y-6">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-[1rem] leading-relaxed text-slateish sm:text-[1.05rem]">{para}</p>
              </Reveal>
            ))}
          </div>

          {related.length ? (
            <div className="mt-14 border-t border-hairline/60 pt-10">
              <h3 className="font-heading text-[1.1rem] font-medium text-ivory">Related articles</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map(r => (
                  <Link key={r.slug} to={`/insights/${r.slug}`} className="rounded-2xl border border-hairline bg-surface/40 p-6 hover:bg-surface/60">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-brand-cyan">{r.category}</p>
                    <h4 className="mt-2 font-heading text-[1rem] font-medium leading-snug text-ivory">{r.title}</h4>
                    <span className="mt-3 inline-flex text-[0.84rem] text-slateish">Read →</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>

      <CTASection title={<>Let's talk about <span className="ivx-text-gradient">your product.</span></>} copy="Tell us what you're building — we'll map the fastest path to impact." primaryTo="/contact" />
    </>
  );
}
