import { steps } from "@/content/site";

const faDigits = (n: number) => n.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="section-title">سفارش در چهار مرحله</h2>
        <ol className="grid-4" style={{ listStyle: "none", padding: 0 }}>
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-num" aria-hidden="true">{faDigits(i + 1)}</span>
              <h3>{s.title}</h3>
              <p className="muted small">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
