"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";

const moments = [
  {
    title: "No technical owner",
    text: "You've raised — but nobody owns architecture, delivery, or the hard calls.",
  },
  {
    title: "Stuck mid-build",
    text: "The MVP is half-built. People are hired. Still nothing ships.",
  },
  {
    title: "Production keeps breaking",
    text: "Incidents pile up and the fix has no single owner.",
  },
  {
    title: "Delivery never locks",
    text: "Deadlines slip because scope never settles and leadership is thin.",
  },
  {
    title: "Fragile foundations",
    text: "Every change breaks something else. Velocity is fake.",
  },
];

export default function WhenFoundersBringMeIn() {
  const { ref } = useSectionInView("#when-founders", 0.35);

  return (
    <section ref={ref} id="when-founders" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="section-eyebrow">Who this is for</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-textPrimary font-Sora tracking-tight leading-[1.05]">
              Founders bring me in when the product is at risk.
            </h2>
            <p className="mt-5 text-textSecondary leading-relaxed max-w-sm">
              If one of these is true, a strategy call is worth 20 minutes.
            </p>
          </motion.div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {moments.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                className="group relative border-t border-border py-7 last:border-b"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: EASE }}
                  className="absolute left-0 top-0 h-px origin-left bg-primary w-12"
                />
                <div className="flex gap-6 md:gap-10">
                  <span className="font-Sora text-sm font-bold text-primary tabular-nums pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xl md:text-2xl text-textPrimary font-Sora font-semibold leading-snug tracking-tight group-hover:translate-x-1 transition-transform duration-500 ease-out">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm md:text-base text-textSecondary leading-relaxed max-w-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
