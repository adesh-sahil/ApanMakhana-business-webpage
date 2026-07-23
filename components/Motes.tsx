import { MOTES } from "@/lib/motes";

/**
 * Floating makhana. One fixed layer for the whole page rather than a
 * copy per section — the seeds drift across the entire descent, and a
 * single layer is cheaper than several.
 *
 * Pure CSS animation on deterministic positions (no Math.random at
 * render, so SSR and client markup agree). Hidden entirely under
 * prefers-reduced-motion via globals.css.
 */
export default function Motes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={
            {
              left: m.left,
              top: m.top,
              width: m.size,
              height: m.size,
              "--mote-dur": `${m.dur}s`,
              "--mote-delay": `${m.delay}s`,
              "--mote-x": m.x,
              "--mote-peak": m.peak,
              "--mote-blur": `${m.blur}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
