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
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-28 pb-12 md:pb-14">
      <div className="rounded-2xl border border-darkGray3 bg-darkGray1/70 p-8 md:p-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary font-semibold text-xs sm:text-sm">
            Startup Technical Partner
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white max-w-4xl">
            Build, fix, and scale product systems without wasting cycles.
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            I help founders and lean teams execute across React, React Native, Next.js, Node.js, and PostgreSQL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Discuss Your Product
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
        {trustSignals.map((signal) => (
          <div key={signal} className="rounded-xl border border-darkGray3 bg-darkGray1/60 p-4">
            <p className="text-sm text-gray-300">{signal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
