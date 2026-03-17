"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroProfile from "../../public/hero-profile-2.jpeg";
import { useSectionInView } from "@/lib/useInView";

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.5);

  const trustSignals = [
    "4+ years in production engineering",
    "Delivery for teams in Dubai, Nigeria, US, and international markets",
    "Production systems across logistics, fintech, and web platforms",
    "Hands-on execution across mobile, web, backend, and integrations",
  ];

  return (
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-14 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Startup Technical Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-textDark dark:text-white">
            Technical partner for founders who need products shipped, fixed, and scaled.
          </h1>

          <p className="text-lg sm:text-xl text-textDark/80 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I help lean teams execute real product work without months of engineering drift. From MVP launch to
            stabilization, I deliver hands-on across React, React Native, Next.js, Node.js, and PostgreSQL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discuss Your Product
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-darkGray1 text-primary border-2 border-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
            >
              View Selected Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-darkGray1">
              <Image
                src={HeroProfile}
                fill
                alt="Sarmad Irfan - startup technical partner"
                priority
                className="object-cover scale-80 md:scale-100"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-borderGray dark:border-darkGray2">
        {trustSignals.map((signal) => (
          <div
            key={signal}
            className="rounded-xl border border-borderGray dark:border-darkGray3 bg-white/80 dark:bg-darkGray2 p-4"
          >
            <p className="text-sm text-textDark/70 dark:text-gray-400">{signal}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
