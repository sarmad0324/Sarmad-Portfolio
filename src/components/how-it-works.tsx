"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, viewportOnce } from "@/lib/anim";
import { BRAND } from "@/lib/seo";

const steps = [
  {
    number: "01",
    title: "Fit",
    description: "You show me the product, problem and business context.",
  },
  {
    number: "02",
    title: "Diagnose & Scope",
    description:
      "If the problem is clear, we scope the implementation directly. If it isn't, we start with a Technical Audit.",
  },
  {
    number: "03",
    title: "Execute & Own",
    description:
      "I step in for a focused implementation, product rescue, or ongoing technical partnership and remain accountable through delivery.",
  },
];

export default function HowItWorks() {
  const { ref } = useSectionInView("#how", 0.4);

  return (
    <section ref={ref} id="how" className="px-6 md:px-10 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 max-w-2xl"
        >
          <p className="section-eyebrow">How I work</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Clear problem. Clear ownership. Clear execution.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={riseIn} className="border-t border-border pt-6">
              <span className="font-Sora text-sm font-bold text-primary">{step.number}</span>
              <h3 className="mt-3 text-xl font-bold text-textPrimary font-Sora">{step.title}</h3>
              <p className="mt-3 text-sm text-textSecondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12"
        >
          <a href={BRAND.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a 20-min fit call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
