import type { RailGarment } from "@/components/ui/product-rail-gallery";

// ─────────────────────────────────────────────────────────────────────────────
// ALL page copy lives here. Components only render what this file provides.
// Images: put files in /public/images and set `image: "/images/<name>.jpg"`.
// When `image` is empty, a tinted placeholder with `imageLabel` is shown instead.
// Text in [brackets] is a placeholder for a fact we don't have yet — replace it.
// Current photos are temporary Pexels stock photos (see public/images/CREDITS.md).
// ─────────────────────────────────────────────────────────────────────────────

/** Brand name (provisional). Change it here and it changes everywhere. */
export const BRAND_NAME = "مهرپوش";

export const brand = {
  name: BRAND_NAME,
  fullName: `کارگاه پوشاک پزشکی ${BRAND_NAME}`,
  monogram: "م",
  logo: "", // e.g. "/images/logo.svg" — replaces the monogram when set
  description: "پوشاک بیمار، لباس جراحی و پک بیمار؛ دوخته‌شده در کارگاهی در همدان.",
  madeIn: "تولید در همدان",
};

export const contact = {
  person: "خانم پریسا طاهری",
  role: "مدیر کارگاه",
  phoneDisplay: "۰۹۳۰ ۱۷۷ ۵۱۳۳",
  phoneTel: "09301775133",
  whatsapp: "", // e.g. "https://wa.me/989301775133" — button appears when set
  eitaa: "", // e.g. "https://eitaa.com/<id>" — button appears when set
};

export const nav = [
  { href: "#collections", label: "مجموعه‌ها" },
  { href: "#pack", label: "پک بیمار" },
  { href: "#craft", label: "کارگاه" },
  { href: "#lookbook", label: "نمونه‌کارها" },
  { href: "#contact", label: "تماس" },
];

export const cta = {
  primary: "تماس برای سفارش",
  lookbook: "دیدن نمونه‌کارها",
};

export const hero = {
  eyebrow: "Atelier",
  title: "دوختی در شأن بیمار و درمانگر",
  text: "پوشاک بیمار، لباس جراحی و پک بیمار؛ دوخته‌شده در کارگاه ما برای بیمارستان‌ها و مراکز درمانی.",
  image: "/images/hero-patient.jpg",
  imageLabel: "بیمار با لباس بیمارستان روی تخت، کنار پرستار",
};

export const statement = {
  text: "هر لباسی که از کارگاه ما بیرون می‌رود، پیش از آن‌که به بیمار یا پزشک برسد، از دست یک خیاط گذشته است. برش دقیق، دوخت تمیز، و سفارشی که در تعداد بالا هم یکدست می‌ماند.",
};

/** Section headers: Latin italic number + Persian label. */
export const sections = {
  collections: { no: "No. 01", en: "Collection", label: "مجموعه‌ها", title: "سه مجموعه، یک دست دوزنده" },
  lookbook: { no: "No. 02", en: "Lookbook", label: "نمونه‌کارها", title: "از میز برش تا بخش درمان" },
  pack: { no: "No. 03", en: "New", label: "پک بیمار" },
  craft: { no: "No. 04", en: "Atelier", label: "کارگاه", title: "هر قطعه، پنج مرحله زیر دست خیاط" },
  atelier: { no: "No. 05", en: "About", label: "درباره‌ی کارگاه" },
  clients: { no: "No. 06", en: "Clients", label: "مشتریان" },
  contact: { no: "No. 07", en: "Contact", label: "تماس" },
};

export type Collection = {
  id: string;
  name: string;
  text: string;
  materials: string[];
  image: string;
  imageLabel: string;
  href: string;
  cta: string;
  isNew?: boolean;
};

