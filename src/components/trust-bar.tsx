"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/anim";

const capabilities = [
  "Product Ownership",
  "AI Systems Integration",
  "Product Rescue",
  "Web & Mobile",
  "Backend & Infrastructure",
];

/** Quiet capability strip — no tool logos above the fold. */
export default function TrustBar() {
  return (
    <section className="border-y border-border/70 py-7 md:py-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-[1400px] mx-auto px-6 md:px-10"
      >
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base text-textSecondary">
          {capabilities.map((name, i) => (
            <li key={name} className="flex items-center gap-3 font-Sora font-semibold tracking-tight">
              {i > 0 && <span className="text-border select-none" aria-hidden>·</span>}
              <span className="hover:text-textPrimary transition-colors">{name}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
