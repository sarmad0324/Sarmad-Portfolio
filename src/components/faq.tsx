"use client";

import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, viewportOnce } from "@/lib/anim";
import { FAQS } from "@/lib/seo";

export default function Faq() {
  const { ref } = useSectionInView("#faq", 0.3);

  return (
    <section ref={ref} id="faq" className="px-6 md:px-10 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-md"
        >
          <p className="section-eyebrow">FAQ</p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
            Questions founders ask first
          </h2>
          <p className="mt-6 text-base text-textSecondary leading-relaxed">
            Straight answers on how a technical partner or fractional CTO engagement works, what it
            costs, and when it&apos;s the right fit.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-t border-border"
        >
          {FAQS.map((item) => (
            <motion.details key={item.q} variants={riseIn} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-bold text-textPrimary font-Sora tracking-tight">
                  {item.q}
                </h3>
                <FiPlus
                  aria-hidden
                  className="mt-1 shrink-0 text-xl text-primary transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 pr-10 text-sm md:text-base text-textSecondary leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
