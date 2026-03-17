"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "@/lib/useInView";
import { BsWhatsapp } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
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
    <div
      ref={ref}
      id="contact"
      className="container mx-auto px-6 py-16 md:py-20 bg-darkBlack"
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
            Final Step
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            Need help shipping, fixing, or scaling a product?
          </h3>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Share what is blocked, what needs to ship next, and your timeline.
          </p>
        </motion.div>

      <div className="grid grid-cols-1 gap-8">
        <motion.div className="p-7 rounded-2xl bg-darkGray1/70 border border-darkGray3">
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <label className="flex flex-col md:col-span-1">
              <span className="text-sm font-semibold mb-2 text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="bg-darkBlack text-gray-100 border border-darkGray3 py-3 px-4 placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
            </label>
            <label className="flex flex-col md:col-span-1">
              <span className="text-sm font-semibold mb-2 text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="bg-darkBlack text-gray-100 border border-darkGray3 py-3 px-4 placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
              />
            </label>
            <label className="flex flex-col md:col-span-2">
              <span className="text-sm font-semibold mb-2 text-white">
                Project Type
              </span>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-darkBlack text-gray-100 border border-darkGray3 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                required
              >
                <option value="">- Select engagement need -</option>
                <option value="MVP Build & Launch">MVP Build & Launch</option>
                <option value="App Rescue & Stabilization">App Rescue & Stabilization</option>
                <option value="Full-Stack Product Engineering">Full-Stack Product Engineering</option>
                <option value="AI & Workflow Integrations">AI & Workflow Integrations</option>
                <option value="Monthly Technical Partner">Monthly Technical Partner</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="flex flex-col md:col-span-2">
              <span className="text-sm font-semibold mb-2 text-white">Project Details</span>
              <textarea
                rows={5}
                name="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What are you building, where is it blocked, and what timeline are you working with?"
                className="bg-darkBlack text-gray-100 border border-darkGray3 py-3 px-4 placeholder:text-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 bg-primary hover:bg-primary/90 text-white py-3.5 px-8 rounded-lg font-semibold text-base transition-colors w-full focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Book a Strategy Call"}
            </button>

          </form>
        </motion.div>
      </div>

      {/* Contact Info & Footer */}
      <div className="mt-12 pt-8 border-t border-darkGray3">
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-12 justify-center items-center mb-8">
          <motion.a
            href="mailto:sarmadirfan@syntaxleap.com"
            className="flex gap-3 items-center text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <BsEnvelope className="text-xl" />
            <span className="text-sm sm:text-base">sarmadirfan@syntaxleap.com</span>
          </motion.a>
          <motion.a
            href="tel:+923368486356"
            className="flex gap-3 items-center text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <BsWhatsapp className="text-xl" />
            <span className="text-sm sm:text-base">+92 336 8486356</span>
          </motion.a>
        </div>
        
        <p className="text-center text-gray-500 text-sm">
          © 2025 Sarmad Irfan. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Contact;
