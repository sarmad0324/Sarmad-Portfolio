"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.5);

  const trustSignals = [
    "4+ years shipping production software across 5+ product categories",
    "International clients across Dubai, Nigeria, US — logistics, fintech, recovery, commerce",
    "Direct ownership: requirement analysis, feasibility, strategy, implementation",
  ];

  return (
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-28 pb-10 md:pb-12">
      <div className="rounded-2xl border border-border bg-surface p-6 md:p-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5 max-w-xl mx-auto">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primarySoft text-primary font-semibold text-xs sm:text-sm border border-primary/20">
            Sarmad Irfan — Product Engineer & Technical Partner
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-textPrimary">
            I step in when product execution is slow, messy, or blocked.
          </h1>
          <p className="text-base sm:text-lg text-textSecondary leading-relaxed">
            I work with founders and lean teams to build, fix, and scale products across web, mobile, backend, and AI — hands-on delivery, clearer direction, less wasted momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200">
              Discuss Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://calendly.com/sarmad-sarmadirfan/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200">
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        {trustSignals.map((signal) => (
          <div key={signal} className="rounded-xl border border-border bg-surface px-5 py-5 shadow-sm hover:border-primary/20 transition-colors duration-200">
            <p className="text-sm text-textSecondary leading-relaxed">{signal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
