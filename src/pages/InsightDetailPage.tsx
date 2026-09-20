import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { insights } from '../data/site';
import { company, blogPostUrl } from '../data/company';
import { formatDate } from '../utils/formatDate';
import { Seo } from '../components/Seo';

export function InsightDetailPage() {
  const { slug } = useParams();
  const post = insights.find(i => i.slug === slug);
  if (!post) return <Navigate to="/insights" replace />;
  const related = insights.filter(i => i.slug !== post.slug).slice(0, 2);
  const originalUrl = blogPostUrl(post.externalSlug);

  return (
    <>
      <Seo path={`/insights/${post.slug}`} title={post.title} description={post.description} type="article" publishedTime={post.date} authors={[company.name]} section={post.category} tags={[post.category]} />
      <section className="relative overflow-hidden pt-20 sm:pt-24 pb-8">
        <div className="pointer-events-none absolute inset-0 ivx-grid opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000,transparent_70%)]" />
        <div className="relative mx-auto w-full max-w-[860px] px-5 sm:px-8">
          <Link to="/insights" className="inline-flex items-center gap-2 text-[0.86rem] text-slateish hover:text-ivory"><ArrowLeft className="h-4 w-4" /> Back to Insights</Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#FF9A3D]/15 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[#FF9A3D]">{post.category}</span>
            <span className="font-mono text-[0.7rem] text-slateish/70">{formatDate(post.date)} · {post.readingTime}</span>
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

          {post.externalSlug ? (
            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-hairline bg-surface/40 p-6 sm:p-7">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[#FF9A3D]">Full article</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slateish">
                  This is a summary. The complete write-up, with code and diagrams, is published on {company.blog.name}.
                </p>
                <a
                  href={originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF9A3D] to-[#FF7A1A] px-6 py-3 text-[0.9rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(255,154,61,0.7)]"
                >
                  Read the full article <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ) : null}

          {related.length ? (
            <div className="mt-14 border-t border-hairline/60 pt-10">
              <h3 className="font-heading text-[1.1rem] font-medium text-ivory">Related articles</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map(r => (
                  <Link key={r.slug} to={`/insights/${r.slug}`} className="rounded-2xl border border-hairline bg-surface/40 p-6 transition-colors hover:border-[#FF9A3D]/30 hover:bg-surface/60">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#FF9A3D]">{r.category}</p>
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
