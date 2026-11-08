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

/**
 * "Lite" devices: phones/tablets (coarse pointer), ≤ 4 CPU cores, ≤ 4 GB memory or data-saver.
 * On these we drop continuous / scroll-linked effects (Lenis, parallax, rail autoplay + SVG filters),
 * which made weak phones drop to ~27 fps and kept the main thread busy even when idle.
 */
export function isLiteDevice() {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    (nav.hardwareConcurrency ?? 8) <= 4 ||
    (nav.deviceMemory ?? 8) <= 4 ||
    nav.connection?.saveData === true
  );
}

/** Like useMotionOK, but also false on lite devices — for parallax and other scroll-linked extras. */
export function useRichMotion() {
  const ok = useMotionOK();
  const [lite, setLite] = useState(true);
  useEffect(() => setLite(isLiteDevice()), []);
  return ok && !lite;
}
