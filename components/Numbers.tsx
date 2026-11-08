import { numbers } from "@/content/site";
import CountUp from "./motion/CountUp";

const EN = ["Capacity", "Direct", "Hamedan"];

export default function Numbers() {
  return (
    <section className="numbers" aria-label="اعداد کارگاه">
      <div className="numbers-ruler" aria-hidden="true" />
      <div className="numbers-runner" aria-hidden="true" />
      <div className="container numbers-row" data-reveal>
        {numbers.map((n, i) => (
          <div key={n.label} className="number rv" style={{ ["--i" as string]: i }}>
            <span className="number-en latin" lang="en">{EN[i]}</span>
            <span className="number-value">
              {n.value !== null ? <CountUp value={n.value} /> : n.display}
              {n.unit && <span className="number-unit">{n.unit}</span>}
            </span>
            <span className="number-label">{n.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
