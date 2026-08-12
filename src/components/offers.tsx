"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { BRAND } from "@/lib/seo";

const offers = [
  {
    step: "01",
    tag: "Technical Audit & Roadmap",
    headline: "A written diagnosis of what's blocking shipment — and the exact plan to fix it.",
    price: "$1,500",
    term: "fixed · 2–3 weeks",
    result: "You leave with a decision-ready plan you own.",
    deliverablesLabel: "You leave with",
    points: [
      "Technical Risk Map",
      "Architecture Assessment",
      "Product / Delivery Bottleneck Analysis",
      "Prioritized 30 / 60 / 90-Day Roadmap",
      "Executive Findings Document",
      "60-minute Findings Call",
    ],
    paths: null as null | { title: string; text: string }[],
    note: null as string | null,
    cta: "Discuss your product",
    entry: true,
  },
  {
    step: "02",
    tag: "Product Sprint",
    headline: "Scoped ownership. Weekly delivery. Product that moves.",
    price: "From $4,000",
    term: "fixed scope · typically 3–6 weeks",
    result: "Critical flows ship — or a focused v1 lands.",
    deliverablesLabel: "What I take on",
    points: [
      "Time-boxed execution with weekly demos",
      "Full-stack: web, mobile, backend, integrations",
      "Built for production, not just a demo",
      "Clear scope locked before work starts",
    ],
    paths: [
      {
        title: "Stalled product?",
        text: "I stabilize critical flows, architecture, and delivery.",
      },
      {
        title: "Need v1?",
        text: "I scope and ship a focused first release.",
      },
    ],
    note: null,
    cta: "Discuss your product",
    entry: false,
  },
  {
    step: "03",
    tag: "Technical Partner",
    headline: "Ongoing technical ownership — without a full-time hire.",
    price: "From $3,000",
    term: "/ month · retainer",
    result: "You get a senior technical owner on a defined capacity.",
    deliverablesLabel: "Includes",
    points: [
      "Weekly technical leadership",
      "Roadmap ownership",
      "Architecture oversight",
      "Delivery coordination",
      "Limited hands-on implementation within retainer capacity",
    ],
    paths: null,
    note: "Fractional CTO engagements available when the product needs broader leadership (hiring, governance, executive cadence). Scope and capacity are confirmed on the fit call — this is not unlimited access.",
    cta: "Discuss your product",
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
              Start here
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

        {offer.paths && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {offer.paths.map((path) => (
              <div key={path.title} className="border border-border p-4 bg-bg/50">
                <p className="text-sm font-Sora font-bold text-textPrimary mb-1">{path.title}</p>
                <p className="text-xs text-textSecondary leading-relaxed">{path.text}</p>
              </div>
            ))}
          </div>
        )}

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-textMuted mb-3">
            {offer.deliverablesLabel}
          </p>
          <ul className="space-y-2.5">
            {offer.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-textSecondary leading-relaxed">
                <FiCheck className="shrink-0 mt-0.5 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {offer.note && (
          <p className="text-xs text-textMuted leading-relaxed border-l border-border pl-3">
            {offer.note}
          </p>
        )}
      </div>

      <div className="lg:col-span-3 relative z-10 flex lg:justify-end lg:items-end">
        <Magnetic>
          <a
            href={BRAND.calendly}
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
          <p className="section-eyebrow">How we work</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Audit → Stabilize / Build → Ongoing ownership
          </h2>
          <p className="mt-6 text-base md:text-lg text-textSecondary leading-relaxed max-w-xl">
            One commercial system. Three ways to engage. The fit call determines which offer
            matches your product — you don&apos;t have to decide alone.
          </p>
        </motion.div>

        <div>
          {offers.map((offer, index) => (
            <OfferRow key={offer.tag} offer={offer} index={index} />
          ))}
        </div>

        <p className="mt-10 text-xs text-textMuted max-w-lg">
          Public starting prices. Final scope confirmed after the fit call. Implementation and
          retainers use &ldquo;from&rdquo; pricing based on complexity and capacity.
        </p>
      </div>
    </section>
  );
}
