"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const offers = [
  {
    title: "MVP Build & Launch",
    forWho: "Founders moving from idea to first release",
    problem: "Need to launch quickly without creating a fragile product base.",
    delivery: "Ship the highest-leverage product slice across frontend, backend, and core integrations.",
    outcome: "A production-ready MVP your team can iterate on fast.",
  },
  {
    title: "App Rescue & Stabilization",
    forWho: "Teams with buggy, delayed, or fragile products",
    problem: "Reliability issues and delivery drag are blocking growth.",
    delivery: "Audit bottlenecks, fix unstable areas, and reset engineering momentum.",
    outcome: "A more stable product and a clearer path for shipping updates.",
  },
  {
    title: "Full-Stack Product Engineering",
    forWho: "Lean teams needing strong execution across layers",
    problem: "You need complete features shipped across web, mobile, and backend.",
    delivery: "Hands-on delivery across React, React Native, Next.js, Node.js, and PostgreSQL.",
    outcome: "Faster delivery with fewer handoff gaps between frontend and backend.",
  },
  {
    title: "Fractional Technical Partner",
    forWho: "Founders who need senior ownership without a full-time hire",
    problem: "Need reliable technical direction plus hands-on delivery.",
    delivery: "Operate as an embedded partner for planning, implementation, and execution decisions.",
    outcome: "A stronger technical backbone while keeping your team lean.",
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
    <section ref={ref} id="offers" className="px-6 py-16 md:py-20 bg-darkBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Core <span className="text-primary">Offers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
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
              className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-6"
            >
              <h3 className="text-xl font-bold text-white">{offer.title}</h3>
              <p className="text-sm text-primary font-semibold mt-2">{offer.forWho}</p>
              <p className="text-gray-300 mt-3 leading-relaxed text-sm">{offer.problem}</p>
              <p className="text-gray-400 mt-2 leading-relaxed text-sm">
                <span className="font-semibold text-gray-200">Delivery:</span> {offer.delivery}
              </p>
              <p className="text-gray-400 mt-2 leading-relaxed text-sm">
                <span className="font-semibold text-gray-200">Outcome:</span> {offer.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-6">
            <h3 className="text-xl font-bold text-white">Who I Help</h3>
            <ul className="mt-3 space-y-2">
              {idealClients.map((item) => (
                <li key={item} className="text-gray-300 text-sm">
                  - {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Secondary capability: AI/workflow integrations are available when they support product delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-6">
            <h3 className="text-xl font-bold text-white">Not a Fit</h3>
            <ul className="mt-3 space-y-2">
              {notIdealClients.map((item) => (
                <li key={item} className="text-gray-300 text-sm">
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
