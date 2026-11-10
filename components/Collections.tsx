import { collections, productHref, productsIn, sections } from "@/content/site";
import CareLabel from "./CareLabel";
import Media from "./Media";
import SectionHeader from "./SectionHeader";

/** All three collections fit in one screen (desktop row; on phones a swipeable row). */
export default function Collections() {
  const s = sections.collections;
  return (
    <section id="collections" className="collections" aria-labelledby="collections-title">
      <div className="container collections-inner">
        <div className="collections-head">
          <SectionHeader id="collections" no={s.no} label={s.label} />
          <h2 id="collections-title" className="collections-title rv" data-reveal>{s.title}</h2>
        </div>
        <ul className="collections-row" data-reveal>
          {collections.map((c, i) => (
            <li key={c.id} className="card collection-card rv" style={{ ["--i" as string]: i }}>
              <Media src={c.image} label={c.imageLabel} ratio="3 / 2" parallax={!c.imageContain} contain={c.imageContain} />
              <div className="card-body">
                <div className="card-title-row">
                  <CareLabel as="h3">{c.name}</CareLabel>
                  {c.isNew && <CareLabel variant="gold" size="sm">جدید</CareLabel>}
                </div>
                <p className="muted card-text">{c.text}</p>
                <dl className="card-materials">
                  <dt>{c.id === "pack" ? "اقلام" : "پارچه"}</dt>
                  {c.materials.map((m) => <dd key={m}>{m}</dd>)}
                </dl>
                <ul className="card-products" aria-label={`محصولات ${c.name}`}>
                  {productsIn(c.id as "patient" | "staff" | "pack").map((p) => (
                    <li key={p.slug}><a className="chip" href={productHref(p.slug)}>{p.title}</a></li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
