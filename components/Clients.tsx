import { clients, sections } from "@/content/site";
import SectionHeader from "./SectionHeader";

export default function Clients() {
  const s = sections.clients;
  return (
    <section className="clients" aria-labelledby="clients-title">
      <div className="container">
        <SectionHeader id="clients" no={s.no} label={s.label} />
        <h2 id="clients-title" className="clients-title rv" data-reveal>{clients.title}</h2>
        <ul className="clients-list" data-reveal>
          {clients.names.map((name, i) => (
            <li key={i} className="rv" style={{ ["--i" as string]: i }}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
