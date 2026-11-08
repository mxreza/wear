import { statement } from "@/content/site";
import StatementWords from "./motion/StatementWords";
import Stitch from "./Stitch";

export default function Statement() {
  return (
    <section className="statement" aria-label="بیانیه‌ی کارگاه">
      <div className="container">
        <div data-reveal><Stitch id="statement" className="statement-mark" /></div>
        <StatementWords text={statement.text} />
      </div>
    </section>
  );
}
