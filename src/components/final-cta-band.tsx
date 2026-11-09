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
        <div className="max-w-3xl">
          <p className="section-eyebrow">Next step</p>
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-bold text-textPrimary font-Sora leading-[1.05] tracking-tight max-w-[14ch]">
            Need stronger technical ownership?
          </h2>
          <p className="mt-6 text-textSecondary text-base md:text-lg leading-relaxed max-w-xl">
            Whether your product needs to be rescued, extended with AI, or owned properly going
            forward, start with a direct conversation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Magnetic>
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group w-full sm:w-auto min-w-[220px]"
              >
                Book a 20-min fit call
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
            <a
              href={`mailto:${BRAND.email}`}
              className="btn-ghost w-full sm:w-auto min-w-[220px]"
            >
              Email Sarmad
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
