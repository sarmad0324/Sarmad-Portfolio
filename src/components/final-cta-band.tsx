"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function FinalCtaBand() {
  return (
    <section className="px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/[0.12] via-surface to-surface p-10 md:p-14 text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Ready to move?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora leading-tight mb-4">
              Got a product that&apos;s stuck?
              <br />
              <span className="text-primary">Let&apos;s fix it.</span>
            </h2>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Book a free 30-minute call. No pitch, no pressure — just a direct conversation about what&apos;s blocked and what needs to move.
            </p>
            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primaryHover transition-all duration-200 text-sm shadow-xl shadow-primary/25"
            >
              Book a Free Call
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
