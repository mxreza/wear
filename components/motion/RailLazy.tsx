"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { ClothingRailHeroProps } from "@/components/ui/product-rail-gallery";

const RailClient = dynamic(() => import("./RailClient"), { ssr: false });

/**
 * Mounts the clothing rail only when it comes near the viewport. The slot keeps a fixed minimum height,
 * so nothing below it moves when the rail appears. Without JS the slot shows `fallback`.
 */
export default function RailLazy({ fallback, ...props }: ClothingRailHeroProps & { fallback: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver((e) => { if (e[0]?.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className="rail-slot">{show ? <RailClient {...props} /> : fallback}</div>;
}
