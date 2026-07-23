"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Lotus, Fish, Node } from "./Madhubani";
import { SECTIONS } from "@/lib/sections";
import { useReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * THE SIGNATURE ELEMENT.
 *
 * A single hairline rail running the full height of the document, with
 * a lotus at the surface and a fish at the pond floor — the descent a
 * makhana diver actually makes. Section markers sit at each section's
 * true document offset and illuminate as you pass them.
 *
 * This is the structural answer to "stacked sections": one unbroken
 * thread ties every zone to the next, so the page reads as a single
 * continuous descent rather than a pile of independent blocks.
 */
export default function Spine() {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Fractional document position of each section, measured on mount.
  // Mirrored into a ref so the scroll handler can read it without
  // re-subscribing on every state change.
  const [offsets, setOffsets] = useState<number[]>([]);
  const offsetsRef = useRef<number[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const measure = () => {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;

        const next = SECTIONS.map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return 0;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return Math.min(1, Math.max(0, top / docHeight));
        });

        offsetsRef.current = next;
        setOffsets(next);
      };

      measure();

      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        onRefresh: measure,
        onUpdate: (self) => {
          if (fill.current) {
            // Direct set, not a tween — the rail must track scroll exactly.
            gsap.set(fill.current, { scaleY: self.progress });
          }

          // Light the last marker we've reached. setActive bails out
          // internally when the value is unchanged, so this is cheap.
          const marks = offsetsRef.current;
          if (marks.length) {
            let idx = 0;
            for (let i = 0; i < marks.length; i++) {
              if (self.progress >= marks[i] - 0.02) idx = i;
            }
            setActive(idx);
          }
        },
      });

      return () => st.kill();
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-3 z-30 w-6 sm:left-6 lg:left-10 lg:w-8"
    >
      {/* Lotus at the surface. Sits below the nav band — the condensed
          nav is z-40 and would otherwise clip it. */}
      <div className="absolute left-1/2 top-[13svh] -translate-x-1/2 text-gold/45">
        <Lotus className="h-6 w-6 lg:h-8 lg:w-8" strokeWidth={0.9} />
      </div>

      {/* Dim rail — spans 20svh..86svh; markers below share that range. */}
      <div className="absolute left-1/2 top-[20svh] bottom-[14svh] w-px -translate-x-1/2 bg-ember/25" />

      {/* Gold progress fill */}
      <div
        ref={fill}
        className="absolute left-1/2 top-[20svh] bottom-[14svh] w-px origin-top -translate-x-1/2 bg-gradient-to-b from-gold/80 to-gold/30"
        style={{ transform: "scaleY(0)" }}
      />

      {/* Section markers at their real document offsets */}
      {offsets.map((offset, i) => (
        <div
          key={SECTIONS[i].id}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-500"
          style={{ top: `calc(20svh + (66svh * ${offset}))` }}
        >
          <div className="relative flex items-center">
            <Node
              className={`h-2 w-2 transition-all duration-500 lg:h-2.5 lg:w-2.5 ${
                i <= active
                  ? "text-gold opacity-100"
                  : "text-ember opacity-40"
              }`}
              strokeWidth={i === active ? 2 : 1.2}
            />
            {/* Labels are desktop-only; on phones the rail stays silent. */}
            <span
              className={`absolute left-5 hidden whitespace-nowrap font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] transition-all duration-500 lg:block ${
                i === active
                  ? "text-gold opacity-100"
                  : "text-cream opacity-0"
              }`}
            >
              {SECTIONS[i].label}
            </span>
          </div>
        </div>
      ))}

      {/* Fish at the pond floor. Sits higher on mobile so the sticky
          buy bar doesn't cover it. */}
      <div className="absolute bottom-[11svh] left-1/2 -translate-x-1/2 text-gold/45 lg:bottom-[6svh]">
        <Fish className="h-5 w-5 lg:h-7 lg:w-7" strokeWidth={0.9} />
      </div>
    </div>
  );
}
