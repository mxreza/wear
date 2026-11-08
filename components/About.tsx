import { about } from "@/content/site";
import Media from "./Media";

export default function About() {
  return (
    <section id="about" className="container about">
      <div className="about-media frame">
        <Media src={about.image} label={about.imageLabel} />
      </div>
      <div className="about-copy">
        <h2 className="section-title">{about.title}</h2>
        <p className="muted">{about.text}</p>
        <p className="about-story">{about.story}</p>
      </div>
    </section>
  );
}
