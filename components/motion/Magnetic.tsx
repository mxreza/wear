"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMedia, useMotionOK } from "./useMotionOK";

/** Very subtle pull toward the cursor (≤ 6px), fine pointers only. */
export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ok = useMotionOK();
  const fine = useMedia("(hover: hover) and (pointer: fine)");
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 22, mass: 0.6 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 22, mass: 0.6 });
  const active = ok && fine;
  const move = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(Math.max(-6, Math.min(6, dx * 0.12)));
    y.set(Math.max(-6, Math.min(6, dy * 0.2)));
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.span
      ref={ref}
      style={active ? { x, y, display: "inline-flex" } : { display: "inline-flex" }}
      onPointerMove={active ? move : undefined}
      onPointerLeave={active ? reset : undefined}
    >
      {children}
    </motion.span>
  );
}
