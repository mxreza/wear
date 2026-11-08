import { cta, hero } from "@/content/site";
import Media from "./Media";
import Stitch from "./Stitch";
import Magnetic from "./motion/Magnetic";
import HeroParallax from "./motion/HeroParallax";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow" data-reveal>
            <span className="latin" lang="en">{hero.eyebrow}</span>
            <Stitch id="hero" />
          </p>
          <h1 id="hero-title" className="display hero-title">{hero.title}</h1>
          <p className="lead">{hero.text}</p>
          <div className="hero-actions">
            <Magnetic><a className="btn btn-primary" href="#contact">{cta.primary}</a></Magnetic>
            <a className="link" href="#lookbook">{cta.lookbook}</a>
          </div>
        </div>
        <HeroParallax className="hero-media">
          <Media src={hero.image} label={hero.imageLabel} ratio="4 / 5" priority />
        </HeroParallax>
      </div>
    </section>
  );
}
