"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";
import { EASE, EASE_SOFT } from "@/lib/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { BRAND } from "@/lib/seo";

const proofStrip = [
  { value: "5+ Years", label: "Production engineering" },
  { value: "2+ Years", label: "Product ownership" },
  { value: "6+ Products", label: "Shipped internationally" },
  { value: "3 Continents", label: "Client markets" },
];

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.4);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-10 md:pt-28 md:pb-12"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* ~58–62% copy */}
          <div className="lg:col-span-7 order-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.14em] text-primary/80"
            >
              Technical Partner · AI Systems Integration · Product Rescue
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04, ease: EASE }}
              className="mt-5 md:mt-6 font-Sora text-lg sm:text-xl font-semibold text-textPrimary tracking-tight"
            >
              {BRAND.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
              className="mt-4 md:mt-5 font-Sora font-bold text-textPrimary text-[clamp(1.85rem,3.6vw,4.25rem)] leading-[1.02] tracking-[-0.035em] max-w-[20ch] md:max-w-[820px]"
            >
              I take ownership of products that need to ship, scale, or get smarter with AI.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: EASE_SOFT }}
              className="mt-7 md:mt-8 space-y-3 max-w-[36rem]"
            >
              <p className="text-[17px] md:text-[18px] lg:text-[19px] text-textSecondary leading-[1.55]">
                5+ years building and owning production software across logistics, fintech, SaaS,
                mobile, and operational systems.
              </p>
              <p className="text-[17px] md:text-[18px] lg:text-[19px] text-textMuted leading-[1.55] max-w-[32rem]">
                I help founders and software-driven businesses rescue products, integrate AI into
                real workflows, and own technical execution through production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34, ease: EASE_SOFT }}
              className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-2.5"
            >
              <Magnetic>
                <a
                  href={BRAND.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group !px-5 !py-3 !text-[13px]"
                >
                  Book a 20-min fit call
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-[10px]" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#projects" className="btn-ghost !px-5 !py-3 !text-[13px]">
                  View case studies
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* ~38–42% portrait — supporting, not competing */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.14, ease: EASE }}
            className="lg:col-span-5 order-2 flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px] xl:max-w-[280px] overflow-hidden border border-white/[0.08]">
              <Image
                src="/portrait-suit.jpg"
                alt={`${BRAND.name}, technical partner for AI systems integration and product rescue`}
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 240px, 280px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 pt-6 border-t border-border"
        >
          {proofStrip.map((stat) => (
            <div key={stat.label}>
              <p className="font-Sora text-lg md:text-xl font-bold text-textPrimary tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] text-textMuted mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
