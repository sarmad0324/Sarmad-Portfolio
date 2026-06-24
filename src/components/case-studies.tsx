"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, viewportOnce, EASE } from "@/lib/anim";

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.35);

  const featured = projectsData.find((p) => p.slug === "surfbank")!;
  const featuredMetrics = [
    "30-day Acting CTO trial",
    "Audited web, backend, mobile & extension",
    "Search-first AI strategy",
    "Release 2.0 roadmap — modernize, don't rewrite",
  ];
  const others = ["truckwise", "triangle-wallets", "ezrecova"]
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projectsData;

  return (
    <section ref={ref} id="projects" className="px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Proof of work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora">
            Case studies
          </h2>
          <p className="mt-3 text-base text-textSecondary max-w-xl">
            Real products. Real problems. What was broken, what I owned, what changed.
          </p>
        </motion.div>

        {/* SurfBank — Featured flagship card */}
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
          className="relative rounded-2xl border border-primary/40 bg-surface overflow-hidden mb-6 group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-colors duration-300 shadow-xl shadow-primary/10 ring-1 ring-primary/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <Image
                src={featured.imageUrl}
                fill
                alt={featured.title}
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60 hidden lg:block" />
              {featured.featuredBadge && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center text-[11px] font-bold px-3 py-1.5 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                    {featured.featuredBadge}
                  </span>
                </div>
              )}
            </div>
            <div className="p-7 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-surface2 text-textMuted border border-border">
                  {featured.role}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-textPrimary font-Sora mb-3">
                {featured.title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">
                {featured.homepageSummary}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {featuredMetrics.map((metric) => (
                  <div key={metric} className="flex items-start gap-2 text-xs text-textSecondary">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    {metric}
                  </div>
                ))}
              </div>
              <a
                href="/case-studies/surfbank"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primaryHover transition-colors group/link"
              >
                Read full case study
                <FiArrowRight className="group-hover/link:translate-x-1 transition-transform text-xs" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Other 3 case studies */}
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {others.map((project) => (
            <motion.article
              key={project.title}
              variants={riseIn}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
              className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col hover:border-primary/25 hover:bg-primary/[0.02] hover:shadow-xl hover:shadow-black/25 transition-colors duration-300 group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-textPrimary font-Sora">{project.title}</h3>
                  {project.role && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface2 text-textMuted border border-border shrink-0">
                      {project.role}
                    </span>
                  )}
                </div>
                <p className="text-xs text-textSecondary leading-relaxed flex-1">
                  {project.outcomeShort ?? project.outcome}
                </p>
                <a
                  href={`/case-studies/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primaryHover transition-colors"
                >
                  View Case Study <FiArrowUpRight className="text-[11px]" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex items-center justify-center mt-8">
          <a
            href="/case-studies"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-textSecondary rounded-xl font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 active:scale-[0.98] transition-all duration-300 ease-out text-sm"
          >
            View All Case Studies
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
