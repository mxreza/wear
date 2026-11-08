import { stats } from "@/content/site";

export default function StatsBand() {
  return (
    <section className="tape" aria-label="اعداد کلیدی">
      <div className="tape-ruler" aria-hidden="true" />
      <div className="container tape-row">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="tape-ruler" aria-hidden="true" />
    </section>
  );
}
