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
  image: "/images/hero-team.webp",
  imageLabel: "پنج نفر از کادر درمان با لباس فرم و کلاه، در رنگ‌های طوسی، آبی، سبز زیتونی و کرم",
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
  /** White-background product shot: show it whole instead of cropping. */
  imageContain?: boolean;
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
  },
  {
    id: "staff",
    name: "پوشاک جراحی و کادر درمان",
    text: "لباس جراحی برای جراح، پزشک و پرستار؛ بلوز، پیراهن و شلوار، زنانه، مردانه و بچگانه.",
    materials: ["اسپان", "تترون"],
    image: "/images/collection-staff.jpg",
    imageLabel: "کادر درمان با لباس جراحی در اتاق عمل",
  },
  {
    id: "pack",
    name: "پک بیمار",
    text: "پک آماده‌ی پذیرش بیمار، با ترکیبی که برای هر بخش جداگانه بسته می‌شود.",
    materials: ["کیف", "لباس بیمار", "دمپایی", "اقلام بهداشتی"],
    image: "/images/product-pack.webp",
    imageContain: true,
    imageLabel: "کیف کوچک با اقلام بهداشتی",
    isNew: true,
  },
];

/** `contain`: white-background product shot — shown whole instead of cropped. */
export type ProductImage = { src: string; label: string; contain?: boolean };

export type Product = {
  slug: string; // URL: /products/<slug>/
  title: string;
  collection: "patient" | "staff" | "pack";
  fabric: string;
  use: string;
  type: string;
  summary: string;
  description: string[];
  details: string[];
  /** First image is the cover (lookbook + top of the product page). */
  images: ProductImage[];
};

const ORDER_NOTE = "مدل، رنگ و سایز را پیش از دوخت با شما نهایی می‌کنیم تا سفارش در تعداد بالا هم یکدست بماند. فقط سفارش عمده می‌پذیریم.";

