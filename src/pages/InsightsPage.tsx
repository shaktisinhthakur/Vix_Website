import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { Reveal } from '../components/Reveal';
import { insights } from '../data/site';
import { company } from '../data/company';
import { formatDate } from '../utils/formatDate';
import { Seo } from '../components/Seo';

const cats = ['All', ...Array.from(new Set(insights.map((i) => i.category)))];

export function InsightsPage() {
  const [active, setActive] = useState<string>('All');
  const filtered = useMemo(
    () => (active === 'All' ? insights : insights.filter((i) => i.category === active)),
    [active]
  );

  return (
    <>
      <Seo
        path="/insights"
        title="Insights"
        description={`Essays and field notes from the ${company.name} team on applied AI, engineering practice and building digital products.`}
      />
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking on <span className="ivx-text-gradient">Building.</span>
          </>
        }
        copy={`Notes from the studio on AI, agents, retrieval and engineering practice. Every article is published in full on ${company.blog.name}.`}
        imageSrc="/insight.png"
        imageAlt="Insights Visual"
      />

      <section className="border-t border-hairline/60 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[0.84rem] font-medium transition-colors ${
                  active === c
                    ? 'border-[#FF9A3D]/50 bg-surface text-ivory'
                    : 'border-hairline bg-surface/30 text-slateish hover:border-[#FF9A3D]/30 hover:text-ivory'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  to={`/insights/${post.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF9A3D]/40 hover:bg-surface/70 hover:shadow-[0_24px_60px_-30px_rgba(255,154,61,0.35)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-[#FF9A3D] to-[#FF9A3D]/0 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF9A3D]/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-2">
                    <span className="rounded-full bg-[#FF9A3D]/12 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#FF9A3D]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[0.64rem] text-slateish/60">
                      {formatDate(post.date)} · {post.readingTime}
                    </span>
                  </div>

                  <h3 className="relative mt-4 font-heading text-[1.12rem] font-medium leading-snug text-ivory group-hover:text-white">
                    {post.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-[0.88rem] leading-relaxed text-slateish">
                    {post.description}
                  </p>

                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-[0.84rem] font-medium text-[#FF9A3D] group-hover:text-ivory">
                    Read Article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {!filtered.length ? (
            <p className="mt-10 rounded-2xl border border-hairline bg-surface/30 px-6 py-8 text-center text-slateish">
              No articles in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      <CTASection
        title={
          <>
            Want insights <span className="ivx-text-gradient">applied to your product?</span>
          </>
        }
        copy="We can bring the same thinking to your roadmap — concretely."
        primaryTo="/contact"
        secondaryLabel="Our Services"
        secondaryTo="/services"
      />
    </>
  );
}
