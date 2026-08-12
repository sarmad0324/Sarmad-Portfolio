"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, viewportOnce, EASE } from "@/lib/anim";

const testimonials = [
  {
    quote:
      "Sarmad took real ownership on critical wallet flows. Clear communication, pressure-ready quality — exactly what a trust-sensitive product needs.",
    name: "Abdul Samad Umer",
    role: "CEO, Triangle Wallets",
    outcome: "Core fintech flows shipped to production",
  },
  {
    quote:
      "He worked across mobile and backend without constant direction. Problems got solved fast. Delivery kept moving.",
    name: "Fasseh",
    role: "Product Engineering, TruckWise",
    outcome: "Blocked multi-role product → ship-ready system",
  },
  {
    quote:
      "He translated product goals into a usable platform. Booking and journey improvements made a clear difference for the team.",
    name: "Chris",
    role: "Founder, EZRecova",
    outcome: "Subscriptions + AI support unified into one product",
  },
];

export default function ProofSection() {
  const { ref } = useSectionInView("#reviews", 0.35);

  return (
    <section ref={ref} id="reviews" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Client proof</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
              Founders don&apos;t hire me for slides.
              <span className="block text-textMuted">They hire me for movement.</span>
            </h2>
          </div>
          <p className="text-sm text-textSecondary max-w-xs md:text-right leading-relaxed">
            Outcome-linked feedback from teams I&apos;ve stepped into.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={`${item.name}-${item.role}`}
              variants={riseIn}
              whileHover={{ x: 3, transition: { duration: 0.25, ease: EASE } }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-border last:border-b"
            >
              <div className="md:col-span-1">
                <span className="font-Sora text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg sm:text-xl md:text-2xl text-textPrimary leading-snug font-Sora font-medium tracking-tight">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <footer className="md:col-span-4 md:text-right space-y-3 flex flex-col md:items-end justify-center">
                <div>
                  <p className="font-bold text-textPrimary text-sm">{item.name}</p>
                  <p className="text-xs text-textMuted mt-1">{item.role}</p>
                </div>
                <p className="inline-flex text-[11px] font-semibold uppercase tracking-wider text-[color:var(--accent-ink)] bg-primary px-2.5 py-1">
                  {item.outcome}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
