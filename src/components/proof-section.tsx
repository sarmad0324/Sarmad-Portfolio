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
  },
  {
    quote:
      "Collaborating on Truckwise was smooth because he could work across mobile and backend without constant direction. He solved problems fast and kept delivery moving.",
    name: "Fasseh",
    role: "Product Engineering Collaborator",
    company: "Truckwise",
  },
  {
    quote:
      "He took our product goals seriously and translated them into a usable platform. The booking and user journey improvements made a clear difference for our team.",
    name: "Chris",
    role: "Founder",
    company: "Ezrecova",
  },
];

const proofStrip = [
  "Production work across logistics, fintech, and platform products",
  "International collaboration across multiple markets",
  "Web + mobile + backend execution in one partner",
  "Trusted by founders and lean teams under delivery pressure",
];

export default function ProofSection() {
  const { ref } = useSectionInView("#reviews", 0.45);

  return (
    <section ref={ref} id="reviews" className="px-6 py-16 md:py-20 bg-darkBlack">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Proof from <span className="text-primary">Real Product Teams</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-300">
            A few signals from teams that trusted me with meaningful execution work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.article
              key={`${item.name}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-5"
            >
              <p className="text-gray-300 leading-relaxed text-sm">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-bold text-white">{item.name}</p>
                <p className="text-sm text-primary">
                  {item.role}, {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {proofStrip.map((signal) => (
            <div
              key={signal}
              className="rounded-xl border border-darkGray3 bg-darkGray1/70 px-4 py-3"
            >
              <p className="text-sm text-gray-400">{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
