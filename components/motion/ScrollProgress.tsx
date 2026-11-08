"use client";

import { motion, useScroll } from "motion/react";
import { useMotionOK } from "./useMotionOK";

/** Measuring-tape ruler fixed to the top; a gold line fills it with page scroll (RTL: right → left). */
export default function ScrollProgress() {
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll();
  if (!ok) return null;
  return (
    <>
      <div className="progress" aria-hidden="true" />
      <motion.div className="progress-fill" aria-hidden="true" style={{ scaleX: scrollYProgress }} />
    </>
  );
}
