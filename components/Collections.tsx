import { collections, sections } from "@/content/site";
import CareLabel from "./CareLabel";
import Media from "./Media";
import SectionHeader from "./SectionHeader";

const RATIOS = ["4 / 3", "4 / 5", "16 / 10"];

export default function Collections() {
  const s = sections.collections;
  return (
    <section id="collections" className="section" aria-labelledby="collections-title">
      <div className="container">
        <div className="collections-head">
          <div className="sh-wrap"><SectionHeader id="collections" no={s.no} label={s.label} /></div>
          <h2 id="collections-title" className="h2 rv" data-reveal>{s.title}</h2>
        </div>
        <div className="collections-grid">
          {collections.map((c, i) => (
            <article key={c.id} className="card rv" data-reveal>
              <Media src={c.image} label={c.imageLabel} ratio={RATIOS[i % RATIOS.length]} parallax />
              <div className="card-body">
                <div className="card-title-row">
                  <CareLabel as="h3">{c.name}</CareLabel>
                  {c.isNew && <CareLabel variant="gold" size="sm">جدید</CareLabel>}
                </div>
                <p className="muted prose">{c.text}</p>
                <dl className="card-materials">
                  <dt>{c.id === "pack" ? "اقلام" : "پارچه"}</dt>
                  {c.materials.map((m) => <dd key={m}>{m}</dd>)}
                </dl>
                <a className="link" href={c.href}>{c.cta}<span className="visually-hidden">: {c.name}</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
