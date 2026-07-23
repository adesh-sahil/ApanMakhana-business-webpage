"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lotus } from "./Madhubani";

/**
 * The Mithila heritage story. The old site made a heritage claim in one
 * hero line and never returned to it; this zone is where the brand's
 * origin actually gets told.
 */
export default function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden py-24 sm:py-32">
      {/* Deepest point of the descent — the field darkens rather than
          switching to a different background colour. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pond/60 to-transparent" />
      <div className="spotlight spotlight-gold left-[-10%] top-[30%] h-[55vh] w-[65vw]" />

      {/* Oversized lotus watermark — the signature motif at full scale */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.07, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-1/2 -translate-y-1/2 text-gold"
      >
        <Lotus className="h-[80vh] w-[80vh]" strokeWidth={0.4} />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Photograph, offset from the text baseline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/main.jpeg"
              alt="Apan Makhana fox nuts from Mithila, Bihar"
              width={1400}
              height={1050}
              quality={75}
              sizes="(max-width: 1023px) 90vw, 42vw"
              loading="lazy"
              className="w-full rounded-2xl border border-ember/20"
            />
            <div className="absolute -bottom-5 -right-4 rounded-xl border border-ember/30 bg-void/90 px-5 py-3 backdrop-blur-sm sm:-right-6">
              <p className="font-display text-2xl text-gold">Mithila</p>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-cream/60">
                Bihar, India
              </p>
            </div>
          </motion.div>

          {/* Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">The taste of Mithilaa</p>
              <h2 className="mt-6 text-[clamp(2.5rem,10vw,4.25rem)] text-cream lg:text-[clamp(2.75rem,4.5vw,4.5rem)]">
                Rooted in Mithila.{" "}
                <span className="italic text-gold">Crafted with care.</span>
              </h2>
              {/* The brand's own line, in the language it was written in. */}
              <p
                lang="hi"
                className="mt-5 font-devanagari text-lg leading-relaxed text-gold/85 sm:text-xl"
              >
                मिथिला की मिट्टी से जुड़ा, आपके लिए प्यार से तैयार।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 space-y-5 font-sans text-[1.05rem] leading-relaxed text-cream/70"
            >
              <p>
                Mithila is a land where tradition, culture and nature exist in
                perfect harmony. This is where our journey begins — bringing
                together taste, wellness, and a sense of belonging.
              </p>
              <p>
                In our homes, makhana has always been more than just a snack.
                It represents nourishment, devotion, and moments shared with
                family. From simple mornings to sacred occasions, it has been
                part of everyday life.
              </p>
              <p>
                Sourced from the serene ponds of Mithila, every seed reflects
                the purity of the land, the dedication of farmers, and the
                authenticity of age-old traditions.
              </p>
              <p className="border-l border-gold/40 pl-6 font-display text-2xl italic leading-snug text-cream/90 sm:text-3xl">
                &ldquo;From the heart of Mithila, to your everyday
                well-being.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
