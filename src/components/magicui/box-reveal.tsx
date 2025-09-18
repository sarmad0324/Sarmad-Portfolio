"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

interface BoxRevealProps {
  children: ReactNode
  boxColor?: string
  duration?: number
  className?: string
  delay?: number
}

export function BoxReveal({
  children,
  boxColor = "#5046e6",
  duration = 0.5,
  className,
  delay = 0,
}: BoxRevealProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      
      {/* Box reveal animation */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: isVisible ? "100%" : "-100%" }}
        transition={{ duration, ease: "easeInOut" }}
        style={{
          background: boxColor,
        }}
      />
    </div>
  )
}