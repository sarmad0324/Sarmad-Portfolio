"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { useSectionInView } from "@/lib/useInView";
import Boy from "../../public/dp.png";

export default function AboutPartner() {
  const { ref } = useSectionInView("#about", 0.45);

  const points = [
    "Hands-on across web, mobile, backend, integrations, and AI-enabled workflows.",
    "Strong in turning product ideas, bottlenecks, and messy requirements into shippable systems.",
    "Delivery experience across logistics, fintech, recovery platforms, and digital commerce.",
    "Able to support both implementation and execution decisions, from technical feasibility to shipping priorities.",
    "Can extend delivery capacity through SyntaxLeap when project scope grows.",
  ];

  return (
    <section ref={ref} id="about" className="px-6 py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Image
            src={Boy}
            width={560}
            height={560}
            alt="Sarmad Irfan"
            className="rounded-2xl border border-border object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary">
            About Sarmad Irfan
          </h2>
          <p className="text-base text-textSecondary leading-relaxed">
            I work with founders and lean teams as a product engineer and technical partner focused on real execution, not just extra coding capacity.
          </p>
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-textSecondary leading-relaxed text-sm">
                <span className="shrink-0 w-6 h-6 rounded-md bg-primarySoft border border-border flex items-center justify-center">
                  <FiCheck className="text-primary text-xs" strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200"
            >
              View Resume
            </a>
            <a
              href="https://github.com/sarmad0324"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primarySoft transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
