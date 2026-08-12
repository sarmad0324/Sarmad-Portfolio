"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { EASE } from "@/lib/anim";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/** Soft magnetic pull on hover — transform only, reduced-motion safe via MotionConfig. */
export function Magnetic({ children, className, strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

type RevealWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  staggerMs?: number;
};

/** Word-by-word hero headline reveal. */
export function RevealWords({
  text,
  className,
  delay = 0.2,
  staggerMs = 0.04,
}: RevealWordsProps) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: delay + i * staggerMs, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Thin scroll progress under the fixed chrome. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.001,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[1000] bg-primary pointer-events-none"
      style={{ scaleX, opacity }}
    />
  );
}
