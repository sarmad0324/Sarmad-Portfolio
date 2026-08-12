"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { EASE, EASE_SOFT } from "@/lib/anim";
import { Magnetic, RevealWords } from "@/components/ui/motion-bits";
import Boy from "../../public/dp.webp";

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.4);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-12 md:pb-16"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-primary" />
                </span>
                Open for 2 new engagements
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-textMuted">
                Fractional CTO · Technical Partner
              </span>
            </motion.div>

            <p className="font-Sora text-xl sm:text-2xl font-bold text-textPrimary tracking-tight mb-5">
              Sarmad Irfan
            </p>

            <h1 className="font-Sora font-bold text-textPrimary text-[clamp(2.35rem,5.4vw,4.85rem)] leading-[1.02] tracking-[-0.04em] max-w-[15ch]">
              <RevealWords text="I own the technical side so founders can ship." />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE_SOFT }}
              className="mt-8 md:mt-10 space-y-8 max-w-xl"
            >
              <p className="text-base md:text-lg text-textSecondary leading-relaxed">
                Early-stage founders without a technical co-founder bring me in to diagnose
                what&apos;s stuck, set the roadmap, and execute — until the product is shipping
                with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Magnetic>
                  <a
                    href="https://calendly.com/sarmad-sarmadirfan/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    Book a strategy call
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href="#offers" className="btn-ghost">
                    View engagements
                  </a>
                </Magnetic>
              </div>

              <p className="text-xs text-textMuted leading-relaxed">
                20 minutes. No pitch deck. Leave knowing whether an Audit, Sprint, or Partner
                retainer is the right next move.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.05, delay: 0.35, ease: EASE }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative aspect-[4/5] max-w-[320px] lg:max-w-none mx-auto lg:ml-auto overflow-hidden border border-border bg-surface">
              <Image
                src={Boy}
                alt="Sarmad Irfan — Technical Partner"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 320px, 400px"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg via-bg/80 to-transparent">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-1">
                  Flagship engagement
                </p>
                <p className="text-sm font-Sora font-bold text-textPrimary">
                  Acting CTO · SurfBank
                </p>
                <p className="text-xs text-textMuted mt-1">
                  30-day trial · Release 2.0 roadmap delivered
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-border"
        >
          {[
            { value: "6+", label: "Products shipped" },
            { value: "3", label: "Continents" },
            { value: "$2k", label: "Audit entry point" },
            { value: "24h", label: "Typical reply time" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-Sora text-2xl md:text-3xl font-bold text-textPrimary tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-textMuted mt-1.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
