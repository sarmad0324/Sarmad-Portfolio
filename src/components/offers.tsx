"use client";

import { motion } from "framer-motion";
import { FiSearch, FiTool, FiShield, FiArrowRight, FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";

const offers = [
  {
    icon: FiSearch,
    label: "Start here",
    tag: "Technical Audit & Roadmap",
    headline: "Not sure what's actually broken, or what to build next? I'll tell you — in writing.",
    price: "$1,500 fixed",
    term: "2–3 weeks",
    points: [
      "Full review of your product, architecture, codebase health, and roadmap",
      "Honest assessment of what's slowing you down and what to fix first",
      "AI/automation opportunities specific to your product",
      "A prioritized execution plan you own — whether you work with me next or not",
    ],
    cta: "Book an Audit",
    highlight: true,
    mainOffer: false,
  },
  {
    icon: FiTool,
    label: null,
    tag: "Build & Stabilize Sprint",
    headline: "You know what needs to ship. I take ownership and ship it.",
    price: "From $4,000",
    term: "fixed scope",
    points: [
      "Fix a broken, fragile, or stalled product, or build v1 the right way",
      "Full-stack: web, mobile, backend, integrations",
      "Scoped, time-boxed, with weekly delivery you can see",
      "Built to scale, not just to demo",
    ],
    cta: "Scope a Sprint",
    highlight: false,
    mainOffer: false,
  },
  {
    icon: FiShield,
    label: "Main offer",
    tag: "Technical Partner / Fractional CTO",
    headline: "I own your product execution — embedded, senior, ongoing.",
    price: "From $3,000/month",
    term: "monthly retainer",
    points: [
      "Monthly retainer — embedded in your team, not on-call",
      "Own delivery, architecture, roadmap, and technical hiring",
      "Direct line to me, no account managers, no ticket queues",
      "The senior technical leadership you can't yet justify hiring full-time",
    ],
    cta: "Become a Partner",
    highlight: false,
    mainOffer: true,
  },
];

export default function Offers() {
  const { ref } = useSectionInView("#offers", 0.45);

  return (
    <section ref={ref} id="offers" className="px-6 py-16 md:py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Ways to work together
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora tracking-tight">
            Start with an audit. Scale into a partnership.
          </h2>
          <p className="mt-4 text-base md:text-lg text-textSecondary max-w-2xl leading-relaxed">
            Every engagement starts with clarity. From there, you can take the roadmap and run, bring me in for a focused sprint, or have me own execution as your technical partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 lg:items-stretch">
          {offers.map((offer, idx) => (
            <motion.div
              key={offer.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-200 ${
                offer.highlight
                  ? "border-primary/50 bg-primary/[0.07] shadow-xl shadow-primary/15 ring-1 ring-primary/30 lg:scale-[1.035] lg:-translate-y-1 z-10"
                  : offer.mainOffer
                  ? "border-primary/30 bg-surface hover:border-primary/40"
                  : "border-border bg-surface hover:border-primary/20 hover:bg-primary/[0.03]"
              }`}
            >
              {offer.label && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap ${
                      offer.highlight
                        ? "bg-primary text-white"
                        : "bg-surface2 text-primary border border-primary/30"
                    }`}
                  >
                    {offer.label}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    offer.highlight
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-surface2 border border-border"
                  }`}
                >
                  <offer.icon className={`text-lg ${offer.highlight ? "text-primary" : "text-textMuted"}`} />
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    offer.highlight ? "text-primary" : "text-textMuted"
                  }`}
                >
                  {offer.tag}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-textPrimary font-Sora leading-snug mb-4">
                {offer.headline}
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className={`text-2xl font-bold font-Sora ${offer.highlight ? "text-primary" : "text-textPrimary"}`}>
                  {offer.price}
                </span>
                <span className="text-sm text-textMuted">· {offer.term}</span>
              </div>

              <ul className="space-y-3 flex-1">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-textSecondary leading-relaxed">
                    <FiCheck className={`shrink-0 mt-0.5 text-sm ${offer.highlight ? "text-primary" : "text-textMuted"}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] group ${
                  offer.highlight || offer.mainOffer
                    ? "bg-primary text-white hover:bg-primaryHover shadow-lg shadow-primary/20"
                    : "border border-border text-textSecondary hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5"
                }`}
              >
                {offer.cta}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-textMuted max-w-xl mx-auto">
          Final scope and pricing depend on product complexity and speed required. Most engagements start with an Audit.
        </p>
      </div>
    </section>
  );
}
