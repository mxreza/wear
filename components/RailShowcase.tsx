import { cta, rail } from "@/content/site";
import RailLazy from "./motion/RailLazy";

export default function RailShowcase() {
  return (
    <div id="rail" className="rail-section">
      <div className="container">
        <RailLazy
          items={rail.items}
          eyebrow={rail.eyebrow}
          heading={rail.heading}
          caption={rail.caption}
          labels={rail.labels}
          hanger="wood"
          autoplay
          className="rail-frame"
          action={<a className="btn btn-primary" href="#contact">{cta.primary}</a>}
          fallback={
            <div className="rail-fallback">
              <p className="muted">{rail.eyebrow}</p>
              <h2 className="h2">{rail.heading}</h2>
            </div>
          }
        />
      </div>
    </div>
  );
}
