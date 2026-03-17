"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const models = [
  {
    title: "Product Audit / Technical Review",
    summary: "Clarify what’s blocking delivery before spending more engineering cycles.",
    includes: "Architecture review, bottleneck mapping, and a concrete execution plan.",
    fit: "When shipping has stalled or quality issues keep repeating.",
  },
  {
    title: "2-4 Week Build Sprint",
    summary: "Focused implementation to unblock a key milestone.",
    includes: "Feature delivery across web/mobile/backend with weekly checkpoints.",
    fit: "MVP milestones, rescue work, or urgent launches that can’t wait.",
  },
  {
    title: "Monthly Technical Partner",
    summary: "Ongoing embedded execution for lean teams under delivery pressure.",
    includes: "Prioritization, hands-on development, stabilization, and delivery ownership.",
    fit: "Teams needing continuity and senior ownership without a full-time hire.",
  },
];

export default function EngagementModels() {
  const { ref } = useSectionInView("#engagement", 0.4);

  return (
    <section ref={ref} id="engagement" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-3">
            Engagement <span className="text-primary">Models</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-textSecondary">
            Structured interventions for founders who need execution to move again.
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
              className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-textPrimary">{model.title}</h3>
              <p className="text-textSecondary mt-3 text-sm leading-relaxed">{model.summary}</p>
              <p className="text-textMuted mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-textPrimary">Includes:</span> {model.includes}
              </p>
              <p className="text-textMuted mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-textPrimary">Good fit:</span> {model.fit}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-sm text-textMuted mt-6 max-w-xl mx-auto">
          When project scope grows, I can extend delivery capacity through a trusted team at SyntaxLeap while staying hands-on in direction and execution quality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200"
          >
            Discuss Your Project
          </a>
          <a
            href="https://calendly.com/sarmadirfan78/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
