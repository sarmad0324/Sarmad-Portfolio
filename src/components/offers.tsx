"use client";

import { motion } from "framer-motion";
import { FiTool, FiPackage, FiShield, FiArrowRight, FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";

const offers = [
  {
    icon: FiTool,
    tag: "Fix & Stabilize",
    headline: "Your product is broken or stuck. I fix it.",
    forWho: "Founders with buggy, delayed, or unstable products.",
    price: "Starting from $500",
    points: [
      "Diagnose what's actually blocking delivery",
      "Stabilize fragile code and clear the backlog",
      "Restore release confidence and execution flow",
      "Take ownership — not just give advice",
    ],
    featured: false,
  },
  {
    icon: FiPackage,
    tag: "MVP Build",
    headline: "You have an idea. I ship the first version.",
    forWho: "Non-technical founders who need version one built right.",
    price: "Typical range: $1k – $3k",
    points: [
      "Scope the right features — skip the bloat",
      "Build across web, mobile, and backend",
      "Ship something real to test and validate",
      "Structure it to scale, not just to demo",
    ],
    featured: false,
  },
  {
    icon: FiShield,
    tag: "Technical Partner",
    headline: "I own your product execution, ongoing.",
    forWho: "Founders who need a senior technical lead without a full-time hire.",
    price: "Monthly engagements from $1k",
    points: [
      "Monthly retainer — I'm embedded, not on-call",
      "Own delivery decisions, priorities, and execution",
      "Work across the full stack every week",
      "Direct line — no ticketing systems, no delays",
    ],
    featured: true,
  },
];

export default function Offers() {
  const { ref } = useSectionInView("#offers", 0.45);

  return (
    <section ref={ref} id="offers" className="px-6 py-16 md:py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            How I can help
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora">
            3 ways to work with me
          </h2>
          <p className="mt-3 text-base text-textSecondary max-w-xl">
            Entry points. All of them lead to the same thing — your product moving again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-7 transition-all duration-200 ${
                offer.featured
                  ? "border-primary/40 bg-primary/[0.06] shadow-lg shadow-primary/10"
                  : "border-border bg-surface hover:border-primary/20 hover:bg-primary/[0.03]"
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg">
                    Main Offer
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  offer.featured ? "bg-primary/20 border border-primary/30" : "bg-surface2 border border-border"
                }`}>
                  <offer.icon className={`text-base ${offer.featured ? "text-primary" : "text-textMuted"}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  offer.featured ? "text-primary" : "text-textMuted"
                }`}>
                  {offer.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-textPrimary font-Sora leading-snug mb-2">
                {offer.headline}
              </h3>
              <p className="text-sm text-textMuted mb-3">{offer.forWho}</p>
              <p className={`text-sm font-semibold mb-5 ${offer.featured ? "text-primary" : "text-textSecondary"}`}>
                {offer.price}
              </p>

              <ul className="space-y-2.5 flex-1">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-textSecondary">
                    <FiCheck className={`shrink-0 mt-0.5 text-sm ${offer.featured ? "text-primary" : "text-textMuted"}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 group ${
                  offer.featured
                    ? "bg-primary text-white hover:bg-primaryHover shadow-lg shadow-primary/20"
                    : "border border-border text-textSecondary hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5"
                }`}
              >
                Get Started
                <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-textMuted">
          Final scope and pricing depends on product complexity and speed required.
        </p>
      </div>
    </section>
  );
}
