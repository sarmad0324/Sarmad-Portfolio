"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { EASE } from "@/lib/anim";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import Boy from "../../public/dp.webp";

const credentials = [
  { label: "Acting CTO trial", detail: "SurfBank · 30 days" },
  { label: "5+ years", detail: "Production delivery" },
  { label: "International", detail: "Dubai · US · Germany" },
];

export default function AboutPartner() {
  const { ref } = useSectionInView("#about", 0.45);

  return (
    <section ref={ref} id="about" className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src={Boy}
              fill
              alt="Sarmad Irfan"
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="border-t border-border pt-3">
                <dt className="text-sm font-Sora font-bold text-textPrimary">{c.label}</dt>
                <dd className="text-xs text-textMuted mt-1">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7 space-y-8 lg:pt-2"
        >
          <div>
            <p className="section-eyebrow">About</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-textPrimary font-Sora mb-5 tracking-tight leading-[1.05]">
              Operator first.
              <span className="block text-textMuted">Developer second.</span>
            </h2>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed">
              I work with founders as a technical partner and fractional CTO — especially teams
              without a technical co-founder. My job is not to burn tickets. It&apos;s to own the
              decisions that move the product: what to build, what to cut, how to architect it,
              and how to ship without stalling.
            </p>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mt-4">
              I&apos;ve shipped across logistics, fintech, recovery, and commerce. I ran a CTO-level
              audit and Release 2.0 strategy for{" "}
              <span className="text-textPrimary font-semibold">SurfBank</span>, and worked with
              international teams including{" "}
              <span className="text-textPrimary font-semibold">Geeks for Growth</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-3"
            >
              Book a strategy call
            </a>
            <a
              href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-3"
            >
              <HiOutlineDocumentText className="text-base" />
              Resume
              <FiExternalLink className="text-xs" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-3"
            >
              <FaLinkedinIn className="text-base" />
              LinkedIn
            </a>
            <a
              href="https://github.com/sarmad0324"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-3"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
