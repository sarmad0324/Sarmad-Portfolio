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
    outcome: "Core fintech flows shipped for production; trust-sensitive environment stabilized",
  },
  {
    quote:
      "Collaborating on Truckwise was smooth because he could work across mobile and backend without constant direction. He solved problems fast and kept delivery moving.",
    name: "Fasseh",
    role: "Product Engineering Collaborator",
    company: "Truckwise",
    outcome: "5+ role types unified into one product system; execution moved from blocked to ship-ready",
  },
  {
    quote:
      "He took our product goals seriously and translated them into a usable platform. The booking and user journey improvements made a clear difference for our team.",
    name: "Chris",
    role: "Founder",
    company: "Ezrecova",
    outcome: "Subscription flows, user journeys, and AI support unified into one platform",
  },
];

const proofStrip = [
  "5+ product categories: logistics, fintech, recovery, commerce, growth",
  "International clients: Dubai, Nigeria, US, Pakistan",
  "Multi-role systems, transaction-sensitive products, quote-driven sites",
  "4+ years shipping production software — direct requirement analysis to implementation",
];

export default function ProofSection() {
  const { ref } = useSectionInView("#reviews", 0.45);

  return (
    <section ref={ref} id="reviews" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary mb-3">
            Proof from <span className="text-primary">Real Product Teams</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-textSecondary">
            Outcome-linked proof from founders and teams I&apos;ve stepped in to move forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.article
              key={`${item.name}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-surface p-6 md:p-7 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
              {item.outcome && (
                <p className="text-sm text-primary font-medium mt-4">
                  {item.outcome}
                </p>
              )}
              <div className="mt-5 pt-5 border-t border-border">
                <p className="font-bold text-textPrimary text-base">{item.name}</p>
                <p className="text-sm text-textMuted mt-0.5">
                  {item.role}, {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {proofStrip.map((signal) => (
            <div
              key={signal}
              className="rounded-xl border border-border bg-surface px-5 py-5 shadow-sm"
            >
              <p className="text-sm text-textSecondary leading-relaxed">{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
