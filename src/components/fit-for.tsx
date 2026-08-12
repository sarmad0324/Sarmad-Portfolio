"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";
import { FiCheck, FiX } from "react-icons/fi";

const bestFit = [
  "Early-stage startup with a live or partially built product",
  "No technical co-founder or senior technical owner",
  "Product is stuck, fragile, or moving too slowly",
  "Founder wants one accountable technical lead",
  "Budget available for serious execution",
];

const notFit = [
  "Equity-only engagements",
  "Hourly ticket outsourcing",
  "“Build everything” projects without validated scope",
  "Teams looking only for the cheapest developer",
];

export default function FitFor() {
  const { ref } = useSectionInView("#fit", 0.35);

  return (
    <section ref={ref} id="fit" className="px-6 md:px-10 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 max-w-2xl"
        >
          <p className="section-eyebrow">Qualification</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Who this is for — and who it isn&apos;t
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE }}
            className="bg-bg p-8 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-6">
              Best fit
            </p>
            <ul className="space-y-4">
              {bestFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-textSecondary leading-relaxed">
                  <FiCheck className="shrink-0 mt-1 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="bg-bg p-8 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-textMuted mb-6">
              Not a fit
            </p>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-textSecondary leading-relaxed">
                  <FiX className="shrink-0 mt-1 text-textMuted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
