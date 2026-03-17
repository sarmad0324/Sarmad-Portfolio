"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import Boy from "../../public/dp.png";

export default function AboutPartner() {
  const { ref } = useSectionInView("#about", 0.45);

  const points = [
    "Product-focused execution across web, mobile, backend, and integrations.",
    "International delivery experience across logistics, fintech, and service products.",
    "Hands-on coding + technical decision support for founders and lean teams.",
    "Can expand capacity with my small team at SyntaxLeap when scope grows.",
  ];

  return (
    <section ref={ref} id="about" className="px-6 py-16 md:py-20 bg-darkBlack">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Image
            src={Boy}
            width={560}
            height={560}
            alt="Sarmad Irfan"
            className="rounded-2xl border border-darkGray3 object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About <span className="text-primary">Sarmad Irfan</span>
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I work as a startup technical partner for founders and lean teams that need strong execution, not just extra coding capacity.
          </p>
          <div className="space-y-2">
            {points.map((point) => (
              <p key={point} className="text-gray-300 leading-relaxed text-sm">
                - {point}
              </p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://drive.google.com/file/d/12sBGdNtcSZqLIlianFkNjwE3FBS-TY5m/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Discuss Your Product
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
