type Props = { children: React.ReactNode; variant?: "teal" | "gold"; size?: "md" | "sm"; as?: "span" | "h3" };

/** Hanging garment tag with a punched hole; swings 2° on hover. */
export default function CareLabel({ children, variant = "teal", size = "md", as: Tag = "span" }: Props) {
  const cls = ["care-label", variant === "gold" && "care-label--gold", size === "sm" && "care-label--sm"].filter(Boolean).join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
