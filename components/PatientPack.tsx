import { pack, sections } from "@/content/site";
import { faDigits } from "@/lib/fa";
import CareLabel from "./CareLabel";
import Media from "./Media";
import SectionHeader from "./SectionHeader";

export default function PatientPack() {
  const s = sections.pack;
  return (
    <section id="pack" className="section on-dark" aria-labelledby="pack-title">
      <div className="container pack-grid">
        <div className="pack-copy" data-reveal>
          <SectionHeader id="pack" no={s.no} label={s.label} />
          <CareLabel variant="gold">{pack.badge}</CareLabel>
          <h2 id="pack-title" className="pack-title rv">{pack.title}</h2>
          <p className="muted prose rv" style={{ ["--i" as string]: 1 }}>{pack.text}</p>
          <ol className="pack-list">
            {pack.items.map((item, i) => (
              <li key={item} className="pack-item drop" style={{ ["--i" as string]: i }}>
                <span className="pack-num" aria-hidden="true">{faDigits(i + 1)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <a className="btn btn-light rv" style={{ ["--i" as string]: 6 }} href="#contact">{pack.cta}</a>
        </div>
        <div className="pack-media rv" data-reveal>
          <Media src={pack.image} label={pack.imageLabel} ratio="4 / 5" parallax />
        </div>
      </div>
    </section>
  );
}
