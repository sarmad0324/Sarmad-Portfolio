"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";
import { Magnetic } from "@/components/ui/motion-bits";

const offers = [
  {
    step: "01",
    tag: "Technical Audit",
    headline: "A written diagnosis of what's blocking shipment — and the exact plan to fix it.",
    price: "$2,000",
    term: "fixed · 2–3 weeks",
    result: "You leave with a prioritized roadmap you own.",
    points: [
      "Product, architecture, codebase, and delivery review",
      "Clear call on what to fix first — and what to ignore",
      "AI / automation opportunities that actually move the needle",
      "Decision-ready plan — continue with me or take it in-house",
    ],
    cta: "Start with an Audit",
    entry: true,
  },
  {
    step: "02",
    tag: "Build & Stabilize Sprint",
    headline: "Scoped ownership. Weekly delivery. Product that ships.",
    price: "From $6,000",
    term: "fixed scope",
    result: "Fragile or unfinished work becomes production-ready.",
    points: [
      "Stabilize a broken product — or build v1 properly",
      "Full-stack execution: web, mobile, backend, integrations",
      "Time-boxed with weekly demos you can show investors",
      "Engineered to scale, not just to demo",
    ],
    cta: "Scope a Sprint",
    entry: false,
  },
  {
    step: "03",
    tag: "Technical Partner / Fractional CTO",
    headline: "Senior technical leadership embedded in your company — without a full-time hire.",
    price: "From $4,500",
    term: "/ month · retainer",
    result: "I own delivery, architecture, and technical decisions.",
    points: [
      "Embedded monthly — not tickets, not agencies",
      "Roadmap, architecture, delivery, and hiring support",
      "Direct line to me. No account managers.",
      "The CTO-level ownership early teams usually can't afford yet",
    ],
    cta: "Discuss a retainer",
    entry: false,
  },
];

function OfferRow({
  offer,
  index,
}: {
  offer: (typeof offers)[number];
  index: number;
}) {
  const rowRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const numY = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const numOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.12, 0.28, 0.28, 0.08]);

  return (
    <motion.article
      ref={rowRef}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-14 md:py-20 border-t border-border ${
        offer.entry ? "bg-primary/[0.03] -mx-6 md:-mx-10 px-6 md:px-10" : ""
      }`}
    >
      <motion.span
        style={{ y: numY, opacity: numOpacity }}
        className="pointer-events-none absolute -top-2 right-4 md:right-10 font-Sora text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-textPrimary select-none"
      >
        {offer.step}
      </motion.span>

      <div className="lg:col-span-4 relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
            {offer.step}
          </span>
          {offer.entry && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-[color:var(--accent-ink)] px-2 py-1">
              Recommended start
            </span>
          )}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-textMuted mb-4">
          {offer.tag}
        </p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-3xl md:text-4xl font-bold font-Sora text-textPrimary">
            {offer.price}
          </span>
          <span className="text-sm text-textMuted">{offer.term}</span>
        </div>
        <p className="text-sm text-primary font-medium leading-snug max-w-xs">
          {offer.result}
        </p>
      </div>

      <div className="lg:col-span-5 relative z-10 space-y-6">
        <h3 className="text-2xl md:text-[1.75rem] font-bold text-textPrimary font-Sora leading-[1.2]">
          {offer.headline}
        </h3>
        <ul className="space-y-3">
          {offer.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-textSecondary leading-relaxed">
              <FiCheck className="shrink-0 mt-0.5 text-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-3 relative z-10 flex lg:justify-end lg:items-end">
        <Magnetic>
          <a
            href="https://calendly.com/sarmad-sarmadirfan/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 text-sm font-semibold ${
              offer.entry
                ? "btn-primary !px-5 !py-3"
                : "text-textPrimary border-b border-primary pb-1 hover:text-primary transition-colors"
            }`}
          >
            {offer.cta}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
          </a>
        </Magnetic>
      </div>
    </motion.article>
  );
}

export default function Offers() {
  const { ref } = useSectionInView("#offers", 0.25);

  return (
    <section ref={ref} id="offers" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-6 md:mb-10 max-w-3xl"
        >
          <p className="section-eyebrow">Engagements</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Clear offers. Clear outcomes.
            <span className="block text-textMuted">No vague retainers.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-textSecondary leading-relaxed max-w-xl">
            Most founders start with a paid Audit. From there we sprint — or I stay on as
            your technical partner.
          </p>
        </motion.div>

        <div>
          {offers.map((offer, index) => (
            <OfferRow key={offer.tag} offer={offer} index={index} />
          ))}
        </div>

        <p className="mt-10 text-xs text-textMuted max-w-lg">
          Scope and investment are confirmed after the strategy call. Pricing above is the starting point —
          complexity and speed can move it.
        </p>
      </div>
    </section>
  );
}
