"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "@/lib/useInView";
import { BsWhatsapp } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Swal from "sweetalert2"; // For popups, make sure to install this package
import "sweetalert2/dist/sweetalert2.min.css";

const Contact = () => {
  const {ref} = useSectionInView("#contact")
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false); // New loading state

  const clearForm = () => {
    setName("");
    setComment("");
    setEmail("");
    setRole("");
   
  };
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
    if (!comment.trim()) formErrors.comment = "Message is required";
    if (!role) formErrors.role = "Please select an enquiry type";

   
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Set loading to true when form is submitted

    // Send form using EmailJS
    emailjs
      .sendForm(
        "service_aiipe2d",
        "template_93eud3q",
        form.current,
        "2_HnGR0qPrdrYw7Mp"
      )
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            text: `Thanks ${name}. I will review your details and get back to you shortly.`,
            icon: "success",
            confirmButtonText: "OK",
          });
          clearForm();
          setLoading(false); // Reset loading state after successful submission
        },
        () => {
          Swal.fire({
            title: "Error!",
            text: "Oops! Something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
          setLoading(false); // Reset loading state after error
        }
      );
  };

  return (
    <section ref={ref} id="contact" className="container mx-auto px-6 py-20 md:py-24 bg-bg">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-7"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-4">
              Need help shipping, fixing, or scaling a product?
            </h3>
            <p className="text-sm md:text-base text-textSecondary leading-relaxed">
              Share what you&apos;re building, where execution is blocked, and what needs to move next.
            </p>

            <div className="mt-7 space-y-1">
              <a
                href="mailto:sarmad.irfan@syntaxleap.com"
                className="group flex items-center gap-3 py-2.5 text-textSecondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 -mx-2 px-2"
              >
                <BsEnvelope className="text-lg shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">sarmad.irfan@syntaxleap.com</span>
              </a>
              <a
                href="https://wa.me/923368486356"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-2.5 text-textSecondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 -mx-2 px-2"
              >
                <BsWhatsapp className="text-lg shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+92 336 8486356</span>
              </a>
              <a
                href="https://github.com/sarmad0324"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-2.5 text-textSecondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 -mx-2 px-2"
              >
                <FaGithub className="text-lg shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">View GitHub</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1F5TVWgadnUpHgqp9Hxkvd7T2LTkELaBg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-2.5 text-textSecondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 -mx-2 px-2"
              >
                <FiFileText className="text-lg shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">View Resume</span>
              </a>
              <a
                href="https://calendly.com/sarmadirfan78/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 px-5 py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
              >
                Book a Call
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-6 md:p-7"
          >
            <h4 className="text-textPrimary font-semibold text-lg mb-5">Tell me what you need help with</h4>
            <form onSubmit={handleSubmit} ref={form} className="grid grid-cols-1 gap-5">
              <label className="flex flex-col">
                <span className="text-sm font-semibold mb-2 text-textPrimary">Name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-bg text-textPrimary border border-border py-2.5 px-3.5 placeholder:text-textMuted rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-semibold mb-2 text-textPrimary">Email</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="bg-bg text-textPrimary border border-border py-2.5 px-3.5 placeholder:text-textMuted rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-semibold mb-2 text-textPrimary">Project Type</span>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-bg text-textPrimary border border-border py-2.5 px-3.5 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  required
                >
                  <option value="">- Select project type -</option>
                  <option value="MVP Build & Launch">MVP Build & Launch</option>
                  <option value="App Rescue & Stabilization">App Rescue & Stabilization</option>
                  <option value="Full-Stack Product Engineering">Full-Stack Product Engineering</option>
                  <option value="Fractional Technical Partner">Fractional Technical Partner</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-semibold mb-2 text-textPrimary">Project Details</span>
                <textarea
                  rows={4}
                  name="comment"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What are you building, where is execution blocked, and what needs to move next?"
                  className="bg-bg text-textPrimary border border-border py-2.5 px-3.5 placeholder:text-textMuted rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-fit bg-primary hover:bg-primaryHover text-white py-3 px-6 rounded-lg font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Start the Conversation"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
