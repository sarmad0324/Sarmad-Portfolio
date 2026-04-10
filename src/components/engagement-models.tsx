"use client";

import { motion } from "framer-motion";
import { FiPhone, FiFileText, FiTrendingUp } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";

const steps = [
  {
    number: "01",
    icon: FiPhone,
    title: "Book a Discovery Call",
    description:
      "We do a free 30-minute call. You tell me what's broken, stalled, or needed. I ask the right questions to understand your product and bottleneck.",
  },
  {
    number: "02",
    icon: FiFileText,
    title: "Scoped Proposal",
    description:
      "I come back with a clear scope, recommended approach, and a first sprint plan. No ambiguity — you know exactly what gets built and when.",
  },
  {
    number: "03",
    icon: FiTrendingUp,
    title: "Execute & Own",
    description:
      "I step in, take ownership of delivery, and keep you updated weekly. You have a direct line — no account managers, no delays, just execution.",
  },
];

export default function EngagementModels() {
  const { ref } = useSectionInView("#engagement", 0.4);

  return (
    <section ref={ref} id="engagement" className="px-6 py-16 md:py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            The process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora">
            How it works
          </h2>
          <p className="mt-3 text-base text-textSecondary max-w-xl">
            Three steps from first message to product moving again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 shrink-0">
                  <step.icon className="text-primary text-lg" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>
                <span className="text-4xl font-bold text-border font-Sora select-none">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-textPrimary font-Sora mb-2">{step.title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://calendly.com/sarmad-sarmadirfan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primaryHover transition-all duration-200 text-sm shadow-lg shadow-primary/20"
          >
            Start with a Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
