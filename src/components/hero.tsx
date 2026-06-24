"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar2Check } from "react-icons/bs";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, riseIn, stagger, EASE_SOFT } from "@/lib/anim";
import Boy from "../../public/dp.webp";

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/sarmad0324", label: "GitHub" },
  { icon: HiOutlineMail, href: "mailto:sarmad@sarmadirfan.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://wa.me/923368486356", label: "WhatsApp" },
  { icon: BsCalendar2Check, href: "https://calendly.com/sarmad-sarmadirfan/30min", label: "Calendly" },
];

const stats = [
  { value: "5+", label: "Years in production" },
  { value: "6+", label: "Products shipped" },
  { value: "3", label: "Continents" },
  { value: "Audit→build", label: "Execution partner" },
];

export default function Hero() {
  const { ref } = useSectionInView("#home", 0.5);

  return (
    <section ref={ref} id="home" className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: content */}
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="space-y-7"
        >
          {/* Availability badge */}
          <motion.div variants={riseIn}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs border border-primary/20">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-400" />
              </span>
              Technical partner for founders
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-bold leading-[1.08] text-textPrimary font-Sora">
              The technical partner founders bring in when the product has to ship.
            </h1>
            <p className="text-base sm:text-lg text-textSecondary leading-relaxed max-w-xl">
              I work with early-stage founders who don&apos;t have a technical co-founder, turning stalled, fragile, or half-built products into something that ships — and scales. Start with a paid Technical Audit; leave with a clear roadmap and someone who can actually execute it.
            </p>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={riseIn} className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                <s.icon className="text-sm" />
              </a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={riseIn} className="flex flex-wrap items-center gap-x-5 gap-y-3 py-1">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-5">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-textPrimary font-Sora">{stat.value}</p>
                  <p className="text-xs text-textMuted mt-0.5">{stat.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={riseIn} className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primaryHover hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-300 ease-out text-sm shadow-lg shadow-primary/20"
            >
              Book a 20-min fit call
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-out text-xs" />
            </a>
            <a
              href="/case-studies/surfbank"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-textSecondary rounded-xl font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 active:scale-[0.98] transition-all duration-300 ease-out text-sm"
            >
              See the SurfBank audit
            </a>
          </motion.div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.25, ease: EASE_SOFT }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* Breathing glow */}
          <motion.div
            className="absolute inset-8 rounded-3xl bg-primary/20 blur-3xl"
            animate={{ opacity: [0.45, 0.8, 0.45], scale: [0.97, 1.03, 0.97] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
          {/* Grid pattern behind photo */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src={Boy}
              alt="Sarmad Irfan — Technical Partner"
              width={440}
              height={480}
              className="relative rounded-2xl object-cover border border-border/60 shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
