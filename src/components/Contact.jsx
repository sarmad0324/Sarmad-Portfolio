"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "@/lib/useInView";
import { BsWhatsapp } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { EarthCanvas } from "./canvas";
import { slideIn } from "../lib/motion";
import Swal from "sweetalert2"; // For popups, make sure to install this package
import "sweetalert2/dist/sweetalert2.min.css";

const Contact = () => {
  const {ref} = useSectionInView("#contact")
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("Select an Option");

  const [loading, setLoading] = useState(false); // New loading state

  const clearForm = () => {
    setName("");
    setComment("");
    setEmail("");
    setRole("Select an Option");
   
  };
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
    if (!comment.trim()) formErrors.comment = "Message is required";
    if (role === "---") formErrors.role = "Please select an enquiry type";

   
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
            text: `Thanks ${name} for submitting the form, we will get in touch with you soon!`,
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
    <div
      ref={ref}
      id="contact"
      className="container mx-auto px-6 py-16 md:py-24 lg:py-32 bg-white dark:bg-darkBlack"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
            Get in Touch
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-textDark dark:text-white">
            Let's <span className="text-primary">Build Something</span> Together
          </h3>
          <p className="text-xl text-textDark/70 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Get a free quote and consultation. I'm here to help bring your vision to life.
          </p>
        </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="p-8 rounded-2xl bg-bgWarm dark:bg-darkGray2 border border-borderGray dark:border-darkGray3"
        >
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-2 text-textDark dark:text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="bg-white dark:bg-darkGray1 text-textDark dark:text-gray-100 border border-borderGray dark:border-darkGray3 py-3 px-4 placeholder:text-textDark/40 dark:placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-2 text-textDark dark:text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="bg-white dark:bg-darkGray1 text-textDark dark:text-gray-100 border border-borderGray dark:border-darkGray3 py-3 px-4 placeholder:text-textDark/40 dark:placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-2 text-textDark dark:text-white">
                Project Type
              </span>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-white dark:bg-darkGray1 text-textDark dark:text-gray-100 border border-borderGray dark:border-darkGray3 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                required
              >
                <option value="">- Select project type -</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="AI Integration & Automation">AI Integration & Automation</option>
                <option value="Remote Development Team">Remote Development Team</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-semibold mb-2 text-textDark dark:text-white">Project Details</span>
              <textarea
                rows={6}
                name="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell me about your project..."
                className="bg-white dark:bg-darkGray1 text-textDark dark:text-gray-100 border border-borderGray dark:border-darkGray3 py-3 px-4 placeholder:text-textDark/40 dark:placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Get a Free Quote"}
            </button>

          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[350px] sm:h-[400px] md:h-[550px] lg:h-full"
        >
          <EarthCanvas />
        </motion.div>

      </div>

      {/* Contact Info & Footer */}
      <div className="mt-16 pt-12 border-t border-borderGray dark:border-darkGray2">
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-12 justify-center items-center mb-8">
          <motion.a
            href="mailto:sarmadirfan@syntaxleap.com"
            className="flex gap-3 items-center text-textDark/70 dark:text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <BsEnvelope className="text-xl" />
            <span className="text-sm sm:text-base">sarmadirfan@syntaxleap.com</span>
          </motion.a>
          <motion.a
            href="tel:+923368486356"
            className="flex gap-3 items-center text-textDark/70 dark:text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <BsWhatsapp className="text-xl" />
            <span className="text-sm sm:text-base">+92 336 8486356</span>
          </motion.a>
        </div>
        
        <p className="text-center text-textDark/60 dark:text-gray-500 text-sm">
          © 2025 Sarmad Irfan. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
