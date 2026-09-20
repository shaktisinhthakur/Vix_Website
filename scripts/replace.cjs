const fs = require('fs');
const content = fs.readFileSync('c:/Users/sameer/Downloads/vix/src/pages/SolutionDetailPage.tsx', 'utf8');
const rep1 = `      ) : isGenerativeAI ? (
        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 ivx-grid opacity-[0.32] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,#000_20%,transparent_78%)]" />
          <div className="pointer-events-none absolute -left-40 top-[-8%] h-[520px] w-[520px] rounded-full bg-brand-violet/10 blur-[130px]" />
          <div className="pointer-events-none absolute -right-28 top-[18%] h-[460px] w-[460px] rounded-full bg-brand-purple/12 blur-[140px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
          <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
              <div className="w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left lg:max-w-none">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 font-heading font-semibold leading-[0.98] tracking-tightest text-ivory text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] max-w-4xl"
                >
                  {detail.heroTitle}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem]"
                >
                  {detail.heroCopy}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF9A3D] to-[#FF7A1A] px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(255,154,61,0.7)]"
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-[#FF9A3D]/40"
                  >
                    All solutions
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 lg:mt-0 flex justify-center lg:justify-end items-center"
              >
                <div className="relative aspect-square w-full max-w-[98vw] lg:max-w-[850px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img
                    src="/genai.png"
                    alt="Generative AI Visual"
                    className="w-full h-full object-contain filter brightness-[1.05] contrast-[1.05] saturate-[1.1] transition-all duration-700 hover:brightness-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/10 to-transparent mix-blend-overlay rounded-full blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : isIntelligentAutomation ? (`;
const rep2 = `        <section className="relative overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 ivx-grid opacity-[0.32] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,#000_20%,transparent_78%)]" />
          <div className="pointer-events-none absolute -left-40 top-[-8%] h-[520px] w-[520px] rounded-full bg-[#FF9A3D]/10 blur-[130px]" />
          <div className="pointer-events-none absolute -right-28 top-[18%] h-[460px] w-[460px] rounded-full bg-brand-cyan/12 blur-[140px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
          <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8">
            <div className="flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
              <div className="w-full max-w-3xl mx-auto text-center lg:mx-0 lg:text-left lg:max-w-none">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7 font-heading font-semibold leading-[0.98] tracking-tightest text-ivory text-[2.6rem] sm:text-[3.8rem] lg:text-[4.6rem] max-w-4xl"
                >
                  {detail.heroTitle}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slateish sm:text-[1.1rem]"
                >
                  {detail.heroCopy}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF9A3D] to-[#FF7A1A] px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(255,154,61,0.7)]"
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-[#FF9A3D]/40"
                  >
                    All solutions
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-12 lg:mt-0 flex justify-center lg:justify-end items-center"
              >
                <div className="relative aspect-square w-full max-w-[98vw] lg:max-w-[850px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img
                    src="/automate.png"
                    alt="Intelligent Automation Visual"
                    className="w-full h-full object-contain filter brightness-[1.05] contrast-[1.05] saturate-[1.1] transition-all duration-700 hover:brightness-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A3D]/10 to-transparent mix-blend-overlay rounded-full blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (`;
const rep3 = `        <PageHero
          eyebrow={detail.title}
          title={detail.heroTitle}
          copy={detail.heroCopy}
          actions={
            <>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF9A3D] to-[#FF7A1A] px-7 py-3.5 text-[0.95rem] font-medium text-white shadow-[0_18px_40px_-18px_rgba(255,154,61,0.7)]"
              >
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/40 px-7 py-3.5 text-[0.95rem] font-medium text-ivory hover:border-[#FF9A3D]/40"
              >
                All solutions
              </Link>
            </>
          }
        />
      )}

      <section className="border-t border-hairline/60 py-16 sm:py-20">`;

const replacement = rep1 + rep2 + rep3;
const newContent = content.replace(/\)\s*:\s*\(\s*<PageHero[\s\S]*?<\/>\s*\}\s*\}\s*\}/, replacement);
fs.writeFileSync('c:/Users/sameer/Downloads/vix/src/pages/SolutionDetailPage.tsx', newContent);
console.log('Done');