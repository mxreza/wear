import ParallaxInner from "./motion/ParallaxInner";

type Props = {
  src?: string;
  label: string;
  /** CSS aspect-ratio, e.g. "4 / 5". Reserves space so swapping in a photo causes no layout shift. */
  ratio: string;
  priority?: boolean;
  /** Show the whole photo (white-background product shots) instead of cropping it to fill the frame. */
  contain?: boolean;
  parallax?: boolean;
  className?: string;
};

/** Image when `src` is set, otherwise a tinted placeholder with a stitched inner outline and the label. */
export default function Media({ src, label, ratio, priority, parallax, contain, className }: Props) {
  const content = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={contain ? "media-img media-img--contain" : "media-img"}
      src={src}
      alt={label}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  ) : (
    <div className="ph" role="img" aria-label={label}>{label}</div>
  );
  return (
    <div className={`frame ${className ?? ""}`} style={{ aspectRatio: ratio }}>
      {parallax ? <ParallaxInner>{content}</ParallaxInner> : <div className="frame-inner">{content}</div>}
    </div>
  );
}
