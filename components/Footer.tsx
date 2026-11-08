import { brand } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>{brand.fullName}</span>
        <span>{brand.slogan}</span>
      </div>
    </footer>
  );
}
