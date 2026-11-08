import { craftSteps, sections } from "@/content/site";
import SectionHeader from "./SectionHeader";
import CraftThread from "./motion/CraftThread";

export default function Craft() {
  const s = sections.craft;
  return (
    <section id="craft" className="section craft" aria-labelledby="craft-title">
      <div className="container">
        <div className="craft-head">
          <SectionHeader id="craft" no={s.no} label={s.label} />
          <h2 id="craft-title" className="h2 rv" data-reveal>{s.title}</h2>
        </div>
        <CraftThread>
          {craftSteps.map((step, i) => (
            <li key={step.title} className="craft-step rv" data-reveal style={{ ["--i" as string]: i }}>
              <span className="craft-knot" aria-hidden="true" />
              <span className="craft-en latin" lang="en">{step.en}</span>
              <h3 className="craft-title">{step.title}</h3>
              <p className="craft-text">{step.text}</p>
            </li>
          ))}
        </CraftThread>
      </div>
    </section>
  );
}
