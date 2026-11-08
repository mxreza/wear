import type { RailGarment } from "@/components/ui/product-rail-gallery";

// All page copy lives here. Edit this file to change text, products or contact info.
// To add a real photo: put the file in /public/images and set `image: "/images/<name>.jpg"`.
// When `image` is empty, a labelled placeholder is shown instead.

export const brand = {
  name: "پارسا",
  fullName: "تولیدی پوشاک پزشکی پارسا",
  tagline: "تولیدی پوشاک پزشکی",
  logo: "", // e.g. "/images/logo.svg"
  slogan: "تولید مستقیم | کیفیت مناسب | تنوع محصولات | سفارش عمده",
};

export const contact = {
  person: "آقای طاهری",
  phoneDisplay: "۰۹۳۰ ۱۷۷ ۵۱۳۳",
  phoneTel: "09301775133",
  whatsapp: "", // e.g. "https://wa.me/989301775133"
  eitaa: "", // e.g. "https://eitaa.com/<id>"
  telegram: "",
};

export const hero = {
  title: "لباس بیمار، پرستار و پزشک، مستقیم از دست تولیدکننده",
  text: "تولیدی پوشاک پزشکی پارسا برای بیمارستان‌ها، درمانگاه‌ها، مراکز تصویربرداری، کلینیک‌ها و داروخانه‌ها لباس و پک بیمار را در تعداد عمده می‌دوزد و تحویل می‌دهد.",
  proof: "تأمین‌کننده‌ی بیمارستان‌ها و داروخانه‌های همدان",
  image: "",
  imageLabel: "جای عکس نمونه: ست لباس بیمار روی مانکن یا تخت",
};

export const stats = [
  { value: "۲,۰۰۰ عدد", label: "ظرفیت تولید ماهانه" },
  { value: "مستقیم", label: "تولید در کارگاه خودمان، بدون واسطه" },
  { value: "مشتریان ثابت", label: "سفارش مداوم از مراکز درمانی" },
  { value: "عمده", label: "بیمارستان، درمانگاه و داروخانه" },
];

export type Product = {
  title: string;
  text: string;
  image: string;
  imageLabel: string;
  href: string;
  cta: string;
};

export const products: Product[] = [
  {
    title: "ست کامل MRI",
    text: "ست کامل لباس بیمار برای بخش MRI و مراکز تصویربرداری.",
    image: "",
    imageLabel: "جای عکس: ست MRI",
    href: "#contact",
    cta: "استعلام قیمت",
  },
  {
    title: "گان، کلاه و شلوار بیمار",
    text: "ست لباس بیمار برای بستری و اقدامات درمانی، در تعداد عمده.",
    image: "",
    imageLabel: "جای عکس: گان، کلاه و شلوار بیمار",
    href: "#contact",
    cta: "استعلام قیمت",
  },
  {
    title: "بلوز و شلوار اسپان",
    text: "زنانه و مردانه، از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.",
    image: "",
    imageLabel: "جای عکس: بلوز و شلوار اسپان",
    href: "#contact",
    cta: "استعلام قیمت",
  },
  {
    title: "پیراهن و شلوار تترون",
    text: "زنانه، مردانه و بچگانه، از پارچه‌ی تترون برای استفاده‌ی مکرر و شست‌وشوی چندباره.",
    image: "",
    imageLabel: "جای عکس: پیراهن و شلوار تترون",
    href: "#contact",
    cta: "استعلام قیمت",
  },
  {
    title: "پک و کیف بیمار",
    text: "پک آماده‌ی پذیرش بیمار، با ترکیبی که شما تعیین می‌کنید.",
    image: "",
    imageLabel: "جای عکس: پک و کیف بیمار",
    href: "#pack",
    cta: "دیدن جزئیات پک",
  },
];

export const pack = {
  badge: "جدید",
  title: "پک بیمار: هر چه بیمار در روز اول لازم دارد، در یک کیف",
  text: "به‌جای سفارش جداگانه‌ی لباس، دمپایی و دماسنج، یک پک آماده تحویل بگیرید. ترکیب پک را بر اساس نیاز بخش یا مرکز شما می‌بندیم.",
  items: ["لباس بیمار (گان، شلوار و کلاه)", "دمپایی", "دماسنج", "کیف بیمار"],
  cta: "سفارش پک برای مرکز شما",
  image: "",
  imageLabel: "جای عکس نمونه: پک بیمار باز شده، با همه‌ی اقلام",
};

export const reasons = [
  {
    title: "بدون واسطه",
    text: "لباس‌ها در کارگاه خودمان دوخته می‌شود. قیمت و زمان تحویل را مستقیم با تولیدکننده هماهنگ می‌کنید.",
  },
  {
    title: "تنوع محصول",
    text: "لباس بیمار، کادر درمان و پک در یک جا. لازم نیست برای هر قلم سراغ تأمین‌کننده‌ی جدا بروید.",
  },
  {
    title: "ظرفیت سفارش عمده",
    text: "تا ۲,۰۰۰ عدد در ماه تولید می‌کنیم؛ برای بیمارستان، درمانگاه و داروخانه.",
  },
  {
    title: "مشتری که برمی‌گردد",
    text: "مراکز درمانی همدان بارها از ما سفارش داده‌اند و سفارش‌ها ادامه دارد.",
  },
];

