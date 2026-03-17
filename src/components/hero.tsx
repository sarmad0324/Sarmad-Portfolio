"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useSectionInView } from "@/lib/useInView";

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.5);

  const trustSignals = [
    "4+ years shipping production software",
    "Execution across logistics, fintech, and service products",
    "Trusted by startup teams in international markets",
  ];

  return (
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-28 pb-10 md:pb-12">
      <div className="rounded-2xl border border-border bg-surface p-6 md:p-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-4 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primarySoft text-primary font-semibold text-xs sm:text-sm border border-primary/20">
            Sarmad Irfan | Product Engineer & Technical Partner
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-textPrimary max-w-2xl mx-auto">
            I help startups build, fix, and scale digital products.
          </h1>
          <p className="text-base sm:text-lg text-textSecondary max-w-xl mx-auto leading-relaxed">
            Hands-on product execution across web, mobile, backend, and AI-powered workflows for founders and lean teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all duration-200">
              Discuss Your Product
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200">
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
        {trustSignals.map((signal) => (
          <div key={signal} className="rounded-xl border border-border bg-surface2 p-4">
            <p className="text-sm text-textSecondary">{signal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
