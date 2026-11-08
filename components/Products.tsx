import { products } from "@/content/site";
import Media from "./Media";

export default function Products() {
  return (
    <section id="products" className="container section">
      <div className="section-head">
        <h2 className="section-title">محصولات مهرپوش</h2>
        <p className="muted">
          از لباس بیمار تا لباس کادر درمان، زنانه، مردانه و بچگانه. اسپان برای مصرف سبک و اقتصادی، تترون برای استفاده‌ی مکرر.
        </p>
      </div>
      <div className="grid-cards">
        {products.map((p) => (
          <article className="card" key={p.title}>
            <div className="card-media">
              <Media src={p.image} label={p.imageLabel} />
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="muted small">{p.text}</p>
              <a className="link" href={p.href}>{p.cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
