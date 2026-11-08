"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useMotionOK } from "./useMotionOK";

function Word({ word, i, n, progress }: { word: string; i: number; n: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [i / n, (i + 1) / n], [0.15, 1]);
  return <><motion.span style={{ opacity }}>{word}</motion.span>{" "}</>;
}

/** Word-by-word opacity 0.15 → 1 tied to scroll. Static (fully readable) without JS or with reduced motion. */
export default function StatementWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const ok = useMotionOK();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className="statement-text">
      {ok ? (
        <>
          <span aria-hidden="true">{words.map((w, i) => <Word key={i} word={w} i={i} n={words.length} progress={scrollYProgress} />)}</span>
          <span className="visually-hidden">{text}</span>
        </>
      ) : text}
    </p>
  );
}
