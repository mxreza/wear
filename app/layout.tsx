import type { Metadata } from "next";
import "./fonts.css";
import "./tailwind.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "تولیدی پوشاک پزشکی مهرپوش | لباس بیمار و کادر درمان، سفارش عمده",
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
