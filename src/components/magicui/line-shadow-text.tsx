"use client";

import { motion } from "framer-motion";

interface LineShadowTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
}

export function LineShadowText({ 
  children, 
  className = "", 
  shadowColor = "black" 
}: LineShadowTextProps) {
  return (
    <motion.span
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
      <motion.span
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${shadowColor}, transparent)`,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
} 