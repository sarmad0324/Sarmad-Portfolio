"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/useInView";

export default function CaseStudies() {
  const { ref } = useSectionInView("#projects", 0.35);
  const featured = projectsData.slice(0, 4);

  return (
    <section ref={ref} id="projects" className="px-6 py-20 md:py-28 bg-bgWarm dark:bg-darkBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textDark dark:text-white mb-4">
            Selected <span className="text-primary">Product Work</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-textDark/70 dark:text-gray-300">
            Case-study style snapshots focused on business context, ownership, and execution outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-borderGray dark:border-darkGray3 bg-white dark:bg-darkGray2 p-7 flex flex-col"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-textDark dark:text-white">{project.title}</h3>
                {project.role && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.role}
                  </span>
                )}
              </div>

              <p className="text-textDark/75 dark:text-gray-300 mt-4 leading-relaxed">{project.description}</p>
              {project.context && (
                <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                  <span className="font-semibold text-textDark dark:text-white">Context:</span> {project.context}
                </p>
              )}
              {project.problem && (
                <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                  <span className="font-semibold text-textDark dark:text-white">Challenge:</span> {project.problem}
                </p>
              )}
              {project.ownership && (
                <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                  <span className="font-semibold text-textDark dark:text-white">What I owned:</span> {project.ownership}
                </p>
              )}
              {project.outcome && (
                <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                  <span className="font-semibold text-textDark dark:text-white">Outcome:</span> {project.outcome}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-darkGray1 text-textDark/70 dark:text-gray-400 border border-borderGray/60 dark:border-darkGray3/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {project.linkLabel || "View Project"}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
