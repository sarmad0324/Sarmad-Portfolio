"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { EASE, EASE_SOFT } from "@/lib/anim";
import { Magnetic, RevealWords } from "@/components/ui/motion-bits";
import { BRAND } from "@/lib/seo";
import Boy from "../../public/dp.webp";

const proofStrip = [
  { value: "5+ Years", label: "Production engineering" },
  { value: "2+ Years", label: "Continuous product ownership" },
  { value: "6+ Products", label: "Shipped internationally" },
  { value: "3 Continents", label: "International clients" },
];

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
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary mb-6"
            >
              Technical Partner · AI Systems Integration · Product Rescue
            </motion.p>

            <p className="font-Sora text-xl sm:text-2xl font-bold text-textPrimary tracking-tight mb-5">
              {BRAND.name}
            </p>

            <h1 className="font-Sora font-bold text-textPrimary text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] tracking-[-0.04em] max-w-[16ch]">
              <RevealWords text="I take ownership of products that need to ship, scale, or get smarter with AI." />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE_SOFT }}
              className="mt-8 md:mt-10 space-y-5 max-w-xl"
            >
              <p className="text-base md:text-lg text-textSecondary leading-relaxed">
                5+ years building and owning production software across logistics, fintech, SaaS,
                mobile, and operational systems.
              </p>
              <p className="text-base md:text-lg text-textSecondary leading-relaxed">
                I help founders and software-driven businesses rescue fragile products, integrate
                AI into real workflows, and own technical execution from architecture through
                production.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Magnetic>
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    Book a 20-min fit call
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href="#projects" className="btn-ghost">
                    View case studies
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.05, delay: 0.35, ease: EASE }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative aspect-[3/4] w-full max-w-[420px] lg:max-w-none mx-auto lg:ml-auto overflow-hidden border border-border bg-surface">
              <Image
                src={Boy}
                alt={`${BRAND.name}, technical partner for AI systems integration and product rescue`}
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 420px, 520px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-border"
        >
          {proofStrip.map((stat) => (
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
