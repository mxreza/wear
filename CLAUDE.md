# Mehrpoosh — medical-apparel atelier portfolio

One-page Persian (RTL) **portfolio** (not a shop) for «مهرپوش», a medical-apparel sewing workshop in
Hamedan owned by خانم پریسا طاهری (Parisa Taheri), the contact person on the page. Three collections:
پوشاک بیمار (gown, cap, pants, MRI set), پوشاک جراحی و کادر درمان (spun-bond/اسپان and Tetron/تترون;
women, men, children), پک بیمار (new: admission pack, configurable per ward).

## Goal & facts
- Single conversion: a phone call / messenger contact for a bulk-order enquiry.
- Facts allowed (nothing beyond them): direct production in her own workshop, no middleman; 2,000
  garments/month; supplies hospitals & pharmacies in Hamedan with repeat customers; bulk orders only.
- NEVER mention licenses, permits, certifications or standards. Never invent customer names, years,
  statistics or testimonials — use `[bracketed placeholders]` instead.
- Brand name is one constant, `BRAND_NAME` in `content/site.ts` (provisional). «مهر» = care: let it set
  the tone, never as a pun. Copy: calm, precise, short; no «بهترین/بی‌نظیر», no «!», no emoji; verb-first buttons.

## Stack
- Next.js 15 App Router, React 19, TypeScript, static export (`output: "export"` → `/out`),
  `experimental.inlineCss` (CSS is inlined in the HTML — keeps Lighthouse mobile ≥ 90).
- `motion` 14.6.0 (scroll-linked effects), `lenis` 1.3.27 (smooth scroll). Exact versions pinned.
- Plain CSS in `app/globals.css` (tokens in `:root`). Sections are server components; only the
  pieces in `components/motion/` are client components.
- Fonts (self-hosted, work in Iran): Sahel (`sahel-font`, `app/fonts.css`; 300/400/600/700/900) and
  Cormorant Garamond italic 500 (`@fontsource/cormorant-garamond`, Latin only).
- `trailingSlash: true` → `/products/<slug>/index.html`, so pages work on any plain host as well as Vercel.
- Tailwind v4 + shadcn structure exist ONLY for `components/ui/` (the clothing rail). The rail and its
  Tailwind CSS are loaded lazily in the browser (`components/motion/RailLazy.tsx` → `RailClient.tsx`, which
  imports `app/tailwind.css`) when the rail nears the viewport; `.rail-slot` reserves its height (760px / 640px
  mobile) so nothing shifts. Rendering it on the server made the home HTML 2.3× larger and cost ~6 Lighthouse points.

## Where things are
- `content/site.ts` — ALL copy, collections, lookbook, craft steps, numbers, clients, contact, image paths.
- `app/page.tsx` — section order: Header, Hero, Rail (RailShowcase), Statement, Collections, Lookbook,
  PatientPack, Craft, Numbers, Atelier, Clients, Contact, Footer (one component each in `components/`).
- `app/products/[slug]/page.tsx` — one static page per entry in `products` (content/site.ts): sticky info
  column (collection label, title, summary, garment label, call CTA), photo gallery (first photo full width,
  then pairs), description, numbered details, related products, Contact, Footer. `Header`/`Footer` take
  `home={false}` there so nav links point to `/#section`.
- `products` in content/site.ts drives the lookbook, the product chips on collection cards and the pages.
  The first image of each product is its cover. Add a product = add an entry + photos in `public/images/products/`.
- Collections section fits one screen: `min-height: 100svh` row of three cards on desktop; a swipeable
  scroll-snap row below 1024px (checked at 360/375/390px).
- Clients: `clients.items` = `{ name, logo }`; logo files go in `public/images/clients/` (only with permission).
- `components/Media.tsx` — image or placeholder; always pass `ratio` so photos cause no layout shift.
- `components/SectionHeader.tsx` («No. 0X — label» + stitch), `Stitch.tsx`, `CareLabel.tsx`, `Monogram.tsx`.
- `components/motion/` — SmoothScroll, ScrollProgress, RevealObserver, ParallaxInner, HeroParallax,
  Magnetic, StatementWords, LookbookScroller, CraftThread, CountUp, `useMotionOK` hook.
