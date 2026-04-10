"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "@/lib/useInView";
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
            background: "#111113",
            color: "#FAFAFA",
            confirmButtonColor: "#6366F1",
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
            background: "#111113",
            color: "#FAFAFA",
            confirmButtonColor: "#6366F1",
          });
          setLoading(false);
        }
      );
  };

  const inputClass =
    "bg-surface2 text-textPrimary border border-border py-3 px-4 placeholder:text-textMuted rounded-xl outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 text-sm w-full";

  return (
    <section ref={ref} id="contact" className="px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary font-Sora">
            Let&apos;s talk about your product
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: info + links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-xl font-bold text-textPrimary font-Sora mb-2">
              Tell me what&apos;s broken or blocked.
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed mb-8">
              Share what you&apos;re building, where execution is stuck, and your timeline. I&apos;ll review and get back with next steps — usually within 24 hours.
            </p>

            <div className="space-y-1 flex-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-3 px-3 -mx-3 text-textSecondary hover:text-primary rounded-xl hover:bg-primary/5 transition-all duration-200"
                >
                  <link.icon className="text-base shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>

            <a
              href="https://calendly.com/sarmad-sarmadirfan/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primaryHover transition-all duration-200 shadow-lg shadow-primary/20"
            >
              <FiCalendar className="text-sm" />
              Book a Free Call
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <h4 className="text-textPrimary font-semibold text-base mb-5 font-Sora">
              Or send me a message directly
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                  <option value="Fix & Stabilize">Fix &amp; Stabilize — my product is broken</option>
                  <option value="MVP Build">MVP Build — I need to ship version one</option>
                  <option value="Technical Partner">Technical Partner — ongoing retainer</option>
                  <option value="Other">Other / Not sure yet</option>
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
                className="w-full bg-primary hover:bg-primaryHover text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
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
