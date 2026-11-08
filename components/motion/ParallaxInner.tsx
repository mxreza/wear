"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMotionOK } from "./useMotionOK";

/** Moves an image ±16px inside its frame as the frame crosses the viewport. */
export default function ParallaxInner({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  return (
    <motion.div ref={ref} className="frame-inner is-parallax" style={ok ? { y } : undefined}>
      {children}
    </motion.div>
  );
}
