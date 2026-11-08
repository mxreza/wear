"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Lenis smooth scroll (lerp 0.1). Disabled for prefers-reduced-motion. Anchor links get a header offset. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const headerH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;
    const lenis = new Lenis({ lerp: 0.1, autoRaf: true, anchors: { offset: -(headerH() + 16) } });
    return () => lenis.destroy();
  }, []);
  return null;
}
