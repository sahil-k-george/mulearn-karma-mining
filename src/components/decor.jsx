/* Reusable decorative elements — CSS/SVG only, no image assets.
   All are aria-hidden; they carry no information. */

export function Squiggle({ color = "#111111", width = 150, label = "decorative squiggle" }) {
  return (
    <svg
      width={width}
      height="30"
      viewBox="0 0 150 30"
      fill="none"
      role="presentation"
      aria-label={label}
    >
      <path
        d="M3 20 Q 18 5, 33 17 T 63 17 T 93 17 T 123 17 T 153 15"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
