import { brand } from "@/content/site";

/** Placeholder logo: «م» in a thin gold circle with a stitched outline. */
export default function Monogram() {
  if (brand.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="monogram" src={brand.logo} alt="" width={44} height={44} />;
  }
  return (
    <svg className="monogram" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
      <circle cx="22" cy="22" r="20.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="22" r="17" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2.4 2.4" />
      <text className="monogram-letter" x="22" y="24" textAnchor="middle" dominantBaseline="middle">{brand.monogram}</text>
    </svg>
  );
}
