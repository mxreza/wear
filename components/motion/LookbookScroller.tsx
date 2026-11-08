"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useMedia, useMotionOK } from "./useMotionOK";

/**
 * Pinned horizontal strip on ≥1024px (RTL: the strip travels to the right to reveal items on the left).
 * Below 1024px, with reduced motion or without JS it's a normal vertical layout.
 */
export default function LookbookScroller({ id, head, children }: { id: string; head: React.ReactNode; children: React.ReactNode }) {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const ok = useMotionOK();
  const wide = useMedia("(min-width: 1024px)");
  const pinned = ok && wide;
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const t = track.current;
      if (t) setDistance(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, distance]);

  return (
    <section
      ref={outer}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`lookbook ${pinned ? "is-pinned" : ""}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="lb-pin">
        <div className="container">{head}</div>
        {/* Same DOM in both modes (only class/style change) so reveal observers keep their targets. */}
        <div className={pinned ? "lb-viewport" : "container"}>
          <motion.div ref={track} className="lb-track" style={pinned ? { x } : undefined}>{children}</motion.div>
        </div>
      </div>
    </section>
  );
}
