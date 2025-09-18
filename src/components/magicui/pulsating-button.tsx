"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface PulsatingButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: "default" | "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
}

export function PulsatingButton({ 
  children, 
  className, 
  onClick,
  disabled = false,
  variant = "default",
  size = "md"
}: PulsatingButtonProps) {
  const baseClasses = "relative overflow-hidden rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary", 
    accent: "bg-primary text-white hover:bg-primary/90 focus:ring-primary"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Pulsating ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-current opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Pulsating dot effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-current rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [0.5, 1, 0.5],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
