"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PACKS } from "@/lib/products";

/**
 * The pack range. The old site sold one unnamed pack; the catalogue has
 * four. Deliberately no prices — marketplace pricing moves on its own
 * and a stale number on a shopping site costs trust. Each pack links
 * nowhere on its own; the single buy decision lives in the Buy zone.
 */
export default function Range() {
  return (
    <section id="range" className="relative overflow-hidden py-24 sm:py-32">
      <div className="spotlight spotlight-moss left-[-10%] top-[15%] h-[55vh] w-[65vw]" />

      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">The range</p>
          <h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,10vw,4.5rem)] text-cream lg:text-[clamp(3rem,5vw,4.75rem)]">
            Four packs.{" "}
            <span className="italic text-gold">One standard.</span>
          </h2>
        </motion.div>

        {/* Packs lit on the dark field. The cutouts came out of the
            catalogue with real alpha, so no white boxes. */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {PACKS.map((p, i) => (
            <motion.figure
              key={p.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.09 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative flex h-44 w-full items-end justify-center sm:h-56 lg:h-64">
                <div className="absolute bottom-2 h-16 w-3/4 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:bg-gold/20" />
                <Image
                  src={p.image}
                  alt={`Apan Makhana ${p.size} ${p.variant} pack`}
                  width={620}
                  height={840}
                  quality={90}
                  sizes="(max-width: 1023px) 40vw, 20vw"
                  loading="lazy"
                  className="lit-product relative h-full w-auto object-contain transition-transform duration-700 group-hover:-translate-y-2"
                />
              </div>

              <figcaption className="mt-6 w-full border-t border-ember/20 pt-4">
                <p className="font-display text-2xl text-cream sm:text-3xl">
                  {p.size}
                </p>
                <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold/80">
                  {p.variant}
                </p>
                <p className="mt-2 font-sans text-[0.8rem] text-cream/55">
                  {p.note}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
