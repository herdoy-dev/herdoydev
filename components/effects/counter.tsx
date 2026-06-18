"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

type CounterProps = {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
