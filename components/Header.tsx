import { brand, nav } from "@/content/site";

export default function Header() {
  return (
    <header className="container header">
      <a href="#top" className="logo" aria-label={brand.fullName}>
        {brand.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={brand.logo} alt="" width={52} height={52} />
        ) : (
          <span className="logo-mark" aria-hidden="true">م</span>
        )}
        <span className="logo-text">
          <span className="logo-name">{brand.name}</span>
          <span className="logo-sub">{brand.tagline}</span>
        </span>
      </a>
      <nav className="nav" aria-label="منوی اصلی">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a className="btn btn-accent" href="#contact">استعلام قیمت</a>
      </nav>
    </header>
  );
}