- `public/images/` — photos; `CREDITS.md` lists the temporary Pexels stock photos.

## Design tokens (`:root` in globals.css)
| Token | Value | Use |
|---|---|---|
| `--teal-900` | #0A3B3A | dark sections, footer, headings |
| `--teal-700` | #0F5C5A | brand, buttons, care labels |
| `--teal-500` | #2E8582 | accents only — NOT text on light (4.1:1) |
| `--teal-100` | #E3EFEE | placeholders, soft backgrounds |
| `--gold-500` | #B8945A | lines, ticks, dots, decoration — NOT text on light (2.7:1) |
| `--gold-300` | #D9C29A | gold text on dark |
| `--gold-700` | #7D6131 | gold text on light (5.4:1) — added for contrast |
| `--paper` / `--surface` | #F7F8F6 / #FFF | page / cards |
| `--ink` / `--ink-muted` | #122524 / #55706D | body / secondary text |
Teal ≈ 60–70% of colour weight, gold ≤ 10% and never a large fill. No gradients except the subtle
radial vignette on dark sections. No pure black. 8pt spacing scale; section padding 160/96/72px;
container 1240px; text ≤ 60ch; asymmetric 12-col layouts.

## Motifs
- Stitch line: dashed 1px (6/6) SVG, draws right→left via `stroke-dashoffset` mask on reveal.
- Measuring tape: ruler ticks (8px, long every 40px) — top scroll-progress bar and the numbers band.
- Care label: tag with punched hole (collection names, «جدید», «مجموعه‌ی جدید»); swings 2° on hover.
- Pattern-paper grid behind Craft; fabric-grain noise (3%) on dark sections. All inline SVG, no image files.
- Cards: NO borders. `--surface` on `--paper`, soft layered shadow, radius 2px, image edge-to-edge.

## Motion rules
- Animate only `transform`, `opacity` (+ SVG stroke-dashoffset/pathLength). Ease `cubic-bezier(.22,1,.36,1)`, 400–900ms, nothing bouncy.
- Content is readable without JS: `<html class="js">` is set by an inline script; reveal CSS only hides
  `[data-reveal]:not(.in)` under `.js`. `RevealObserver` adds `.in`. Never put first-screen content (hero,
  product cover photo) inside a reveal: it then waits for JS and LCP jumps by ~1s.
- Text above the fold must not change line count when the web font swaps in (e.g. breadcrumb is one line,
  fixed height) — otherwise CLS.
- Client motion effects check `useMotionOK()` (mounted + no reduced motion) and render static otherwise.
- `prefers-reduced-motion`: no Lenis, parallax, pinning, scroll-progress or scroll-linked effects; opacity-only fades.
- One pinned element only: the lookbook horizontal strip (≥1024px). Keep its DOM identical in both
  modes (class/style changes only) or reveal observers lose their targets.
- Statement words start at opacity 0.15 (spec); Lighthouse flags this as low contrast while dim.

## Pending (placeholders)
- Logo (monogram «م» in `components/Monogram.tsx`; set `brand.logo` to replace).
- Real client names + logos (`clients.items`) — only centres that really are customers.
- Atelier portrait + workshop photo, `atelier.story`, `[bracketed]` facts in `products` (fabric, type,
  sizes, details), `[پارچه]` for patient wear, WhatsApp/Eitaa links (buttons appear when set).
- Replace ALL temporary Pexels photos (hero, collections, pack, every product) with the workshop's own photos.

## Conventions
- Persian digits in visible Persian text (`lib/fa.ts`); `tel:` uses Latin digits. Latin italic only for
  section numbers («No. 01») and small English labels.
- `dir="rtl"`; logical CSS properties. Touch targets ≥ 44px; check 375 / 768 / 1280 / 1440px.

## Commands
- `npm install` · `npm run dev` (http://localhost:3000) · `npm run build` (static site in `/out`)
- Every push to `main` deploys to Vercel: https://wear-gilt.vercel.app
- FTP deploy to an Iranian host: `.github/workflows/deploy-ftp.yml` (manual; needs FTP secrets).
