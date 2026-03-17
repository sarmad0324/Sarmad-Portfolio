"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const models = [
  {
    title: "Product Audit / Technical Review",
    summary: "For founders who need clarity before spending more engineering time.",
    includes: "Architecture review, bottleneck mapping, delivery risk analysis, and a concrete execution plan.",
    fit: "Best when shipping is slow or quality issues keep repeating.",
  },
  {
    title: "2-4 Week Build Sprint",
    summary: "Focused implementation window for a critical product milestone.",
    includes: "Feature delivery across web/mobile/backend, integration work, and weekly delivery checkpoints.",
    fit: "Best for MVP milestones, urgent launches, and deadline-driven product work.",
  },
  {
    title: "Monthly Technical Partner",
    summary: "Ongoing embedded execution for lean teams that need senior technical ownership.",
    includes: "Prioritization support, hands-on development, stabilization, and delivery leadership.",
    fit: "Best for startups that need continuity without hiring full-time senior engineering immediately.",
  },
];

export default function EngagementModels() {
  const { ref } = useSectionInView("#engagement", 0.4);

  return (
    <section ref={ref} id="engagement" className="px-6 py-20 md:py-28 bg-white dark:bg-darkGray1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textDark dark:text-white mb-4">
            How We Can <span className="text-primary">Work Together</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-textDark/70 dark:text-gray-300">
            Clear engagement models so founders can pick the right execution format quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, idx) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-borderGray dark:border-darkGray3 bg-bgWarm dark:bg-darkGray2 p-7"
            >
              <h3 className="text-2xl font-bold text-textDark dark:text-white">{model.title}</h3>
              <p className="text-textDark/75 dark:text-gray-300 mt-4 leading-relaxed">{model.summary}</p>
              <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                <span className="font-semibold text-textDark dark:text-white">Includes:</span> {model.includes}
              </p>
              <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                <span className="font-semibold text-textDark dark:text-white">Good fit:</span> {model.fit}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
