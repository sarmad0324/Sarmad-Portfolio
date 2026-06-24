"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { EASE } from "@/lib/anim";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import Boy from "../../public/dp.webp";

const stack = [
  "React Native", "Next.js", "React", "Node.js",
  "PostgreSQL", "Express.js", "MongoDB", "TypeScript",
];

const credentialBadges = [
  { label: "Acting CTO", note: "SurfBank trial" },
  { label: "5+ Years", note: "Production delivery" },
  { label: "Dubai · US · Germany", note: "International founders" },
];

export default function AboutPartner() {
  const { ref } = useSectionInView("#about", 0.45);

  return (
    <section ref={ref} id="about" className="px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: -28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <motion.div
            className="absolute inset-8 bg-primary/15 rounded-3xl blur-3xl"
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.98, 1.04, 0.98] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          />
          <Image
            src={Boy}
            width={520}
            height={560}
            alt="Sarmad Irfan"
            className="relative rounded-2xl border border-border/60 object-cover w-full h-auto shadow-2xl"
          />
          {/* Credential badges */}
          <div className="absolute -bottom-5 left-4 right-4 flex flex-wrap gap-2 justify-center">
            {credentialBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-surface border border-border rounded-xl px-3 py-2 shadow-xl text-center"
              >
                <p className="text-xs font-bold text-textPrimary font-Sora">{badge.label}</p>
                <p className="text-[10px] text-textMuted">{badge.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6 mt-8 lg:mt-0"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary font-Sora mb-4 tracking-tight">
              More than a developer — the technical leader your build doesn&apos;t have yet.
            </h2>
            <p className="text-textSecondary text-base leading-relaxed">
              I work with early-stage founders as a technical partner and fractional CTO — especially the ones without a technical co-founder. My job isn&apos;t to take tickets. It&apos;s to own the decisions that actually move a product: what to build, what to fix first, how to architect it so it scales, and how to ship it without stalling.
            </p>
            <p className="text-textSecondary text-base leading-relaxed mt-3">
              I lead with judgment, not just tools. I&apos;ve shipped products across logistics, fintech, recovery platforms, and digital commerce, and run a CTO-level audit and Release 2.0 strategy for a multi-platform product (<span className="text-textPrimary font-semibold">SurfBank</span>). Previously worked with international teams including <span className="text-textPrimary font-semibold">Geeks for Growth</span>.
            </p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-surface2 border border-border text-textSecondary text-xs font-medium hover:border-primary/30 hover:text-textPrimary hover:-translate-y-0.5 transition-all duration-300 ease-out"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-textSecondary text-sm font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-out"
            >
              <HiOutlineDocumentText className="text-base" />
              Resume
              <FiExternalLink className="text-xs" />
            </a>
            <a
              href="https://github.com/sarmad0324"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-textSecondary text-sm font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-out"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-textSecondary text-sm font-semibold hover:border-primary/30 hover:text-textPrimary hover:bg-primary/5 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-out"
            >
              <FaLinkedinIn className="text-base" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
