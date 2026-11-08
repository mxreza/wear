import Stitch from "./Stitch";

type Props = { id: string; no: string; label: string };

/** "No. 01 — مجموعه‌ها" with characters sliding up and a stitch line drawing on reveal. */
export default function SectionHeader({ id, no, label }: Props) {
  return (
    <div className="sh" data-reveal>
      <p className="sh-meta">
        <span className="sh-no latin" dir="ltr">
          {[...no].map((ch, i) => (
            <span key={i} className="ch" style={{ ["--c" as string]: i }} aria-hidden="true">{ch}</span>
          ))}
          <span className="visually-hidden">{no}</span>
        </span>
        <span className="sh-sep" aria-hidden="true">—</span>
        <span className="sh-label">{label}</span>
      </p>
      <Stitch id={id} />
    </div>
  );
}
