"use client"

import { cn } from "@/lib/utils"

interface RetroGridProps {
  className?: string
}

export function RetroGrid({ className }: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-20",
        className
      )}
    >
      {/* Simplified flowing lines */}
      <div className="absolute inset-0">
        {/* Main horizontal flowing lines */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse"
            style={{
              top: `${i * 12.5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
        
        {/* Main vertical flowing lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-pulse"
            style={{
              left: `${i * 16.66}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          />
        ))}
        
        {/* Flowing diagonal lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/15 to-transparent transform rotate-12 animate-pulse"
            style={{
              top: '20%',
              animationDelay: '1s',
              animationDuration: '5s',
            }}
          />
          <div 
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-accent/15 to-transparent transform -rotate-12 animate-pulse"
            style={{
              top: '60%',
              animationDelay: '2s',
              animationDuration: '6s',
            }}
          />
        </div>
      </div>
      
      {/* Subtle animated dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}