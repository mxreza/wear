/** Dashed 1px "stitch" line that draws itself (right → left) when its [data-reveal] parent gets `.in`. */
export default function Stitch({ id, className }: { id: string; className?: string }) {
  const mask = `stitch-${id}`;
  return (
    <svg className={`stitch ${className ?? ""}`} aria-hidden="true" focusable="false">
      <defs>
        <mask id={mask} maskUnits="userSpaceOnUse">
          <line className="stitch-draw" x1="100%" y1="1" x2="0" y2="1" pathLength={1} />
        </mask>
      </defs>
      <line className="stitch-line" x1="100%" y1="1" x2="0" y2="1" mask={`url(#${mask})`} />
    </svg>
  );
}
