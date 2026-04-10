"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar2Check } from "react-icons/bs";
import { useSectionInView } from "@/lib/useInView";
import Boy from "../../public/dp.png";

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/sarmad0324", label: "GitHub" },
  { icon: HiOutlineMail, href: "mailto:sarmad@sarmadirfan.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/923368486356", label: "WhatsApp" },
  { icon: BsCalendar2Check, href: "https://calendly.com/sarmad-sarmadirfan/30min", label: "Calendly" },
];

const stats = [
  { value: "4+", label: "Years in production" },
  { value: "5+", label: "Products shipped" },
  { value: "3", label: "Continents served" },
];

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.5);

  return (
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="space-y-7"
        >
          {/* Availability badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to new projects
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-bold leading-[1.08] text-textPrimary font-Sora">
              I fix broken products and ship what stalled.
            </h1>
            <p className="text-base sm:text-lg text-textSecondary leading-relaxed max-w-lg">
              Technical partner for founders who need real execution — not just a developer. I take ownership of messy, delayed, or stalled products and move them to ship-ready across web, mobile, and backend.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <s.icon className="text-sm" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 py-1">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-bold text-textPrimary font-Sora">{stat.value}</p>
                  <p className="text-xs text-textMuted mt-0.5">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primaryHover transition-all duration-200 text-sm shadow-lg shadow-primary/20"
            >
              Book a Free Call
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-textSecondary rounded-xl font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 transition-all duration-200 text-sm"
            >
              See My Work
            </a>
          </div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Glow */}
          <div className="absolute inset-8 rounded-3xl bg-primary/20 blur-3xl" />
          {/* Grid pattern behind photo */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative">
            <Image
              src={Boy}
              alt="Sarmad Irfan — Technical Partner"
              width={440}
              height={480}
              className="relative rounded-2xl object-cover border border-border/60 shadow-2xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