export const collections: Collection[] = [
  {
    id: "patient",
    name: "پوشاک بیمار",
    text: "گان، کلاه و شلوار بیمار، و ست کامل MRI برای بخش‌های بستری و مراکز تصویربرداری.",
    materials: ["[پارچه]"],
    image: "/images/product-gown.jpg",
    imageLabel: "بیمار با گان آبی بیمارستان",
    href: "#lookbook",
    cta: "دیدن نمونه‌ها",
  },
  {
    id: "staff",
    name: "پوشاک جراحی و کادر درمان",
    text: "لباس جراحی برای جراح، پزشک و پرستار؛ بلوز، پیراهن و شلوار، زنانه، مردانه و بچگانه.",
    materials: ["اسپان", "تترون"],
    image: "/images/collection-staff.jpg",
    imageLabel: "کادر درمان با لباس جراحی در اتاق عمل",
    href: "#lookbook",
    cta: "دیدن نمونه‌ها",
  },
  {
    id: "pack",
    name: "پک بیمار",
    text: "پک آماده‌ی پذیرش بیمار، با ترکیبی که برای هر بخش جداگانه بسته می‌شود.",
    materials: ["لباس بیمار", "دمپایی", "دماسنج", "کیف"],
    image: "/images/product-pack.jpg",
    imageLabel: "کیف کوچک با اقلام بهداشتی",
    href: "#pack",
    cta: "دیدن نمونه‌ها",
    isNew: true,
  },
];

export type LookbookItem = {
  title: string;
  fabric: string;
  use: string;
  type: string;
  image: string;
  imageLabel: string;
};

/** Portfolio core. Replace placeholders with photos of the workshop's own garments. */
export const lookbook: LookbookItem[] = [
  { title: "گان بیمار", fabric: "[پارچه]", use: "بخش بستری", type: "[یکبارمصرف / چندبارمصرف]", image: "", imageLabel: "[عکس نمونه‌کار: گان بیمار]" },
  { title: "ست کامل MRI", fabric: "[پارچه]", use: "مراکز تصویربرداری", type: "[یکبارمصرف / چندبارمصرف]", image: "", imageLabel: "[عکس نمونه‌کار: ست MRI]" },
  { title: "کلاه و شلوار بیمار", fabric: "[پارچه]", use: "بستری و اقدامات درمانی", type: "[یکبارمصرف / چندبارمصرف]", image: "", imageLabel: "[عکس نمونه‌کار: کلاه و شلوار بیمار]" },
  { title: "لباس جراحی", fabric: "[پارچه]", use: "اتاق عمل", type: "[یکبارمصرف / چندبارمصرف]", image: "", imageLabel: "[عکس نمونه‌کار: لباس جراحی]" },
  { title: "بلوز و شلوار اسپان", fabric: "اسپان", use: "کادر درمان", type: "[یکبارمصرف / چندبارمصرف]", image: "", imageLabel: "[عکس نمونه‌کار: بلوز و شلوار اسپان]" },
  { title: "پیراهن و شلوار تترون", fabric: "تترون", use: "کادر درمان", type: "چندبارمصرف", image: "", imageLabel: "[عکس نمونه‌کار: پیراهن و شلوار تترون]" },
  { title: "پوشاک تترون بچگانه", fabric: "تترون", use: "[بخش / کاربرد]", type: "چندبارمصرف", image: "", imageLabel: "[عکس نمونه‌کار: پوشاک بچگانه]" },
];

export const lookbookLabels = { fabric: "پارچه", use: "کاربرد", type: "نوع" };

export const pack = {
  badge: "مجموعه‌ی جدید",
  title: "هر آنچه بیمار در روز پذیرش نیاز دارد، در یک کیف.",
  text: "به‌جای سفارش جداگانه‌ی هر قلم، یک پک آماده تحویل بگیرید. ترکیب پک را برای هر بخش جداگانه می‌بندیم.",
  items: ["لباس بیمار: گان، کلاه و شلوار", "دمپایی", "دماسنج", "کیف بیمار"],
  cta: "طراحی پک برای بخش شما",
  image: "/images/pack.jpg",
  imageLabel: "کیف باز شده با اقلام مورد نیاز بیمار",
};

export const craftSteps = [
  { en: "Pattern", title: "الگو", text: "الگوی هر سایز پیش از برش آماده و بازبینی می‌شود." },
  { en: "Cut", title: "برش", text: "پارچه با الگوی ثابت برش می‌خورد تا همه‌ی قطعه‌ها یک‌اندازه باشند." },
  { en: "Sew", title: "دوخت", text: "درزها تمیز و محکم دوخته می‌شوند؛ برای شست‌وشو و استفاده‌ی هرروزه." },
  { en: "Check", title: "کنترل", text: "هر قطعه پیش از بسته‌بندی، از نظر دوخت و اندازه دیده می‌شود." },
  { en: "Pack", title: "بسته‌بندی", text: "سفارش تمیز و شمارش‌شده بسته‌بندی و تحویل مرکز شما می‌شود." },
];

