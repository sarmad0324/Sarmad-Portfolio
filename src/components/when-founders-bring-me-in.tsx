"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const painPoints = [
  "Product execution is blocked — momentum has stalled, nothing ships",
  "Delivery is messy — deadlines slip, scope creeps, quality suffers",
  "Codebase is fragile — changes break things, technical debt compounds",
  "Team lacks technical ownership — no one owns execution decisions end-to-end",
  "Frontend, backend, and integrations are disconnected — nothing works as one system",
  "Product needs to move faster — but not with chaos and half-baked fixes",
];

export default function WhenFoundersBringMeIn() {
  const { ref } = useSectionInView("#when-founders", 0.45);

  return (
    <section ref={ref} id="when-founders" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-3">
            When Founders <span className="text-primary">Bring Me In</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-textSecondary">
            These are the product pains I step in to fix.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {painPoints.map((point, idx) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-surface px-5 py-4 text-sm text-textSecondary leading-relaxed shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-200"
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
