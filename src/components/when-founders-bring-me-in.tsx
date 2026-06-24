"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, viewportOnce, EASE } from "@/lib/anim";
import { FiAlertTriangle, FiClock, FiCode, FiUser, FiLayers, FiZap, FiTrendingUp } from "react-icons/fi";

const painPoints = [
  {
    icon: FiTrendingUp,
    text: "You've raised, but you have no technical leader owning the build.",
  },
  {
    icon: FiUser,
    text: "No one owns the technical decisions — the build has no leader.",
  },
  {
    icon: FiZap,
    text: "Your MVP is half-built or stalled — you've hired, but nothing ships.",
  },
  {
    icon: FiAlertTriangle,
    text: "Your product keeps breaking in production — and no one owns the fix.",
  },
  {
    icon: FiClock,
    text: "Delivery keeps slipping — deadlines pass, scope never locks.",
  },
  {
    icon: FiCode,
    text: "The codebase is fragile — every change breaks something else.",
  },
  {
    icon: FiLayers,
    text: "Frontend, backend, and integrations don't add up to one system.",
  },
];

export default function WhenFoundersBringMeIn() {
  const { ref } = useSectionInView("#when-founders", 0.45);

  return (
    <section ref={ref} id="when-founders" className="px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora">
            When founders bring me in
          </h2>
          <p className="mt-3 text-base text-textSecondary max-w-xl">
            These are the exact moments founders bring me in — to take ownership and move the product forward.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.text}
              variants={riseIn}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: EASE } }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-surface px-5 py-5 hover:border-primary/30 hover:bg-primary/[0.04] hover:shadow-lg hover:shadow-black/20 transition-colors duration-300 ease-out"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 ease-out">
                <point.icon className="text-primary text-sm" />
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
