import "@/app/tailwind.css";
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { rail } from "@/content/site";

export default function RailShowcase() {
  return (
    <div id="rail" className="container rail-section">
      <ClothingRailHero
        items={rail.items}
        eyebrow={rail.eyebrow}
        heading={rail.heading}
        caption={rail.caption}
        labels={rail.labels}
        hanger="wood"
        autoplay
        className="rail-frame"
        action={<a className="btn btn-accent" href="#contact">{rail.cta}</a>}
      />
    </div>
  );
}
