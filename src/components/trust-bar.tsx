"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/anim";

const logos = [
  "SurfBank",
  "TruckWise",
  "Triangle Wallets",
  "EZRecova",
  "Geeks for Growth",
];

/** Quiet credibility band — products & teams, not a skills parade. */
export default function TrustBar() {
  return (
    <section className="border-y border-border/70 py-8 md:py-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-[1400px] mx-auto px-6 md:px-10"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-textMuted mb-6">
          Trusted on products shipping to real users
        </p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <li
              key={name}
              className="font-Sora text-sm md:text-base font-semibold tracking-tight text-textSecondary/80 hover:text-textPrimary transition-colors"
            >
              {name}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
