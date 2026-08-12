"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.25);
  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const featured = projectsData.find((p) => p.slug === "surfbank")!;
  const featuredMetrics = [
    "30-day Acting CTO trial",
    "Audited web, backend, mobile & extension",
    "Search-first AI strategy",
    "Release 2.0 — modernize, don't rewrite",
  ];
  const others = ["truckwise", "triangle-wallets", "ezrecova"]
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projectsData;

  return (
    <section ref={ref} id="projects" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Proof of work</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Case studies
          </h2>
          </div>
          <p className="text-textSecondary max-w-sm md:text-right leading-relaxed">
            What was broken. What I owned. What changed.
          </p>
        </motion.div>

        <motion.article
          ref={featuredRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20"
        >
          <div className="lg:col-span-7 relative aspect-[16/11] overflow-hidden border border-border">
            <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
              <Image
                src={featured.imageUrl}
                fill
                alt={featured.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </motion.div>
            {featured.featuredBadge && (
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-bold px-3 py-1.5 bg-primary text-[color:var(--accent-ink)]">
                  {featured.featuredBadge}
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-4">
              {featured.role}
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-textPrimary font-Sora mb-5 tracking-tight">
              {featured.title}
            </h3>
            <p className="text-textSecondary leading-relaxed mb-8">
              {featured.homepageSummary}
            </p>
            <ul className="space-y-3 mb-10">
              {featuredMetrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3 text-sm text-textSecondary">
                  <span className="text-primary mt-0.5">→</span>
                  {metric}
                </li>
              ))}
            </ul>
            <a
              href="/case-studies/surfbank"
              className="inline-flex items-center gap-2 text-sm font-semibold text-textPrimary border-b border-primary pb-1 w-fit hover:text-primary transition-colors group"
            >
              Read full case study
              <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </a>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {others.map((project, i) => (
            <motion.a
              key={project.title}
              href={`/case-studies/${project.slug}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="group bg-bg p-0 flex flex-col hover:bg-surface transition-colors duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-textPrimary font-Sora">{project.title}</h3>
                  <FiArrowUpRight className="text-textMuted group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
                {project.role && (
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-textMuted mb-3">
                    {project.role}
                  </p>
                )}
                <p className="text-sm text-textSecondary leading-relaxed">
                  {project.outcomeShort ?? project.outcome}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="/case-studies" className="btn-ghost">
            View all case studies
            <FiArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
}
