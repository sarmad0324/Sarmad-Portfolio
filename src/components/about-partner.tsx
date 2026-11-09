"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import { EASE } from "@/lib/anim";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BRAND } from "@/lib/seo";
import Boy from "../../public/dp.webp";

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
              alt={BRAND.name}
              className="object-cover object-[center_18%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
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
              5+ years building, rescuing and owning production software.
            </h2>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed">
              I&apos;m Sarmad Irfan, a product engineer and technical partner based in Lahore,
              working internationally.
            </p>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mt-4">
              My work has spanned logistics, fintech, SaaS, mobile products and operational
              software across the UAE, US, Europe and other international markets.
            </p>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mt-4">
              I&apos;m strongest where product engineering meets ownership: understanding an
              existing business system, deciding what actually needs to change, implementing it,
              and staying responsible when the software reaches production.
            </p>
            <p className="text-textSecondary text-base md:text-lg leading-relaxed mt-4">
              Increasingly, that also means helping businesses integrate AI into real systems —
              not as isolated chatbots, but as production workflows connected to existing data,
              APIs and business rules.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
              href={BRAND.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-3"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
            <a
              href={BRAND.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-3"
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
