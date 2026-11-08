"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { faNumber } from "@/lib/fa";
import { useMotionOK } from "./useMotionOK";

/** Counts 0 → value once when visible, then sends a gold tick along the ruler (`.numbers.ran`); final text is always rendered first (SSR / no JS / reduced motion). */
export default function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ok = useMotionOK();
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [shown, setShown] = useState<string | null>(null);
  const done = useRef(false);

  useEffect(() => { if (ok && !done.current) setShown(faNumber(0)); }, [ok]);
  useEffect(() => {
    if (!ok || !inView || done.current) return;
    done.current = true;
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setShown(faNumber(v)), onComplete: () => ref.current?.closest(".numbers")?.classList.add("ran") });
    return () => c.stop();
  }, [ok, inView, value]);

  const final = faNumber(value);
  return (
    <span ref={ref} className="countup">
      <span className="countup-sizer" aria-hidden="true">{final}</span>
      <span aria-hidden="true">{shown ?? final}</span>
      <span className="visually-hidden">{final}</span>
    </span>
  );
}
