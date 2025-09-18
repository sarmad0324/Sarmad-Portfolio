"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedListProps {
  children: React.ReactNode;
}

export function AnimatedList({ children }: AnimatedListProps) {
  const [items, setItems] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const childrenArray = Array.isArray(children) ? children : [children];
    setItems(childrenArray);
  }, [children]);

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="mb-4"
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 