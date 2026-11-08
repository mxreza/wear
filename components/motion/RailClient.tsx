"use client";

import "@/app/tailwind.css";
import ClothingRailHero, { type ClothingRailHeroProps } from "@/components/ui/product-rail-gallery";

/** Loaded on demand (see RailLazy) together with its Tailwind CSS, so neither weighs on the first paint. */
export default function RailClient(props: ClothingRailHeroProps) {
  return <ClothingRailHero {...props} />;
}
