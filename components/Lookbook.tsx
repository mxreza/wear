import { lookbookLabels, productHref, productPage, products, sections } from "@/content/site";
import Media from "./Media";
import SectionHeader from "./SectionHeader";
import LookbookScroller from "./motion/LookbookScroller";

export default function Lookbook() {
  const s = sections.lookbook;
  const head = (
    <div className="lb-head">
      <div>
        <SectionHeader id="lookbook" no={s.no} label={s.label} />
        <h2 id="lookbook-title" className="h2 rv" data-reveal>{s.title}</h2>
      </div>
    </div>
  );
  return (
    <LookbookScroller id="lookbook" head={head}>
      {products.map((p, i) => (
        <figure key={p.slug} className="lb-item rv" data-reveal>
          <a className="lb-link" href={productHref(p.slug)} aria-label={`${productPage.view}: ${p.title}`}>
            <Media src={p.images[0]?.src} label={p.images[0]?.label ?? p.title} ratio="4 / 5" contain={p.images[0]?.contain} />
          </a>
          <figcaption className="lb-caption">
            <span className="lb-no latin" dir="ltr" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <a className="lb-title" href={productHref(p.slug)}>{p.title}</a>
            <dl className="garment-label">
              <dt>{lookbookLabels.fabric}</dt><dd>{p.fabric}</dd>
              <dt>{lookbookLabels.use}</dt><dd>{p.use}</dd>
              <dt>{lookbookLabels.type}</dt><dd>{p.type}</dd>
            </dl>
          </figcaption>
        </figure>
      ))}
    </LookbookScroller>
  );
}
