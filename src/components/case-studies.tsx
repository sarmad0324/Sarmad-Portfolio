"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";

const secondaryCopy: Record<
  string,
  { label: string; blurb: string; cta: string }
> = {
  surfbank: {
    label: "Acting CTO / Product Strategy",
    blurb:
      "30-day technical leadership engagement covering architecture, AI direction, mobile strategy and a dependency-driven Release 2.0 roadmap.",
    cta: "Read Case Study",
  },
  "triangle-wallets": {
    label: "Fintech Engineering",
    blurb:
      "Production wallet functionality and trust-sensitive mobile flows delivered across a real fintech product.",
    cta: "View Case Study",
  },
  ezrecova: {
    label: "Product Engineering",
    blurb:
      "Subscription workflows, user journeys and AI-assisted product functionality brought together into one production platform.",
    cta: "View Case Study",
  },
};

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.25);
  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const featured = projectsData.find((p) => p.slug === "truckwise")!;
  const others = ["surfbank", "triangle-wallets", "ezrecova"]
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
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <p className="section-eyebrow">Featured case study</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            TruckWise
          </h2>
          <p className="mt-3 text-primary font-semibold text-sm md:text-base tracking-wide">
            2+ years of continuous technical ownership
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
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <p className="text-textSecondary leading-relaxed">
              A multi-role logistics platform spanning web dashboards, React Native applications,
              backend services, finance workflows and production infrastructure.
            </p>
            <p className="text-textSecondary leading-relaxed">
              I stepped into an increasingly complex product environment and became responsible
              for ongoing technical execution across the system.
            </p>
            <p className="text-textSecondary leading-relaxed">
              Work has included product stabilization, architecture, backend and mobile
              development, deployment infrastructure, operational workflows, OCR/document
              intelligence and AI-assisted document processing.
            </p>
            <p className="text-xs text-textMuted tracking-wide pt-1">
              Technical ownership · Production systems · AI/document workflows · Web + Mobile ·
              Infrastructure
            </p>
            <a
              href="/case-studies/truckwise"
              className="inline-flex items-center gap-2 text-sm font-semibold text-textPrimary border-b border-primary pb-1 w-fit hover:text-primary transition-colors group pt-2"
            >
              View TruckWise Case Study
              <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </a>
          </div>
        </motion.article>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8"
        >
          <p className="section-eyebrow">Other proof</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {others.map((project, i) => {
            const copy = secondaryCopy[project.slug] ?? {
              label: project.role ?? "",
              blurb: project.outcomeShort ?? project.outcome ?? "",
              cta: "View Case Study",
            };
            return (
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
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-textMuted mb-3">
                    {copy.label}
                  </p>
                  <p className="text-sm text-textSecondary leading-relaxed flex-1">{copy.blurb}</p>
                  <span className="mt-4 text-xs font-semibold text-primary">{copy.cta}</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
