import { contact, contactSection } from "@/content/site";

export default function Contact() {
  const messengers = [
    { href: contact.whatsapp, label: "واتساپ" },
    { href: contact.eitaa, label: "ایتا" },
    { href: contact.telegram, label: "تلگرام" },
  ].filter((m) => m.href);

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <h2 className="section-title">{contactSection.title}</h2>
          <p>{contactSection.text}</p>
        </div>
        <div className="contact-card">
          <span className="contact-person">{contact.person}</span>
          <span className="contact-phone" dir="ltr">{contact.phoneDisplay}</span>
          <div className="contact-actions">
            <a className="btn btn-tape" href={`tel:${contact.phoneTel}`}>{contactSection.cta}</a>
            {messengers.map((m) => (
              <a key={m.label} className="btn btn-ghost-light" href={m.href} target="_blank" rel="noopener noreferrer">
                {m.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
