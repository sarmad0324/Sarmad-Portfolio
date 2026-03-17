"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import Boy from "../../public/dp.png";

export default function AboutPartner() {
  const { ref } = useSectionInView("#about", 0.45);

  const points = [
    "I am product-focused first: I care about what ships, what breaks, and what drives progress.",
    "I have delivered production work for international clients across logistics, fintech, service platforms, and operations-heavy products.",
    "I work hands-on in the codebase and stay close to product decisions so delivery and business priorities stay aligned.",
    "When scope expands, I can collaborate with my small team at SyntaxLeap to increase execution capacity without losing quality.",
  ];

  return (
    <section ref={ref} id="about" className="px-6 py-20 md:py-28 bg-white dark:bg-darkGray1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-2xl"></div>
            <Image
              src={Boy}
              width={560}
              height={560}
              alt="Sarmad Irfan"
              className="relative rounded-2xl border border-borderGray dark:border-darkGray3 object-cover w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textDark dark:text-white">
            About <span className="text-primary">Sarmad Irfan</span>
          </h2>
          <p className="text-lg text-textDark/80 dark:text-gray-300 leading-relaxed">
            I am a senior full-stack engineer transitioning into a consultant-level technical partner role for founders
            and lean teams. My focus is execution: making sure products launch, stabilize, and improve without
            unnecessary complexity.
          </p>
          <div className="space-y-3">
            {points.map((point) => (
              <p key={point} className="text-textDark/75 dark:text-gray-300 leading-relaxed">
                - {point}
              </p>
            ))}
          </div>
          <p className="text-textDark/70 dark:text-gray-400 leading-relaxed">
            If you need someone who can move between product context and technical implementation quickly, we should
            talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
