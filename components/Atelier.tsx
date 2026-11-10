import { atelier, sections } from "@/content/site";
import Media from "./Media";
import SectionHeader from "./SectionHeader";
import Stitch from "./Stitch";

export default function Atelier() {
  const s = sections.atelier;
  return (
    <section id="atelier" className="section" aria-labelledby="atelier-title">
      <div className="container atelier-grid">
        <div className="atelier-copy" data-reveal>
          <SectionHeader id="atelier" no={s.no} label={s.label} />
          <h2 id="atelier-title" className="h2 rv">{atelier.title}</h2>
          <p className="prose rv" style={{ ["--i" as string]: 1 }}>{atelier.text}</p>
          <p className="prose atelier-story rv" style={{ ["--i" as string]: 2 }}>{atelier.story}</p>
          <p className="atelier-sign rv" style={{ ["--i" as string]: 3 }}><Stitch id="sign" />{atelier.signature}</p>
        </div>
        <div className="atelier-media rv" data-reveal>
          <Media src={atelier.image} label={atelier.imageLabel} ratio="819 / 545" parallax />
        </div>
      </div>
    </section>
  );
}
