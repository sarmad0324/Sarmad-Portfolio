'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CURSOR_SIZE = 18;
const CURSOR_HOVER_SIZE = 36;

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Listen for hover on all buttons and links
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-hover')) {
        setHovered(true);
      }
    };
    const handleMouseOut = () => {
      setHovered(false);
    };
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // Detect dark mode
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Color logic
  const ballColor = isDark ? '#fff' : '#000000';
  const borderColor = isDark ? '#000' : '#fff';
  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        width: hovered ? CURSOR_HOVER_SIZE : CURSOR_SIZE,
        height: hovered ? CURSOR_HOVER_SIZE : CURSOR_SIZE,
        x: springX,
        y: springY,
        borderRadius: '50%',
        background: ballColor,
        border: `2.5px solid ${borderColor}`,
        boxSizing: 'border-box',
        boxShadow: 'none',
        transition: 'width 0.2s, height 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
} 