"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const offers = [
  {
    title: "MVP Build & Launch",
    audience: "Founders moving from idea to first release",
    problem: "Need to launch fast without a fragile product base.",
    delivery: "Ship the highest-leverage slice across frontend, backend, and integrations.",
    outcome: "Production-ready MVP your team can iterate on.",
  },
  {
    title: "App Rescue & Stabilization",
    audience: "Teams with buggy, delayed, or fragile products",
    problem: "Reliability issues and delivery drag blocking growth.",
    delivery: "Audit bottlenecks, fix unstable areas, reset momentum.",
    outcome: "Stable product and a clear path for shipping updates.",
  },
  {
    title: "Full-Stack Product Engineering",
    audience: "Lean teams needing strong execution across layers",
    problem: "Complete features needed across web, mobile, and backend.",
    delivery: "Hands-on delivery across the full stack.",
    outcome: "Faster delivery with fewer handoff gaps.",
  },
  {
    title: "Fractional Technical Partner",
    audience: "Founders who need senior ownership without a full-time hire",
    problem: "Need senior ownership without a full-time hire.",
    delivery: "Embedded partner for planning, implementation, and execution decisions.",
    outcome: "Stronger technical backbone while staying lean.",
  },
];

const idealClients = [
  "Early-stage startups building or refining a product",
  "Founders under launch pressure who need hands-on execution",
  "Lean teams dealing with app instability or delivery bottlenecks",
  "Companies needing coordinated web, mobile, backend, and integration work",
];

const notIdealClients = [
  "One-off brochure websites with no product scope",
  "Teams shopping only for the lowest hourly rate",
  "Projects without clear ownership or decision-makers",
];

export default function Offers() {
  const { ref } = useSectionInView("#offers", 0.45);

  return (
    <section ref={ref} id="offers" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-3">
            Core <span className="text-primary">Offers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-textSecondary">
            Four focused ways startup teams work with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-xl font-bold text-textPrimary">{offer.title}</h3>
              <p className="text-sm text-primary font-medium mt-1">{offer.audience}</p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-2.5 text-textSecondary text-sm">
                  <span className="text-primary font-semibold shrink-0">Problem:</span>
                  <span>{offer.problem}</span>
                </li>
                <li className="flex gap-2.5 text-textSecondary text-sm">
                  <span className="text-primary font-semibold shrink-0">Delivery:</span>
                  <span>{offer.delivery}</span>
                </li>
                <li className="flex gap-2.5 text-textSecondary text-sm">
                  <span className="text-primary font-semibold shrink-0">Outcome:</span>
                  <span>{offer.outcome}</span>
                </li>
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xl font-bold text-textPrimary">Who I Help</h3>
            <ul className="mt-3 space-y-2">
              {idealClients.map((item) => (
                <li key={item} className="text-textSecondary text-sm">
                  - {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-textMuted mt-4">
              Secondary capability: AI/workflow integrations are available when they support product delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xl font-bold text-textPrimary">Not a Fit</h3>
            <ul className="mt-3 space-y-2">
              {notIdealClients.map((item) => (
                <li key={item} className="text-textSecondary text-sm">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
