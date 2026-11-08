import { clients, sections } from "@/content/site";
import SectionHeader from "./SectionHeader";

/** "بیمارستان بعثت" → "ب" (first letter after the word بیمارستان), used until a logo file is added. */
const initial = (name: string) => name.replace(/^بیمارستان\s+(قلب\s+)?/, "").trim().charAt(0);

export default function Clients() {
  const s = sections.clients;
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        <SectionHeader id="clients" no={s.no} label={s.label} />
        <h2 id="clients-title" className="clients-title rv" data-reveal>{clients.title}</h2>
        <ul className="clients-list" data-reveal>
          {clients.items.map((c, i) => (
            <li key={i} className="client rv" style={{ ["--i" as string]: i }}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="client-logo" src={c.logo} alt="" loading="lazy" />
              ) : (
                <span className="client-logo client-logo--ph" aria-hidden="true">{initial(c.name)}</span>
              )}
              <span className="client-name">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
