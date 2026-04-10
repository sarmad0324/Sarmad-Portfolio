"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";

const testimonials = [
  {
    quote:
      "Sarmad delivered strong execution on our wallet app and handled critical flows with real ownership. Communication was clear and the quality held up under pressure.",
    name: "Abdul Samad Umer",
    role: "CEO",
    company: "Triangle Wallets",
    outcome: "Core fintech flows shipped for production — trust-sensitive environment stabilized",
    initials: "AS",
    color: "from-amber-500 to-orange-500",
  },
  {
    quote:
      "Collaborating on Truckwise was smooth because he could work across mobile and backend without constant direction. He solved problems fast and kept delivery moving.",
    name: "Fasseh",
    role: "Product Engineering Collaborator",
    company: "TruckWise",
    outcome: "5+ role types unified into one product system — execution moved from blocked to ship-ready",
    initials: "F",
    color: "from-indigo-500 to-violet-500",
  },
  {
    quote:
      "He took our product goals seriously and translated them into a usable platform. The booking and user journey improvements made a clear difference for our team.",
    name: "Chris",
    role: "Founder",
    company: "EZRecova",
    outcome: "Subscription flows, user journeys, and AI support unified into one platform",
    initials: "C",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function ProofSection() {
  const { ref } = useSectionInView("#reviews", 0.45);

  return (
    <section ref={ref} id="reviews" className="px-6 py-16 md:py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            What founders say
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora">
            Proof from real product teams
          </h2>
          <p className="mt-3 text-base text-textSecondary max-w-xl">
            Outcome-linked proof from founders and teams I&apos;ve stepped in to move forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, idx) => (
            <motion.article
              key={`${item.name}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.09 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-border bg-surface p-6 md:p-7 flex flex-col hover:border-primary/25 transition-all duration-200"
            >
              {/* Large decorative quote mark */}
              <span className="absolute top-4 right-5 text-5xl text-border font-serif leading-none select-none">
                &ldquo;
              </span>

              <p className="text-textSecondary leading-relaxed text-sm md:text-base relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Outcome tag */}
              <div className="mt-5 px-3 py-2.5 rounded-lg bg-primary/[0.08] border border-primary/15">
                <p className="text-xs text-primary font-medium leading-relaxed">
                  {item.outcome}
                </p>
              </div>

              {/* Author */}
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{item.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-textPrimary text-sm">{item.name}</p>
                  <p className="text-xs text-textMuted">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
