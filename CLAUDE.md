# Parsa medical apparel landing page

One-page Persian (RTL) landing page for «تولیدی پوشاک پزشکی پارسا», a sewing workshop in Hamedan
that produces hospital clothing (patient gowns, MRI sets, spun-bond and Tetron staff wear, patient
packs) for bulk orders from hospitals, clinics, imaging centers and pharmacies.

## Goal of the page
Get bulk-order enquiries (phone call) from procurement staff at medical centers.
Trust is built on: direct production (no middleman), 2,000 pieces/month capacity, repeat customers
in Hamedan. Do NOT mention licenses/permits anywhere.

## Stack
- Next.js 15 App Router, React 19, TypeScript, static export (`output: "export"` → `/out`).
- Plain CSS in `app/globals.css` (design tokens in `:root`) for all hand-written sections.
- Tailwind v4 + shadcn structure ONLY for third-party components in `components/ui/`
  (`app/tailwind.css`, `components.json`, `lib/utils.ts`). Preflight is NOT loaded, so Tailwind
  does not reset the site; shadcn tokens (`--color-foreground` …) map to the site's palette there.
  Don't use Tailwind classes in the hand-written section components.
- Font: Vazirmatn via `@fontsource/vazirmatn` (self-hosted, no Google Fonts call — works in Iran).

## Where things are
- `content/site.ts` — ALL copy, products, contact info, image paths. Edit content here, not in components.
- `components/` — one component per section, in page order (see `app/page.tsx`).
- `components/RailShowcase.tsx` + `components/ui/product-rail-gallery.tsx` — interactive clothing rail
  (2nd section). Content in `rail` in `content/site.ts`; garments are drawn until photos are added.
- `components/Media.tsx` — shows an image if `src` is set, else a labelled placeholder.
- `public/images/` — put real photos and logo here, then reference them as `/images/<file>`.

## Pending (placeholders still in place)
- Logo (currently a green circle with «پ»).
- Rail garment photos (`image`/`backImage`/`sideImage`, transparent 200×310 cut-outs).
- Real photos for hero, 5 products, patient pack, 6 gallery items, workshop. These currently show
  TEMPORARY Pexels stock photos (list in `public/images/CREDITS.md`) — replace before launch.
- Workshop story line in `about.story`.
- WhatsApp / Eitaa / Telegram links in `contact` (buttons appear automatically when set).
- Patient pack is a new product, not yet sold — keep the «جدید» badge until real photos exist.

## Conventions
- Persian digits in visible text (۰–۹); phone `tel:` link uses Latin digits.
- Keep `dir="rtl"`; use logical CSS (`padding-inline`, `text-align` start/end) for new rules.
- Design motifs: dashed "stitch" borders, yellow measuring-tape band. Keep them; avoid gradients and emoji.
- Touch targets ≥ 44px; check at 375px width.

## Commands
- `npm install`
- `npm run dev` — local preview at http://localhost:3000
- `npm run build` — static site in `/out`, upload its contents to any host
