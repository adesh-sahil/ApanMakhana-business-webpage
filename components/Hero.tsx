"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { InstagramGlyph } from "./icons";
import { INSTAGRAM_URL } from "@/lib/sections";
import { useReducedMotion } from "@/lib/motion";

/**
 * The thesis: a pouch lit out of the dark, with the origin stated
 * before the brand name. The old hero took 4.2s to assemble; this one
 * resolves in ~1.1s so the LCP text paints fast.
 */
export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Zone light — the hero is lit, not coloured */}
      <div className="spotlight spotlight-gold left-1/2 top-[-10%] h-[70vh] w-[85vw] -translate-x-1/2 lg:left-[62%] lg:w-[55vw]" />
      <div className="spotlight spotlight-moss bottom-[-20%] left-[-10%] h-[50vh] w-[60vw]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-10 sm:px-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-20">
        {/* ---- Copy ---- */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p {...rise(0.05)} className="eyebrow justify-center lg:justify-start">
            From the ponds of Mithila
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="mt-5 text-[clamp(3.5rem,17vw,7rem)] leading-[0.88] lg:text-[clamp(4.5rem,7vw,7.5rem)]"
          >
            <span className="block text-cream">Apan</span>
            <span className="block italic text-gold">Makhana</span>
          </motion.h1>

          <motion.div
            {...rise(0.3)}
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-gold to-transparent lg:mx-0"
          />

          <motion.p
            {...rise(0.38)}
            className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-cream/70 sm:text-lg lg:mx-0"
          >
            India&apos;s premium fox nuts — hand-picked, FSSAI certified and
            100% natural. Rich in protein, antioxidants and goodness.
          </motion.p>

          {/* ---- Actions ---- */}
          <motion.div
            {...rise(0.5)}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <a
              href="#buy"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-gold px-8 font-sans text-[0.95rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
              Buy Apan Makhana
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-cream/20 px-7 font-sans text-[0.95rem] font-semibold text-cream/85 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
            >
              <InstagramGlyph className="h-[18px] w-[18px]" />
              @apan.makhana
            </a>
          </motion.div>

          <motion.ul
            {...rise(0.62)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-cream/60 lg:justify-start"
          >
            <li>FSSAI Certified</li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-ember" />
            <li>100% Natural</li>
            <li aria-hidden className="h-1 w-1 rounded-full bg-ember" />
            <li>Made in India</li>
          </motion.ul>
        </div>

        {/* ---- Product, spotlit ---- */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="idle-float relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-gold/10 blur-3xl" />
            {/* Cutout carries real alpha from the catalogue source, so
                the pouch is lit by the page rather than sitting in a
                white box. No rounded corners — it's a silhouette now. */}
            <Image
              src="/packs/pack-250-traditional.png"
              alt="Apan Makhana premium fox nuts pouch"
              width={539}
              height={760}
              priority
              quality={90}
              sizes="(max-width: 1023px) 62vw, 34vw"
              className="lit-product relative w-[62vw] max-w-[300px] lg:w-full lg:max-w-[360px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
