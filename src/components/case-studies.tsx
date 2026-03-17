"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.35);
  const featuredSlugs = ["truckwise", "triangle-wallets", "ezrecova", "exact-printo"];
  const featured = featuredSlugs
    .map((slug) => projectsData.find((project) => project.slug === slug))
    .filter((project): project is (typeof projectsData)[number] => Boolean(project));

  return (
    <section ref={ref} id="projects" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-3">
            Featured <span className="text-primary">Case Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-textSecondary">
            Four projects that show product context, delivery ownership, and outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-surface overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-200"
            >
              <div className="relative h-48 md:h-56 w-auto">
                <Image src={project.imageUrl} fill alt={project.title} className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-textPrimary">{project.title}</h3>
                  {project.role && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primarySoft text-primary border border-primary/25 shrink-0">
                      {project.role}
                    </span>
                  )}
                </div>
                <p className="text-sm text-textSecondary mt-3 line-clamp-2 leading-relaxed">
                  {project.homepageSummary ?? project.context ?? project.description}
                </p>
                {(project.outcomeShort ?? project.outcome) && (
                  <p className="text-sm text-textMuted mt-2 line-clamp-2">
                    <span className="font-semibold text-textPrimary">Outcome:</span>{" "}
                    {project.outcomeShort ?? project.outcome}
                  </p>
                )}
                <a
                  href={`/case-studies/${project.slug}`}
                  className="mt-5 inline-flex items-center justify-center px-5 py-3 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
                >
                  View Case Study
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="/case-studies" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all duration-200">
            View All Case Studies
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold border-2 border-primary/60 text-primary rounded-lg hover:bg-primarySoft hover:border-primary transition-all duration-200">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
