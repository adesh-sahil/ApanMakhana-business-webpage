"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { SECTIONS } from "@/lib/sections";

/**
 * Deliberately minimal. The spine already carries wayfinding, so the bar
 * only needs identity and the one action that matters. Anchor links use
 * native hash navigation — Lenis intercepts and smooths them.
 */
export default function Nav() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        condensed
          ? "border-b border-ember/20 bg-void/85 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-10 sm:px-14 lg:px-20">
        <a href="#hero" aria-label="Apan Makhana — back to top" className="flex-shrink-0">
          <Image
            src="/logo-bg.png"
            alt="Apan Makhana"
            width={160}
            height={64}
            priority
            quality={75}
            className="h-8 w-auto brightness-0 invert sm:h-9"
          />
        </a>

        {/* Desktop anchors — the spine covers this on mobile */}
        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.slice(1).map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="rounded-full px-4 py-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream/55 transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Channel-neutral on purpose: sends people to the Buy zone to
            pick Amazon or Blinkit, rather than deciding for them. */}
        <a
          href="#buy"
          className="inline-flex min-h-[44px] flex-shrink-0 items-center gap-2 rounded-full bg-gold px-5 font-sans text-[0.8rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] sm:text-sm"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={2} />
          Buy
        </a>
      </nav>
    </header>
  );
}
