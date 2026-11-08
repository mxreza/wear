import { lookbook, lookbookLabels, sections } from "@/content/site";
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
      {lookbook.map((item, i) => (
        <figure key={item.title} className="lb-item rv" data-reveal>
          <Media src={item.image} label={item.imageLabel} ratio="4 / 5" />
          <figcaption className="lb-caption">
            <span className="lb-no latin" dir="ltr" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className="lb-title">{item.title}</span>
            <dl className="garment-label">
              <dt>{lookbookLabels.fabric}</dt><dd>{item.fabric}</dd>
              <dt>{lookbookLabels.use}</dt><dd>{item.use}</dd>
              <dt>{lookbookLabels.type}</dt><dd>{item.type}</dd>
            </dl>
          </figcaption>
        </figure>
      ))}
    </LookbookScroller>
  );
}
