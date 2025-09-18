"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface OrbitingCirclesProps {
  children: React.ReactNode;
  iconSize?: number;
  radius?: number;
  reverse?: boolean;
  speed?: number;
}

export function OrbitingCircles({ 
  children, 
  iconSize = 40, 
  radius = 150, 
  reverse = false, 
  speed = 1 
}: OrbitingCirclesProps) {
  const [time, setTime] = useState(0);
  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.02 * speed);
    }, 16);
    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className="relative">
      {childrenArray.map((child, index) => {
        const angle = (index / childrenArray.length) * 2 * Math.PI + time * (reverse ? -1 : 1);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
              width: iconSize,
              height: iconSize,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
} 