/** Every product gets its own page and a place in the lookbook. Photos are temporary Pexels stock. */
export const products: Product[] = [
  {
    slug: "patient-gown",
    title: "گان بیمار",
    collection: "patient",
    fabric: "[پارچه]",
    use: "بخش بستری",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "گان بیمار برای بستری و اقدامات درمانی؛ همراه کلاه و شلوار، در تعداد عمده.",
    description: [
      "گان بیمار در کارگاه خودمان در همدان برش می‌خورد، دوخته می‌شود و بی‌واسطه به مرکز درمانی می‌رسد.",
      ORDER_NOTE,
      "[جزئیات گان: نوع بستن، طول، سایزبندی و رنگ‌های موجود]",
    ],
    details: ["بخش بستری", "همراه کلاه و شلوار", "سفارش عمده", "[سایزبندی]"],
    images: [
      { src: "/images/products/patient-gown-1.jpg", label: "بیمار با گان آبی روی تخت" },
      { src: "/images/products/patient-gown-2.jpg", label: "بیمار با گان روی ویلچر" },
      { src: "/images/products/patient-gown-3.jpg", label: "بیمار با گان در تخت بستری" },
      { src: "/images/products/patient-gown-4.jpg", label: "پرستار کنار بیمار با گان" },
    ],
  },
  {
    slug: "mri-set",
    title: "ست کامل MRI",
    collection: "patient",
    fabric: "[پارچه]",
    use: "مراکز تصویربرداری",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "ست کامل لباس بیمار برای بخش MRI و مراکز تصویربرداری.",
    description: [
      "ست کامل لباس بیمار برای بخش MRI، دوخته‌شده در کارگاه خودمان و تحویل‌شده در تعداد عمده.",
      ORDER_NOTE,
      "[اجزای ست MRI و جزئیات پارچه]",
    ],
    details: ["مراکز تصویربرداری", "ست کامل", "سفارش عمده"],
    images: [
      { src: "/images/products/mri-set-1.jpg", label: "بیمار روی تخت دستگاه MRI" },
      { src: "/images/products/mri-set-2.jpg", label: "اتاق MRI و بیمار آماده‌ی تصویربرداری" },
      { src: "/images/products/mri-set-3.jpg", label: "دستگاه MRI و نمایشگر اتاق کنترل" },
      { src: "/images/products/mri-set-4.jpg", label: "کارشناس تصویربرداری کنار بیمار" },
    ],
  },
  {
    slug: "patient-set",
    title: "کلاه و شلوار بیمار",
    collection: "patient",
    fabric: "[پارچه]",
    use: "بستری و اقدامات درمانی",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "کلاه و شلوار بیمار، جدا یا همراه گان، برای بخش‌های بستری.",
    description: [
      "کلاه و شلوار بیمار را می‌توانید همراه گان یا جداگانه سفارش دهید.",
      ORDER_NOTE,
      "[جزئیات کلاه و شلوار: کش، بند، سایزبندی]",
    ],
    details: ["بستری و اقدامات درمانی", "جدا یا همراه گان", "سفارش عمده"],
    images: [
      { src: "/images/products/patient-set-1.webp", label: "ست گان، کلاه و شلوار بیمار به رنگ سرمه‌ای", contain: true },
      { src: "/images/products/patient-set-3.jpg", label: "بیمار با لباس بیمارستان روی ویلچر در راهرو" },
    ],
  },
  {
    slug: "surgical-scrubs",
    title: "لباس جراحی",
    collection: "staff",
    fabric: "[پارچه]",
    use: "اتاق عمل",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "لباس جراحی برای جراح، پزشک و پرستار؛ زنانه و مردانه.",
    description: [
      "لباس جراحی برای تیم اتاق عمل، از جراح تا پرستار، در کارگاه خودمان دوخته می‌شود.",
      ORDER_NOTE,
      "[جزئیات لباس جراحی: یقه، جیب‌ها، رنگ‌ها]",
    ],
    details: ["اتاق عمل", "جراح، پزشک و پرستار", "زنانه و مردانه", "سفارش عمده"],
    images: [
      { src: "/images/products/surgical-scrubs-1.jpg", label: "تیم جراحی با لباس و کلاه جراحی" },
      { src: "/images/products/surgical-scrubs-2.jpg", label: "کادر درمان با لباس جراحی" },
      { src: "/images/products/surgical-scrubs-3.jpg", label: "جراح با کلاه و ماسک" },
      { src: "/images/products/surgical-scrubs-4.jpg", label: "جراح با لباس جراحی در اتاق عمل" },
    ],
  },
  {
    slug: "spunbond-set",
    title: "بلوز و شلوار اسپان",
    collection: "staff",
    fabric: "اسپان",
    use: "کادر درمان",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "بلوز و شلوار از پارچه‌ی اسپان؛ سبک و اقتصادی برای کادر درمان.",
    description: [
      "بلوز و شلوار اسپان، زنانه و مردانه، برای کادر درمان؛ سبک و اقتصادی.",
      ORDER_NOTE,
      "[جزئیات: گرماژ پارچه، رنگ‌ها، سایزبندی]",
    ],
    details: ["پارچه‌ی اسپان", "زنانه و مردانه", "سبک و اقتصادی", "سفارش عمده"],
    images: [
      { src: "/images/products/spunbond-set-1.jpg", label: "کادر درمان با روپوش آبی" },
      { src: "/images/products/spunbond-set-2.jpg", label: "پوشیدن لباس محافظ در بیمارستان" },
      { src: "/images/products/spunbond-set-3.jpg", label: "پارچه‌ی آبی تاشده" },
    ],
  },
  {
    slug: "tetron-set",
    title: "پیراهن و شلوار تترون",
    collection: "staff",
    fabric: "تترون",
    use: "کادر درمان",
    type: "چندبارمصرف",
    summary: "پیراهن و شلوار تترون برای استفاده‌ی مکرر و شست‌وشوی چندباره.",
    description: [
      "پیراهن و شلوار تترون، زنانه و مردانه، برای کادر درمان؛ برای استفاده‌ی مکرر و شست‌وشوی چندباره.",
      ORDER_NOTE,
      "[جزئیات: رنگ‌ها، جیب‌ها، سایزبندی]",
    ],
    details: ["پارچه‌ی تترون", "زنانه و مردانه", "شست‌وشوی چندباره", "سفارش عمده"],
    images: [
      { src: "/images/products/tetron-set-1.jpg", label: "پرستار با لباس فرم سبز" },
      { src: "/images/products/tetron-set-2.jpg", label: "پرستار با لباس فرم آبی" },
      { src: "/images/products/tetron-set-3.jpg", label: "پزشک با لباس فرم سرمه‌ای" },
      { src: "/images/products/tetron-set-4.jpg", label: "پرستار با لباس فرم در راهروی بیمارستان" },
    ],
  },
  {
    slug: "tetron-kids",
    title: "پوشاک تترون بچگانه",
    collection: "staff",
    fabric: "تترون",
    use: "[بخش / کاربرد]",
    type: "چندبارمصرف",
    summary: "پوشاک تترون در سایز بچگانه.",
    description: [
      "پوشاک تترون در سایز بچگانه، با همان برش و دوخت مجموعه‌ی کادر درمان.",
      ORDER_NOTE,
      "[کاربرد و سایزبندی پوشاک بچگانه]",
    ],
    details: ["پارچه‌ی تترون", "سایز بچگانه", "سفارش عمده"],
    images: [
      { src: "/images/products/tetron-kids-1.jpg", label: "پرستار در راهروی بیمارستان" },
      { src: "/images/products/tetron-kids-2.jpg", label: "پرستار کنار نمایشگر بخش" },
      { src: "/images/products/tetron-kids-3.jpg", label: "پارچه‌های تاشده" },
    ],
  },
  {
    slug: "patient-pack",
    title: "پک بیمار",
    collection: "pack",
    fabric: "—",
    use: "پذیرش بیمار",
    type: "[یکبارمصرف / چندبارمصرف]",
    summary: "هر آنچه بیمار در روز پذیرش نیاز دارد، در یک کیف.",
    description: [
      "به‌جای سفارش جداگانه‌ی هر قلم، یک پک آماده تحویل بگیرید: کیف بیمار، لباس بیمار، دمپایی، لیوان، مسواک و خمیردندان، شامپو، تیغ اصلاح و دستمال کاغذی.",
      "ترکیب پک را برای هر بخش جداگانه می‌بندیم. فقط سفارش عمده می‌پذیریم.",
    ],
    details: ["کیف بیمار", "لباس بیمار", "دمپایی", "لیوان", "مسواک و خمیردندان", "شامپو", "تیغ اصلاح", "دستمال کاغذی", "ترکیب برای هر بخش"],
    images: [
      { src: "/images/products/patient-pack-1.webp", label: "پک بیمار: کیف، لباس بیمار، دمپایی، لیوان، مسواک، خمیردندان، شامپو، تیغ و دستمال کاغذی", contain: true },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const productsIn = (collection: Product["collection"]) => products.filter((p) => p.collection === collection);
export const productHref = (slug: string) => `/products/${slug}/`;

export const productPage = {
  breadcrumbHome: "خانه",
  galleryLabel: "عکس‌های محصول",
  detailsTitle: "ویژگی‌ها",
  related: "دیگر محصولات این مجموعه",
  back: "بازگشت به نمونه‌کارها",
  call: "تماس برای سفارش این محصول",
  view: "دیدن محصول",
};

export const lookbookLabels = { fabric: "پارچه", use: "کاربرد", type: "نوع" };

export const pack = {
  badge: "مجموعه‌ی جدید",
  title: "هر آنچه بیمار در روز پذیرش نیاز دارد، در یک کیف.",
  text: "به‌جای سفارش جداگانه‌ی هر قلم، یک پک آماده تحویل بگیرید. ترکیب پک را برای هر بخش جداگانه می‌بندیم.",
  items: ["کیف بیمار", "لباس بیمار", "دمپایی", "لیوان", "مسواک و خمیردندان", "شامپو", "تیغ اصلاح", "دستمال کاغذی"],
  cta: "طراحی پک برای بخش شما",
  image: "/images/pack.webp",
  imageLabel: "پک بیمار: کیف، لباس بیمار، دمپایی، لیوان، مسواک، خمیردندان، شامپو، تیغ و دستمال کاغذی",
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
  title: "کارگاهی بزرگ، با دقت یک خیاط در هر قطعه",
  text: `لباس‌های ${BRAND_NAME} در کارگاه خودمان در همدان دوخته می‌شوند و بی‌واسطه به بیمارستان‌ها و داروخانه‌ها می‌رسند. بیشتر مشتری‌های ما بارها سفارش داده‌اند و سفارش‌ها ادامه دارد.`,
  /** Optional extra paragraph about the workshop; left empty = not shown. */
  story: "",
  signature: "پریسا طاهری",
  /** Photo supplied by the owner. */
  image: "/images/atelier-workshop-own.webp",
  imageLabel: "سالن تولید با خیاط‌ها پشت چرخ‌های صنعتی و لباس‌های آبی بیمارستانی روی میزها",
};

export const clients = {
  title: "مورد اعتماد بیمارستان‌ها و داروخانه‌های همدان",
  /**
   * Centres Mehrpoosh has worked with (confirmed by the owner, with permission to show their logos).
   * `logo`: put the file in /public/images/clients/ and set e.g. "/images/clients/besat.png".
   * Without a logo, the first letter of the name is shown in a stitched circle.
   */
  items: [
    { name: "بیمارستان بعثت", logo: "" },
    { name: "بیمارستان شهید بهشتی", logo: "" },
    { name: "بیمارستان فرشچیان (سینا)", logo: "" },
    { name: "بیمارستان قلب فرشچیان", logo: "" },
    { name: "بیمارستان فاطمیه", logo: "" },
    { name: "بیمارستان اکباتان", logo: "" },
    { name: "بیمارستان بوعلی", logo: "" },
  ],
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
  caption: "روی لباس‌ها بروید یا بکشید؛ روی هر کدام بزنید تا بزرگ‌تر ببینید.",
  cta: "استعلام قیمت سفارش عمده",
  labels: { front: "جلو", back: "پشت", close: "بستن", show: "نمایش" },
  /**
   * ONLY real garments (owner's product photos, background removed, on a 400×620 transparent canvas —
   * the top of the garment right under the drawn hanger). Add more as photos arrive:
   * `image` = front, optional `backImage` (then a front/back toggle appears in the detail view).
   */
  items: [
    { id: "gown", name: "گان بیمار", image: "/images/rail/patient-gown.webp", tag: "عمده", description: "گان بیمار برای بستری و اقدامات درمانی؛ همراه کلاه و شلوار، در تعداد عمده.", details: ["گان، کلاه و شلوار", "سفارش عمده"] },
    { id: "pants", name: "شلوار بیمار", image: "/images/rail/patient-pants.webp", tag: "عمده", description: "شلوار بیمار با کمر کشی؛ جدا یا همراه گان و کلاه.", details: ["کمر کشی", "جدا یا همراه گان", "سفارش عمده"] },
  ] satisfies RailGarment[],
};
