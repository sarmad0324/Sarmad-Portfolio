"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { BRAND } from "@/lib/seo";

const offers = [
  {
    step: "01",
    tag: "Product Rescue & Production Hardening",
    headline: "A product that technically works is not the same as a product you can safely grow.",
    body: "I step into stalled, fragile or rapidly built systems, identify the real technical problems and take ownership of stabilizing them.",
    price: "From $4,000",
    term: "Fixed scope",
    points: [
      "Architecture and codebase stabilization",
      "Production issues and technical debt",
      "Backend, mobile, web and infrastructure",
      "Security and reliability hardening",
      "Clear delivery milestones",
    ],
    cta: "Rescue My Product",
  },
  {
    step: "02",
    tag: "AI Systems Integration",
    headline: "Put AI inside the workflows your business already depends on.",
    body: "I build production AI features around your existing systems — connecting models to real data, business rules, documents and operational processes.",
    price: "From $3,000",
    term: "Fixed scope",
    points: [
      "AI workflow automation",
      "Document intelligence and extraction",
      "LLM and agent integrations",
      "Human approval and exception handling",
      "Existing SaaS / API / database integration",
      "Evaluation, monitoring and production rollout",
    ],
    cta: "Explore an AI Integration",
  },
  {
    step: "03",
    tag: "Technical Partner",
    headline: "Senior technical ownership without hiring a full-time technical leader.",
    body: "I work directly with founders to own architecture, delivery, releases and technical decisions while remaining hands-on when implementation matters.",
    price: "From $3,000/month",
    term: "Retainer",
    points: [
      "Product and technical roadmap",
      "Architecture and engineering decisions",
      "Delivery ownership",
      "Production and infrastructure oversight",
      "Developer / vendor coordination",
      "Direct access to me",
    ],
    cta: "Discuss a Partnership",
  },
];

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
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <p className="section-eyebrow">Ways to work together</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Three problems I solve.
          </h2>
        </motion.div>

        <div>
          {offers.map((offer, index) => (
            <motion.article
              key={offer.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, delay: index * 0.06, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 py-14 md:py-20 border-t border-border"
            >
              <div className="lg:col-span-4">
                <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
                  {offer.step}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-textMuted">
                  {offer.tag}
                </p>
                <div className="mt-5 flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl font-bold font-Sora text-textPrimary">{offer.price}</span>
                  <span className="text-sm text-textMuted">· {offer.term}</span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <h3 className="text-2xl md:text-[1.7rem] font-bold text-textPrimary font-Sora leading-[1.2]">
                  {offer.headline}
                </h3>
                <p className="text-sm md:text-base text-textSecondary leading-relaxed">
                  {offer.body}
                </p>
                <ul className="space-y-2.5 pt-1">
                  {offer.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-textSecondary">
                      <FiCheck className="shrink-0 mt-0.5 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3 flex lg:justify-end lg:items-end">
                <Magnetic>
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-textPrimary border-b border-primary pb-1 hover:text-primary transition-colors"
                  >
                    {offer.cta}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                  </a>
                </Magnetic>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Audit as entry point — not the business identity */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-6 md:mt-10 border border-border bg-surface p-8 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="section-eyebrow !mb-0">Not sure where to start?</p>
              <h3 className="text-2xl md:text-3xl font-bold text-textPrimary font-Sora tracking-tight">
                Technical Audit & Roadmap
              </h3>
              <p className="text-textSecondary leading-relaxed max-w-2xl">
                If the problem is unclear, start here. I review the product, architecture and
                delivery situation and give you a written diagnosis, priorities and execution
                roadmap. The audit is an entry point — not the identity of the business.
              </p>
              <p className="text-lg font-Sora font-bold text-textPrimary">
                $1,500 fixed <span className="text-sm font-medium text-textMuted">· 2–3 weeks</span>
              </p>
            </div>
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Magnetic>
                <a
                  href={BRAND.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Book a Technical Audit
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
