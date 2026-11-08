// Shows a real image when `src` is set, otherwise a labelled placeholder.
type Props = { src?: string; label: string; dark?: boolean };

export default function Media({ src, label, dark }: Props) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="ph-img" src={src} alt={label} loading="lazy" />;
  }
  return (
    <div className={dark ? "ph ph-dark" : "ph"} role="img" aria-label={label}>
      {label}
    </div>
  );
}
