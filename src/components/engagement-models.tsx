"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const models = [
  {
    title: "Product Audit / Technical Review",
    summary: "Clarify delivery risks before spending more engineering cycles.",
    includes: "Architecture review, bottleneck mapping, and an execution plan.",
    fit: "Best when shipping slows down or quality issues repeat.",
  },
  {
    title: "2-4 Week Build Sprint",
    summary: "Focused implementation for a key milestone.",
    includes: "Feature delivery across web/mobile/backend with weekly checkpoints.",
    fit: "Best for MVP milestones and urgent launches.",
  },
  {
    title: "Monthly Technical Partner",
    summary: "Ongoing embedded execution for lean teams.",
    includes: "Prioritization, hands-on development, stabilization, and delivery leadership.",
    fit: "Best for teams needing continuity without a full-time senior hire.",
  },
];

export default function EngagementModels() {
  const { ref } = useSectionInView("#engagement", 0.4);

  return (
    <section ref={ref} id="engagement" className="px-6 py-16 md:py-20 bg-darkBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Engagement <span className="text-primary">Models</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
            Structured options designed for founders and lean product teams.
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
              className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-6"
            >
              <h3 className="text-xl font-bold text-white">{model.title}</h3>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">{model.summary}</p>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-gray-200">Includes:</span> {model.includes}
              </p>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-gray-200">Good fit:</span> {model.fit}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
