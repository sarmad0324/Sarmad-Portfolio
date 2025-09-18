"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface InteractiveHoverButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function InteractiveHoverButton({ 
  children, 
  className = "" 
}: InteractiveHoverButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg bg-primary hover:bg-primary/90 px-8 py-3 text-white font-medium focus:ring-2 focus:ring-primary/50 focus:outline-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
} 