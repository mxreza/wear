import { brand, nav } from "@/content/site";
import Monogram from "./Monogram";
import Stitch from "./Stitch";

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="wordmark" aria-label={brand.fullName}>
              <Monogram />
              <span className="wordmark-name">{brand.name}</span>
            </a>
            <p className="muted">{brand.description}</p>
          </div>
          <nav className="footer-nav" aria-label="پیوندهای پایین صفحه">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <Stitch id="footer" />
        <div className="footer-bottom">
          <span>{brand.fullName}</span>
          <span>{brand.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}
