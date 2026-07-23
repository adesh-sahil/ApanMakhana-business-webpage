/**
 * Madhubani (Mithila) folk-art motifs, drawn as hairline strokes.
 *
 * These are not decoration. Madhubani is the folk painting tradition of
 * the exact region this makhana is grown in, and makhana is literally a
 * lotus seed — so the lotus is the product, and the fish is Mithila's
 * traditional symbol of prosperity. Pure SVG, so the atmosphere costs
 * nothing against the LCP budget.
 */

type MotifProps = {
  className?: string;
  strokeWidth?: number;
};

/** Lotus in bloom — the seed's origin, and the top of the descent. */
export function Lotus({ className, strokeWidth = 1 }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Centre pod */}
      <circle cx="24" cy="26" r="4" />
      <circle cx="24" cy="26" r="1.4" />
      {/* Inner petals */}
      <path d="M24 22c-3-4-3-8 0-11 3 3 3 7 0 11Z" />
      <path d="M20.5 23.5c-4.5-2-6.5-5.5-6-9.5 4 1 6.5 4.5 6 9.5Z" />
      <path d="M27.5 23.5c4.5-2 6.5-5.5 6-9.5-4 1-6.5 4.5-6 9.5Z" />
      {/* Outer petals, double-outlined in the Madhubani manner */}
      <path d="M19 27c-6 0-10-2.5-12-6.5 4-2 9 0 12 6.5Z" />
      <path d="M29 27c6 0 10-2.5 12-6.5-4-2-9 0-12 6.5Z" />
      <path d="M20 29.5c-5 2.5-7.5 6-7.5 10.5 4.5-1 7-4.5 7.5-10.5Z" />
      <path d="M28 29.5c5 2.5 7.5 6 7.5 10.5-4.5-1-7-4.5-7.5-10.5Z" />
      {/* Hatching — Madhubani never leaves a surface empty */}
      <path d="M24 30v6M22 31.5l-1 4M26 31.5l1 4" opacity="0.5" />
    </svg>
  );
}

/** Fish — Mithila's symbol of prosperity, and the pond floor. */
export function Fish({ className, strokeWidth = 1 }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 24c6-9 22-9 30 0-8 9-24 9-30 0Z" />
      <path d="M34 24c2.5-3 6-5 10-6-1.5 4-1.5 8 0 12-4-1-7.5-3-10-6Z" />
      <circle cx="13" cy="21.5" r="1.2" />
      {/* Scale hatching */}
      <path
        d="M16 18.5c2 3.5 2 7.5 0 11M21 17.5c2 4 2 9 0 13M26 18c1.8 4 1.8 8 0 12"
        opacity="0.55"
      />
      <path d="M14 30.5c4 2.5 10 2.5 15 0" opacity="0.4" />
    </svg>
  );
}

/** Sun — the sun-drying step, and the page's energy zone. */
export function Sun({ className, strokeWidth = 1 }: MotifProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="5.5" opacity="0.55" />
      {/* Rays are rounded to 3dp: Math.cos/sin can differ in the last
          bits between Node and the browser's V8, which is enough to
          trip a hydration mismatch on the `d` attribute. */}
      {[...Array(12)].map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const r = (n: number) => n.toFixed(3);
        const x1 = r(24 + Math.cos(a) * 12);
        const y1 = r(24 + Math.sin(a) * 12);
        const x2 = r(24 + Math.cos(a) * 17);
        const y2 = r(24 + Math.sin(a) * 17);
        return <path key={i} d={`M${x1} ${y1}L${x2} ${y2}`} />;
      })}
    </svg>
  );
}

/** Small diamond node used along the spine between the bookend motifs. */
export function Node({ className, strokeWidth = 1 }: MotifProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      <path d="M8 1.5 14.5 8 8 14.5 1.5 8Z" />
    </svg>
  );
}
