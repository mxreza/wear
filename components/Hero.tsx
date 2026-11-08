import { hero } from "@/content/site";
import Media from "./Media";

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <h1>{hero.title}</h1>
        <div className="stitch" aria-hidden="true" />
        <p className="hero-text">{hero.text}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#contact">استعلام قیمت سفارش عمده</a>
          <a className="btn btn-outline" href="#products">دیدن محصولات</a>
        </div>
        <p className="hero-proof">{hero.proof}</p>
      </div>
      <div className="hero-media frame">
        <Media src={hero.image} label={hero.imageLabel} />
      </div>
    </section>
  );
}
