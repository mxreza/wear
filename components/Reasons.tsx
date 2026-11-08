import { reasons } from "@/content/site";

export default function Reasons() {
  return (
    <section className="container section">
      <h2 className="section-title">چرا سفارش مستقیم از تولیدی؟</h2>
      <div className="grid-4">
        {reasons.map((r) => (
          <div className="reason" key={r.title}>
            <h3>{r.title}</h3>
            <p className="muted small">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
