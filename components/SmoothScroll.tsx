"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";

/**
 * Bridges Lenis and GSAP so ScrollTrigger reads Lenis' virtual scroll
 * position instead of the native one. Without this the pinned scrub
 * sequence lags a frame behind the smoothed scroll.
 *
 * Skipped entirely under prefers-reduced-motion — smoothing hijacks
 * scroll velocity, which is exactly what those users opted out of.
 */
export default function SmoothScroll() {
  const reduced = useReducedMotion();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger measures start/end offsets on creation. Lazy images
    // and swapped webfonts land after that and change document height,
    // which would leave every trigger firing at the wrong scroll point.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    if (reduced) {
      return () => window.removeEventListener("load", refresh);
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Native scroll on touch: Lenis' touch smoothing fights iOS
      // momentum and hurts perceived responsiveness on phones.
      smoothWheel: true,
      syncTouch: false,
      // Every "Buy" CTA is an #buy anchor, so Lenis has to own hash
      // navigation — native smooth scrolling is disabled while it runs.
      // The offset clears the fixed nav.
      anchors: { offset: -80 },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}
