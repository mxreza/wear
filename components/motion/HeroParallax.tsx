"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRichMotion } from "./useMotionOK";

/** Hero image moves slower than the text (≈0.85 of scroll speed). */
export default function HeroParallax({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useRichMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.min(v, 1200) * 0.15);
  return (
    <motion.div ref={ref} className={className} style={ok ? { y } : undefined}>
      {children}
    </motion.div>
  );
}