export const numbers = [
  { value: 2000, display: "۲,۰۰۰", unit: "قطعه در ماه", label: "ظرفیت تولید" },
  { value: null, display: "مستقیم", unit: "", label: "تولید در کارگاه خودمان، بدون واسطه" },
  { value: null, display: "ثابت", unit: "", label: "مشتریان ثابت در همدان، با سفارش‌های ادامه‌دار" },
];

export const atelier = {
  title: "کارگاهی کوچک، با دقتی که در سفارش بزرگ هم کم نمی‌شود",
  text: `لباس‌های ${BRAND_NAME} در کارگاه خودمان در همدان دوخته می‌شوند و بی‌واسطه به بیمارستان‌ها و داروخانه‌ها می‌رسند. بیشتر مشتری‌های ما بارها سفارش داده‌اند و سفارش‌ها ادامه دارد.`,
  story: "[داستان کارگاه: از کی شروع شد، چرا، و چه چیزی برای خیاط آن مهم است.]",
  signature: "پریسا طاهری",
  portrait: "",
  portraitLabel: "[عکس خیاط پشت میز کار]",
  workshop: "",
  workshopLabel: "[عکس کارگاه و چرخ‌های خیاطی]",
};

export const clients = {
  title: "مورد اعتماد بیمارستان‌ها و داروخانه‌های همدان",
  names: ["[نام مرکز]", "[نام مرکز]", "[نام مرکز]", "[نام مرکز]", "[نام مرکز]", "[نام مرکز]"],
};

export const contactSection = {
  title: "برای سفارش عمده، با کارگاه صحبت کنید.",
  text: "نوع لباس و تعداد تقریبی را بگویید. فقط سفارش عمده می‌پذیریم.",
  call: "تماس تلفنی",
  whatsapp: "واتساپ",
  eitaa: "ایتا",
};

// ─── Interactive clothing rail (components/ui/product-rail-gallery.tsx) ───
// Not rendered on the page at the moment; kept so it can be added back.
export const rail = {
  eyebrow: `رگال محصولات ${BRAND_NAME}`,
  heading: "لباس‌ها را از روی رگال ببینید",
  caption: "روی لباس‌ها بروید یا بکشید؛ روی هر کدام بزنید تا پشت و جزئیاتش را ببینید.",
  cta: "استعلام قیمت سفارش عمده",
  labels: { front: "جلو", back: "پشت", close: "بستن", show: "نمایش" },
  items: [
    { id: "gown", name: "گان بیمار", kind: "coat", color: "#9cc7de", tag: "عمده", description: "گان بلند بیمار برای بستری و اقدامات درمانی؛ همراه کلاه و شلوار، در تعداد عمده.", details: ["گان، کلاه و شلوار", "سفارش عمده"] },
    { id: "mri", name: "ست کامل MRI", kind: "tee", color: "#5f8fb8", tag: "MRI", description: "ست کامل لباس بیمار برای بخش MRI و مراکز تصویربرداری.", details: ["مراکز تصویربرداری", "ست کامل"] },
    { id: "spun-women", name: "بلوز اسپان زنانه", kind: "tee", color: "#a9d6cf", tag: "اسپان", description: "از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.", details: ["اسپان", "زنانه", "بلوز و شلوار"] },
    { id: "spun-men", name: "بلوز اسپان مردانه", kind: "tee", color: "#7fb3c9", tag: "اسپان", description: "از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.", details: ["اسپان", "مردانه", "بلوز و شلوار"] },
    { id: "tetron", name: "پیراهن تترون", kind: "shirt", color: "#1f7a72", trim: "#e8f2f0", tag: "تترون", description: "از پارچه‌ی تترون برای استفاده‌ی مکرر و شست‌وشوی چندباره.", details: ["تترون", "زنانه و مردانه", "پیراهن و شلوار"] },
    { id: "tetron-kids", name: "پیراهن تترون بچگانه", kind: "shirt", color: "#8fc1a9", trim: "#f4fbf8", tag: "بچگانه", description: "سایز بچگانه از پارچه‌ی تترون.", details: ["تترون", "بچگانه"] },
  ] satisfies RailGarment[],
};
