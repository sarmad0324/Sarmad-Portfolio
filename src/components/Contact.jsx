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
  const { ref } = useSectionInView("#contact", 1);
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
      className="container mx-auto border rounded-xl dark:border-darkGray2 border-light4 bg-light2 dark:bg-darkGray1 px-4 py-16 md:py-24 lg:py-32 text-light4 dark:text-darkGray3"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className=" p-8 rounded-2xl"
        >
          <p
            className={
              "sm:text-[14px] lg:text-[17px]  uppercase tracking-wider text-center lg:text-left"
            }
          >
            Get in touch
          </p>

          <h3
            className={
              "text-3xl font-medium capitalize mb-8 lg:text-left text-center "
            }
          >
            Contact Me
          </h3>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="What's your good name?"
                className="bg-light1 text-light4 border border-light3 dark:bg-darkBlack dark:text-darkGray3 dark:border-darkGray2 py-4 px-6 placeholder:text-light4 dark:placeholder:text-darkGray3 rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="What's your email address?"
                className="bg-light1 text-light4 border border-light3 dark:bg-darkBlack dark:text-darkGray3 dark:border-darkGray2 py-4 px-6 placeholder:text-light4 dark:placeholder:text-darkGray3 rounded-lg outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">
                Type of Enquiry
              </span>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-light1 text-light4 border border-light3 dark:bg-darkBlack dark:text-darkGray3 dark:border-darkGray2 py-4 px-6 placeholder:text-light4 dark:placeholder:text-darkGray3 rounded-lg outline-none font-medium"
                required
              >
                <option value="">- Select an option -</option>
                <option value="Freelance Project Inquiry">
                  Freelance Project Inquiry
                </option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Consultancy Session">Consultancy Session</option>
                <option value="Business Proposal">Business Proposal</option>
                <option value="Partnership Offer">Partnership Offer</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What you want to say?"
                className="bg-light1 text-light4 border border-light3 dark:bg-darkBlack dark:text-darkGray3 dark:border-darkGray2 py-4 px-6 placeholder:text-light4 dark:placeholder:text-darkGray3 rounded-lg outline-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-light3 text-dark1 dark:bg-darkGray2 dark:text-darkBlack py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md mx-auto lg:mx-0 hover:bg-light3 dark:hover:bg-darkGray1 transition"
            >
              {loading ? "Sending..." : "Send"}
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
      <hr className="w-4/5 m-auto border-textSecondary mt-10" />
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-900 text-center">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-10 justify-center">
            <span className="flex gap-x-3 items-center justify-center">
              <BsEnvelope /> 
              <a className="text-gray-400 text-sm sm:text-base" href="mailto:sarmadirfan78@gmail.com">
                sarmadirfan78@gmail.com
              </a>
            </span>
            <span className="flex gap-x-3 items-center justify-center">
              <BsWhatsapp /> 
              <a className="text-gray-400 text-sm sm:text-base" href="tel:+923368486356">
                0336 8486356
              </a>
            </span>
          </div>
          
          <p className="mt-4 text-sm sm:text-base">Sarmad Irfan | © 2025</p>
        </div>
    </div>
  );
};

export default Contact;
