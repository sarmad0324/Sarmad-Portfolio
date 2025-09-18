"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCircularProgressBarProps {
  value: number
  gaugePrimaryColor?: string
  gaugeSecondaryColor?: string
  className?: string
  size?: number
  strokeWidth?: number
  showValue?: boolean
  valueClassName?: string
}

export function AnimatedCircularProgressBar({
  value,
  gaugePrimaryColor = "rgb(99 102 241)",
  gaugeSecondaryColor = "rgba(0, 0, 0, 0.1)",
  className,
  size = 120,
  strokeWidth = 8,
  showValue = true,
  valueClassName,
}: AnimatedCircularProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={gaugeSecondaryColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={gaugePrimaryColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
      {showValue && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-2xl font-bold",
            valueClassName
          )}
        >
          {Math.round(animatedValue)}%
        </div>
      )}
    </div>
  )
}