export const steps = [
  { title: "تماس و استعلام", text: "نوع لباس و تعداد تقریبی را بگویید تا قیمت را اعلام کنیم." },
  { title: "تأیید مدل و سایز", text: "مدل، رنگ و سایزها را با هم نهایی می‌کنیم." },
  { title: "دوخت", text: "سفارش در کارگاه خودمان دوخته و بسته‌بندی می‌شود." },
  { title: "تحویل", text: "سفارش را به مرکز شما می‌رسانیم و برای سفارش بعدی در دسترس هستیم." },
];

export const gallery = [
  { image: "", label: "نمونه‌کار ۱: لباس بیمار" },
  { image: "", label: "نمونه‌کار ۲: ست MRI" },
  { image: "", label: "نمونه‌کار ۳: لباس کادر درمان" },
  { image: "", label: "نمونه‌کار ۴: جزئیات دوخت" },
  { image: "", label: "نمونه‌کار ۵: بسته‌بندی عمده" },
  { image: "", label: "نمونه‌کار ۶: پک بیمار" },
];

export const about = {
  title: "پارسا یک کارگاه خیاطی است، نه یک فروشگاه",
  text: "ما لباس را خودمان می‌دوزیم و مستقیم به مراکز درمانی می‌رسانیم. مشتری‌های ما بیمارستان‌ها، درمانگاه‌ها و داروخانه‌های همدان هستند و بیشترشان بارها سفارش داده‌اند.",
  story: "[اینجا یک یا دو جمله از داستان کارگاه بیاید: از کی شروع شد و چرا.]",
  image: "",
  imageLabel: "جای عکس نمونه: کارگاه و چرخ‌های خیاطی",
};

export const contactSection = {
  title: "برای سفارش عمده و استعلام قیمت تماس بگیرید",
  text: "نوع لباس و تعداد تقریبی را بگویید. قیمت و زمان تحویل را همان روز اعلام می‌کنیم.",
  cta: "تماس با پارسا",
};

export const nav = [
  { href: "#products", label: "محصولات" },
  { href: "#pack", label: "پک بیمار" },
  { href: "#process", label: "روش سفارش" },
  { href: "#about", label: "درباره ما" },
];

// Interactive clothing rail (second section, right after the hero).
// `kind` picks the built-in drawing; `color` is the fabric colour.
// For real photos, add `image` / `backImage` / `sideImage` (transparent PNG/WebP, 200×310 canvas,
// same scale for all three) from /public/images — the drawing is then replaced by the photo.

export const rail = {
  eyebrow: "رگال محصولات پارسا",
  heading: "لباس‌ها را از روی رگال ببینید",
  caption: "روی لباس‌ها بروید یا بکشید؛ روی هر کدام بزنید تا پشت و جزئیاتش را ببینید.",
  cta: "استعلام قیمت سفارش عمده",
  labels: { front: "جلو", back: "پشت", close: "بستن", show: "نمایش" },
  items: [
    {
      id: "gown",
      name: "گان بیمار",
      kind: "coat",
      color: "#9cc7de",
      tag: "عمده",
      description: "گان بلند بیمار برای بستری و اقدامات درمانی؛ همراه کلاه و شلوار، در تعداد عمده.",
      details: ["گان، کلاه و شلوار", "سفارش عمده"],
    },
    {
      id: "mri",
      name: "ست کامل MRI",
      kind: "tee",
      color: "#5f8fb8",
      tag: "MRI",
      description: "ست کامل لباس بیمار برای بخش MRI و مراکز تصویربرداری.",
      details: ["مراکز تصویربرداری", "ست کامل"],
    },
    {
      id: "spun-women",
      name: "بلوز اسپان زنانه",
      kind: "tee",
      color: "#a9d6cf",
      tag: "اسپان",
      description: "از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.",
      details: ["اسپان", "زنانه", "بلوز و شلوار"],
    },
    {
      id: "spun-men",
      name: "بلوز اسپان مردانه",
      kind: "tee",
      color: "#7fb3c9",
      tag: "اسپان",
      description: "از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.",
      details: ["اسپان", "مردانه", "بلوز و شلوار"],
    },
    {
      id: "tetron",
      name: "پیراهن تترون",
      kind: "shirt",
      color: "#1f7a72",
      trim: "#e8f2f0",
      tag: "تترون",
      description: "از پارچه‌ی تترون برای استفاده‌ی مکرر و شست‌وشوی چندباره.",
      details: ["تترون", "زنانه و مردانه", "پیراهن و شلوار"],
    },
    {
      id: "tetron-kids",
      name: "پیراهن تترون بچگانه",
      kind: "shirt",
      color: "#8fc1a9",
      trim: "#f4fbf8",
      tag: "بچگانه",
      description: "سایز بچگانه از پارچه‌ی تترون، مناسب بخش‌های کودکان.",
      details: ["تترون", "بچگانه"],
    },
  ] satisfies RailGarment[],
};
