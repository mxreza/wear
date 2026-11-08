import { gallery } from "@/content/site";
import Media from "./Media";

export default function Gallery() {
  return (
    <section id="gallery" className="container section">
      <h2 className="section-title">نمونه‌کارها</h2>
      <div className="grid-gallery">
        {gallery.map((g) => (
          <div className="gallery-item" key={g.label}>
            <Media src={g.image} label={g.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
