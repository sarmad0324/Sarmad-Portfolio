"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "@/lib/useInView";
import { fadeUp, viewportOnce, EASE } from "@/lib/anim";
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiFileText, FiCalendar } from "react-icons/fi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const contactLinks = [
  {
    icon: BsEnvelope,
    label: "sarmad@sarmadirfan.com",
    href: "mailto:sarmad@sarmadirfan.com",
  },
  {
    icon: BsWhatsapp,
    label: "+92 336 8486356",
    href: "https://wa.me/923368486356",
    external: true,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarmad-irfan-a5126b3b8/",
    external: true,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/sarmad0324",
    external: true,
  },
  {
    icon: FiFileText,
    label: "View Resume",
    href: "https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing",
    external: true,
  },
];

const Contact = () => {
  const { ref } = useSectionInView("#contact");
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [stage, setStage] = useState("");
  const [budget, setBudget] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setStage("");
    setBudget("");
    setRole("");
    setComment("");
  };

  const validateForm = () => {
    if (!name.trim()) return false;
    if (!email || !/\S+@\S+\.\S+/.test(email)) return false;
    if (!company.trim()) return false;
    if (!stage) return false;
    if (!budget) return false;
    if (!role) return false;
    if (!comment.trim()) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    // Enrich the message so qualification lands even if EmailJS template is minimal.
    const detailsField = form.current?.querySelector('textarea[name="comment"]');
    if (detailsField) {
      detailsField.value = [
        comment.trim(),
        "",
        `Company/product: ${company}`,
        `Stage: ${stage}`,
        `Budget: ${budget}`,
        `Considering: ${role}`,
      ].join("\n");
    }

    emailjs
      .sendForm("service_aiipe2d", "template_93eud3q", form.current, "2_HnGR0qPrdrYw7Mp")
      .then(
        () => {
          Swal.fire({
            title: "Sent!",
            text: `Thanks ${name}. I'll review and get back within 24 hours.`,
            icon: "success",
            confirmButtonText: "OK",
            background: "#0F0F0F",
            color: "#F2F2F0",
            confirmButtonColor: "#D6FF4B",
          });
          clearForm();
          setLoading(false);
        },
        () => {
          Swal.fire({
            title: "Error",
            text: "Something went wrong. Please try again or book a fit call directly.",
            icon: "error",
            confirmButtonText: "OK",
            background: "#0F0F0F",
            color: "#F2F2F0",
            confirmButtonColor: "#D6FF4B",
          });
          setLoading(false);
        }
      );
  };

  const inputClass =
    "bg-bg text-textPrimary border border-border py-3 px-4 placeholder:text-textMuted rounded-none outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 text-sm w-full";

  return (
    <section ref={ref} id="contact" className="px-6 md:px-10 py-20 md:py-28 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 max-w-2xl"
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora tracking-tight">
            Tell me what&apos;s blocked
          </h2>
          <p className="mt-4 text-base text-textSecondary leading-relaxed">
            Prefer the fastest path? Book a fit call. Or send details below — I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border border border-border overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={viewportOnce}
            className="lg:col-span-5 bg-surface p-7 md:p-9 flex flex-col"
          >
            <p className="text-sm text-textSecondary leading-relaxed mb-8">
              Primary CTA: a 20-minute fit call. Most serious engagements start with a paid Technical Audit ($1,500).
            </p>

            <div className="space-y-0.5 flex-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3 px-3 -mx-3 text-textSecondary hover:text-primary transition-colors duration-200"
                >
                  <link.icon className="text-base shrink-0" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>

            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 btn-primary w-full"
            >
              <FiCalendar className="text-sm" />
              Book a 20-min fit call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            viewport={viewportOnce}
            className="lg:col-span-7 bg-surface p-7 md:p-9"
          >
            <h4 className="text-textPrimary font-semibold text-base mb-6 font-Sora">
              Or send a qualified brief
            </h4>
            <form onSubmit={handleSubmit} ref={form} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Company / product</span>
                <input
                  type="text"
                  name="company"
                  value={company}
                  required
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Product or company name"
                  className={inputClass}
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Current stage</span>
                  <select
                    name="stage"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">— Select —</option>
                    <option value="Idea">Idea</option>
                    <option value="MVP being built">MVP being built</option>
                    <option value="Live product">Live product</option>
                    <option value="Scaling product">Scaling product</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Approximate budget</span>
                  <select
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="">— Select —</option>
                    <option value="Under $2K">&lt;$2K</option>
                    <option value="$2K–$5K">$2K–$5K</option>
                    <option value="$5K–$10K">$5K–$10K</option>
                    <option value="$10K+">$10K+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Engagement considering</span>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="">— Select —</option>
                  <option value="Technical Audit">Technical Audit — $1,500</option>
                  <option value="Product Sprint">Product Sprint — from $4,000</option>
                  <option value="Technical Partner">Technical Partner — from $3,000/mo</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">What is currently blocked?</span>
                <textarea
                  rows={4}
                  name="comment"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What's stuck, fragile, or unfinished — and what timeline matters?"
                  className={`${inputClass} resize-none`}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {loading ? "Sending..." : "Send brief"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
