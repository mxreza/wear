import { contact, contactSection, sections } from "@/content/site";
import SectionHeader from "./SectionHeader";
import Magnetic from "./motion/Magnetic";

export default function Contact() {
  const s = sections.contact;
  const messengers = [
    { href: contact.whatsapp, label: contactSection.whatsapp },
    { href: contact.eitaa, label: contactSection.eitaa },
  ].filter((m) => m.href);
  let d = 0;
  return (
    <section id="contact" className="section on-dark" aria-labelledby="contact-title">
      <div className="container contact-grid" data-reveal>
        <div className="contact-copy">
          <SectionHeader id="contact" no={s.no} label={s.label} />
          <h2 id="contact-title" className="contact-title rv">{contactSection.title}</h2>
          <p className="muted prose rv" style={{ ["--i" as string]: 1 }}>{contactSection.text}</p>
        </div>
        <div className="contact-card rv" style={{ ["--i" as string]: 2 }}>
          <span className="contact-person">{contact.person}</span>
          <span className="contact-role">{contact.role}</span>
          <a className="phone" href={`tel:${contact.phoneTel}`} aria-label={`${contactSection.call}: ${contact.phoneDisplay}`}>
            {[...contact.phoneDisplay].map((ch, i) => (
              <span key={i} className="d" aria-hidden="true" style={{ ["--d" as string]: ch === " " ? d : d++ }}>{ch}</span>
            ))}
          </a>
          <div className="contact-actions">
            <Magnetic><a className="btn btn-light" href={`tel:${contact.phoneTel}`}>{contactSection.call}</a></Magnetic>
            {messengers.map((m) => (
              <a key={m.label} className="btn btn-outline-light" href={m.href} target="_blank" rel="noopener noreferrer">{m.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
