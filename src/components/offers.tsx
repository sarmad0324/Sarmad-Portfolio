"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const offers = [
  {
    title: "MVP Build & Launch",
    forWho: "Founders moving from idea to first usable product",
    problem: "You need an MVP that ships fast without accumulating technical debt that slows your next release.",
    delivery:
      "I define and build the core product slice, including frontend, backend flows, and integrations required for real users.",
    outcome: "A launch-ready MVP your team can iterate on immediately.",
  },
  {
    title: "App Rescue & Stabilization",
    forWho: "Teams with buggy, delayed, or fragile products",
    problem: "Your app is in production, but reliability issues and delivery chaos are blocking growth and trust.",
    delivery:
      "I audit bottlenecks, fix unstable features, improve architecture where needed, and restore delivery momentum.",
    outcome: "A more stable product and a clearer path for shipping updates.",
  },
  {
    title: "Full-Stack Product Engineering",
    forWho: "Lean teams needing strong execution across layers",
    problem: "You need one engineer who can move across mobile, web, backend, and data without hand-holding.",
    delivery:
      "I work hands-on across React, React Native, Next.js, Node.js, and PostgreSQL to ship complete product functionality.",
    outcome: "Faster delivery with fewer handoff gaps between frontend and backend.",
  },
  {
    title: "AI & Workflow Integrations",
    forWho: "Ops-heavy teams losing time on repetitive workflows",
    problem: "Manual operations and disconnected tools create bottlenecks that hurt response time and execution quality.",
    delivery:
      "I implement practical automations, dashboards, and integrations that support product and business workflows.",
    outcome: "Cleaner operations and better execution speed across the team.",
  },
  {
    title: "Fractional Technical Partner",
    forWho: "Founders who need senior technical ownership without a full-time hire",
    problem: "You need execution leadership, technical decisions, and reliable delivery from someone close to the product.",
    delivery:
      "I operate as an embedded partner for engineering planning, implementation, and day-to-day execution decisions.",
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
    <section ref={ref} id="offers" className="px-6 py-20 md:py-28 bg-bgWarm dark:bg-darkGray1">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textDark dark:text-white mb-4">
            What I Help <span className="text-primary">Startup Teams Solve</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-textDark/70 dark:text-gray-300">
            Not a freelancer menu. These are execution-focused offers built around common product bottlenecks.
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
              className="rounded-2xl border border-borderGray dark:border-darkGray3 bg-white dark:bg-darkGray2 p-7"
            >
              <h3 className="text-2xl font-bold text-textDark dark:text-white">{offer.title}</h3>
              <p className="text-sm text-primary font-semibold mt-2">{offer.forWho}</p>
              <p className="text-textDark/75 dark:text-gray-300 mt-4 leading-relaxed">{offer.problem}</p>
              <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                <span className="font-semibold text-textDark dark:text-white">What I do:</span> {offer.delivery}
              </p>
              <p className="text-textDark/70 dark:text-gray-400 mt-3 leading-relaxed">
                <span className="font-semibold text-textDark dark:text-white">Expected result:</span> {offer.outcome}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div className="rounded-2xl border border-borderGray dark:border-darkGray3 bg-white dark:bg-darkGray2 p-7">
            <h3 className="text-2xl font-bold text-textDark dark:text-white">Who I Help</h3>
            <ul className="mt-4 space-y-3">
              {idealClients.map((item) => (
                <li key={item} className="text-textDark/75 dark:text-gray-300">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-borderGray dark:border-darkGray3 bg-white dark:bg-darkGray2 p-7">
            <h3 className="text-2xl font-bold text-textDark dark:text-white">Who I Am Not Best For</h3>
            <ul className="mt-4 space-y-3">
              {notIdealClients.map((item) => (
                <li key={item} className="text-textDark/75 dark:text-gray-300">
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
