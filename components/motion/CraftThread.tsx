"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useMotionOK } from "./useMotionOK";

const H_PATH = "M1000 36 C960 36 940 36 900 36 C850 4 750 68 700 36 C650 4 550 68 500 36 C450 4 350 68 300 36 C250 4 150 68 100 36 C60 36 40 36 0 36";
const V_PATH = "M20 0 C20 120 20 880 20 1000";

/** A gold thread drawn through the five craft steps in proportion to section scroll. */
export default function CraftThread({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const style = ok ? { pathLength } : undefined;
  return (
    <ol ref={ref} className="craft-steps">
      <svg className="craft-thread craft-thread-h" viewBox="0 0 1000 72" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <motion.path d={H_PATH} style={style} />
      </svg>
      <svg className="craft-thread craft-thread-v" viewBox="0 0 40 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <motion.path d={V_PATH} style={style} />
      </svg>
      {children}
    </ol>
  );
}
