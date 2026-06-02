/* Outline Strategy — brand mark.
   A minimal concentric target: clarity, focus, the objective.
   Outer ring + centre use currentColor (so the mark inverts on dark
   backgrounds); the inner ring uses the slate accent.                 */

type LogoMarkProps = {
  size?: number;
  accent?: string;
  className?: string;
};

export function LogoMark({
  size = 24,
  accent = "#94A3B8",
  className,
}: LogoMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.25" />
      <circle cx="20" cy="20" r="7.5" stroke={accent} strokeWidth="2.25" />
      <circle cx="20" cy="20" r="2.75" fill="currentColor" />
    </svg>
  );
}
