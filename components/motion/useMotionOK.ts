"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** True only after mount and when the visitor hasn't asked for reduced motion. SSR/no-JS → false (static). */
export function useMotionOK() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !reduced;
}

/** Matches a media query after mount (false during SSR). */
export function useMedia(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatch(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, [query]);
  return match;
}
