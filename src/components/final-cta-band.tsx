"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp, viewportOnce } from "@/lib/anim";
import { Magnetic } from "@/components/ui/motion-bits";
import { BRAND } from "@/lib/seo";

export default function FinalCtaBand() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-[1400px] mx-auto border border-border bg-surface px-8 py-14 md:px-16 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="section-eyebrow">Next step</p>
            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-bold text-textPrimary font-Sora leading-[1.02] tracking-tight max-w-[16ch]">
              If the product is stuck, let&apos;s put an owner on it.
            </h2>
            <p className="mt-6 text-textSecondary text-base md:text-lg leading-relaxed max-w-lg">
              20 minutes to understand what&apos;s blocked, determine whether I can help, and identify
              the right next step. Most serious engagements start with a paid Technical Audit.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Magnetic>
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group !px-8 !py-4 text-base"
              >
                Book a 20-min fit call
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
