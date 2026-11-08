import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "lenis/dist/lenis.css";
import "./fonts.css";
import "./globals.css";
import { brand } from "@/content/site";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollProgress from "@/components/motion/ScrollProgress";
import RevealObserver from "@/components/motion/RevealObserver";

export const metadata: Metadata = {
  title: `${brand.name} | کارگاه پوشاک بیمار، لباس جراحی و پک بیمار، همدان`,
  description: `${brand.fullName}: پوشاک بیمار، لباس جراحی و کادر درمان، و پک بیمار برای بیمارستان‌ها، درمانگاه‌ها و مراکز درمانی. تولید مستقیم، سفارش عمده.`,
};

export const viewport: Viewport = { themeColor: "#0A3B3A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so reveal effects never hide content when JS is off. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#main">رفتن به محتوای اصلی</a>
        <ScrollProgress />
        {children}
        <SmoothScroll />
        <RevealObserver />
      </body>
    </html>
  );
}
