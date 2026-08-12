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
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    setName("");
    setComment("");
    setEmail("");
    setRole("");
  };

  const validateForm = () => {
    if (!name.trim()) return false;
    if (!email || !/\S+@\S+\.\S+/.test(email)) return false;
    if (!comment.trim()) return false;
    if (!role) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    emailjs
      .sendForm("service_aiipe2d", "template_93eud3q", form.current, "2_HnGR0qPrdrYw7Mp")
      .then(
        () => {
          Swal.fire({
            title: "Sent!",
            text: `Thanks ${name}. I'll review your details and get back to you shortly.`,
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
            text: "Something went wrong. Please try again or reach out directly.",
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
    "bg-bg text-textPrimary border border-border py-3 px-4 placeholder:text-textMuted rounded-lg outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 text-sm w-full";

  return (
    <section ref={ref} id="contact" className="px-6 py-20 md:py-28 border-t border-border/70">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 max-w-2xl"
        >
          <p className="section-eyebrow">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textPrimary font-Sora tracking-tight">
            Let&apos;s put an owner on the product
          </h2>
          <p className="mt-4 text-base text-textSecondary leading-relaxed">
            Tell me what&apos;s stuck. I usually reply within 24 hours — or book a strategy call now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border border border-border overflow-hidden rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            viewport={viewportOnce}
            className="lg:col-span-5 bg-surface p-7 md:p-9 flex flex-col"
          >
            <p className="text-sm text-textSecondary leading-relaxed mb-8">
              Prefer a call? Book directly. Serious engagements usually start with a paid Technical Audit ($2,000).
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
              Book a strategy call
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
              Or send a message
            </h4>
            <form onSubmit={handleSubmit} ref={form} className="space-y-4">
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
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">What do you need?</span>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="">— Select an option —</option>
                  <option value="Technical Audit">Technical Audit — $2,000 diagnosis & roadmap</option>
                  <option value="Build & Stabilize">Build &amp; Stabilize Sprint — from $6,000</option>
                  <option value="Technical Partner">Technical Partner — from $4,500/mo</option>
                  <option value="Not sure yet">Not sure — need a strategy call</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wide">Project details</span>
                <textarea
                  rows={4}
                  name="comment"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What are you building, what's blocked, and what's your timeline?"
                  className={`${inputClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
