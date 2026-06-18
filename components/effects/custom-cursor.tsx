"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Desktop-only custom cursor with a magnetic ring + dot. Hidden on touch. */
export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement;
      setActive(!!target.closest("a, button, [data-cursor='hover'], input, textarea, select"));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[300] hidden md:block">
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: hidden ? 0 : 1, scale: active ? 1.6 : 1 }}
        transition={{ scale: { duration: 0.18 }, opacity: { duration: 0.2 } }}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-brand-400/70 mix-blend-screen"
      />
      <motion.div
        style={{ x, y }}
        animate={{ opacity: hidden ? 0 : 1, scale: active ? 0 : 1 }}
        transition={{ duration: 0.12 }}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-brand-300"
      />
    </div>
  );
}
