"use client";

import { useEffect, useState } from "react";

/**
 * True when the OS asks for reduced motion. Drives the hard cut from
 * scroll-scrubbing to plain fades.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * True on phones/small tablets. 90%+ of traffic lands here, so this gates
 * the expensive pinned scrub in favour of cheap one-shot reveals.
 *
 * Starts `true` so the first client render matches the mobile-first server
 * output and never flashes the heavy desktop path on a phone.
 */
export function useIsSmallScreen(query = "(max-width: 1023px)") {
  const [small, setSmall] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setSmall(mq.matches);
    const onChange = () => setSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return small;
}
