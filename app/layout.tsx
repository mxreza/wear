import type { Metadata } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@fontsource/vazirmatn/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "تولیدی پوشاک پزشکی پارسا | لباس بیمار و کادر درمان، سفارش عمده",
  description:
    "تولید مستقیم لباس بیمار، ست MRI، گان، لباس اسپان و تترون و پک بیمار برای بیمارستان‌ها، درمانگاه‌ها و داروخانه‌ها. سفارش عمده و استعلام قیمت.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
