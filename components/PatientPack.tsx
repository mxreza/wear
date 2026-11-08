import { pack } from "@/content/site";
import Media from "./Media";

const faDigits = (n: number) => n.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function PatientPack() {
  return (
    <section id="pack" className="pack">
      <div className="container pack-inner">
        <div className="pack-copy">
          <span className="badge">{pack.badge}</span>
          <h2 className="section-title">{pack.title}</h2>
          <p className="pack-text">{pack.text}</p>
          <ol className="pack-list">
            {pack.items.map((item, i) => (
              <li key={item}>
                <span className="pack-num" aria-hidden="true">{faDigits(i + 1)}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <a className="btn btn-tape" href="#contact">{pack.cta}</a>
        </div>
        <div className="pack-media frame frame-tape">
          <Media src={pack.image} label={pack.imageLabel} dark />
        </div>
      </div>
    </section>
  );
}
