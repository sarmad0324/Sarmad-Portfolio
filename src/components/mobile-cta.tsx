"use client";

import { motion } from "framer-motion";

export default function MobileCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-[998] px-4 pt-2"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <a
        href="https://calendly.com/sarmad-sarmadirfan/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center px-5 py-3.5 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/25 hover:bg-primaryHover active:scale-[0.98] transition-all duration-200 text-sm"
      >
        Book a 20-min fit call
      </a>
    </motion.div>
  );
}
