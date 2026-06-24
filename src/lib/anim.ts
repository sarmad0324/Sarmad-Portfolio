import type { Variants } from "framer-motion";

/**
 * Shared motion language for the site.
 * Premium feel = deliberate easing (ease-out-expo), a touch of blur-in "focus",
 * and orchestrated stagger instead of ad-hoc per-item delays.
 * All transform/opacity based, so <MotionConfig reducedMotion="user"> neutralizes it
 * for users who ask for reduced motion.
 */

// easeOutExpo — slow, confident settle. The core of the "premium" feel.
export const EASE = [0.16, 1, 0.3, 1] as const;
// easeOutQuint — slightly softer, for hero / large elements.
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

// Trigger a little before the element is fully in view — feels intentional, not late.
export const viewportOnce = { once: true, margin: "-80px 0px -10% 0px" } as const;

// Section headers / standalone reveals — blur-in adds a refined "focus" pull.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

// Cards / grid items — no blur (keeps grids crisp + cheap to animate at scale).
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

// Parent orchestrator: stagger children in a smooth cascade.
export const stagger = (staggerChildren = 0.09, delayChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});
