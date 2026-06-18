"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
  once?: boolean;
};

/** Scroll-triggered reveal. Wrap a single element or a stagger group. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger parent: children using `fadeUp` variants will cascade in. */
export function RevealGroup({
  children,
  className,
  as = "div",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ul";
  once?: boolean;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
