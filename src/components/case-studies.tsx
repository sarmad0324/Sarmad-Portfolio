"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.35);
  const featured = projectsData.slice(0, 3);

  return (
    <section ref={ref} id="projects" className="px-6 py-16 md:py-20 bg-darkBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Featured <span className="text-primary">Case Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
            Three projects that show product context, delivery ownership, and outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-darkGray3 bg-darkGray1/70 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10]">
                <Image src={project.imageUrl} fill alt={project.title} className="object-cover" />
              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.role && (
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                      {project.role}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 mt-3">{project.context || project.description}</p>
                {project.problem && (
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="font-semibold text-gray-200">Challenge:</span> {project.problem}
                  </p>
                )}
                {project.outcome && (
                  <p className="text-sm text-gray-400 mt-2">
                    <span className="font-semibold text-gray-200">Outcome:</span> {project.outcome}
                  </p>
                )}
                <a
                  href={`/case-studies/${project.slug}`}
                  className="mt-5 inline-flex items-center justify-center px-4 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  View Case Study
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a href="/case-studies" className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View All Case Studies
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
