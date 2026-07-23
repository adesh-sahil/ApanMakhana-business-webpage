"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShoppingBag, Check } from "lucide-react";
import { useReducedMotion, useIsSmallScreen } from "@/lib/motion";
import { NUTRITION } from "@/lib/products";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TAGS = [
  "100% Natural",
  "No Preservatives",
  "Gluten Free",
  "Vegan",
  "Non-GMO",
  "FSSAI Certified",
];

/**
 * The pinned scrub sequence.
 *
 * Desktop: a 420vh scroll track with a sticky stage. The pouch's
 * position/scale/rotation are scrubbed to scroll progress while captions
 * fade across their own bands. `scrub: 1` gives a one-second catch-up so
 * values ease toward scroll rather than snapping to it — that's the
 * heavy, fluid feel, and it's a single setting rather than hand-rolled
 * lerping.
 *
 * Mobile (and reduced-motion): the whole scrub is replaced by cheap
 * one-shot reveals. Pinning fights iOS' collapsing toolbar and burns
 * main-thread time on exactly the devices that can least afford it —
 * and 90%+ of this audience is on a phone.
 */
export default function ProductSequence() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const small = useIsSmallScreen();

  const useScrub = !small && !reduced;

  useGSAP(
    () => {
      if (!useScrub) return;

      const q = gsap.utils.selector(root);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Band A — rise into frame, centre stage.
      tl.fromTo(
        stage.current,
        { scale: 0.55, yPercent: -14, rotate: -4 },
        { scale: 1, yPercent: 0, rotate: 0, duration: 0.22 },
        0,
      )
        .fromTo(q(".cap-1"), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.08 }, 0.04)
        .to(q(".cap-1"), { opacity: 0, y: -24, duration: 0.06 }, 0.2)

        // Band B — pushed left, nutrition rises on the right.
        .to(stage.current, { xPercent: -26, scale: 0.82, duration: 0.16 }, 0.24)
        .fromTo(
          q(".stat"),
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.1, stagger: 0.018 },
          0.28,
        )
        .to(q(".stat"), { opacity: 0, x: -24, duration: 0.08, stagger: 0.01 }, 0.46)

        // Band C — tags take the right, pouch drifts and turns.
        .to(stage.current, { rotate: 3, scale: 0.86, duration: 0.14 }, 0.46)
        .fromTo(
          q(".tag"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.09, stagger: 0.015 },
          0.5,
        )
        .to(q(".tag"), { opacity: 0, y: -18, duration: 0.07, stagger: 0.008 }, 0.66)

        // Band D — back to centre, hero-scale, for the ask.
        .to(
          stage.current,
          { xPercent: 0, scale: 1.06, rotate: 0, duration: 0.2 },
          0.68,
        )
        .fromTo(q(".cap-2"), { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.12 }, 0.78);
    },
    { scope: root, dependencies: [useScrub] },
  );

  /* ---------------- Mobile / reduced-motion ---------------- */
  if (!useScrub) {
    return (
      <section id="product" className="relative overflow-hidden py-24 sm:py-28">
        <div className="spotlight spotlight-gold left-1/2 top-1/4 h-[60vh] w-[95vw] -translate-x-1/2" />

        <div className="relative mx-auto max-w-6xl px-10 sm:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="eyebrow justify-center">The pouch</p>
            <h2 className="mt-5 text-[clamp(2.5rem,11vw,4rem)] text-cream">
              Hand-picked. <span className="italic text-gold">Never processed.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex justify-center"
          >
            <div className="idle-float">
              <Image
                src="/packs/pack-250-back.png"
                alt="Apan Makhana 250g pack, nutritional information panel"
                width={646}
                height={760}
                quality={75}
                sizes="70vw"
                loading="lazy"
                className="lit-product w-[70vw] max-w-[320px]"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-md text-center font-sans text-base leading-relaxed text-cream/70"
          >
            Hand-picked from Mithila&apos;s finest farms. Every pack delivers
            nature&apos;s goodness — zero additives, maximum nutrition.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {NUTRITION.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl border border-ember/25 bg-moss/40 px-2 py-4 text-center"
              >
                <p className="font-display text-2xl text-gold">{n.value}</p>
                <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.14em] text-cream/60">
                  {n.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {TAGS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-ember/30 px-3 py-1.5 font-sans text-[0.7rem] text-cream/65"
              >
                <Check className="h-3 w-3 text-gold" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  /* ---------------- Desktop scrub ---------------- */
  return (
    <section id="product" ref={root} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="spotlight spotlight-gold left-[38%] top-1/2 h-[80vh] w-[60vw] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-12 px-20">
          {/* Stage — GSAP drives this node; idle float lives on the child */}
          <div ref={stage} className="flex justify-center will-change-transform">
            <div className="idle-float">
              <Image
                src="/packs/pack-250-back.png"
                alt="Apan Makhana 250g pack, nutritional information panel"
                width={646}
                height={760}
                quality={90}
                sizes="34vw"
                className="lit-product w-full max-w-[340px]"
              />
            </div>
          </div>

          {/* Caption bands — each owns its own slice of the scroll */}
          <div className="relative h-[62vh]">
            <div className="cap-1 absolute inset-x-0 top-1/2 -translate-y-1/2">
              <p className="eyebrow">The pouch</p>
              <h2 className="mt-5 text-[clamp(2.75rem,4.4vw,4.25rem)] text-cream">
                Hand-picked.{" "}
                <span className="italic text-gold">Never processed.</span>
              </h2>
              <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-cream/70">
                Hand-picked from Mithila&apos;s finest farms. Every pack
                delivers nature&apos;s goodness — zero additives, maximum
                nutrition.
              </p>
            </div>

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              <div className="grid grid-cols-3 gap-3">
                {NUTRITION.map((n) => (
                  <div
                    key={n.label}
                    className="stat rounded-xl border border-ember/25 bg-moss/40 px-3 py-5 text-center opacity-0"
                  >
                    <p className="font-display text-3xl text-gold">{n.value}</p>
                    <p className="mt-1.5 font-sans text-[0.65rem] uppercase tracking-[0.14em] text-cream/60">
                      {n.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              <div className="flex flex-wrap gap-2.5">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="tag inline-flex items-center gap-2 rounded-full border border-ember/30 px-4 py-2 font-sans text-sm text-cream/70 opacity-0"
                  >
                    <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="cap-2 absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-0">
              <h2 className="text-[clamp(2.5rem,4vw,3.75rem)] text-cream">
                Ready when <span className="italic text-gold">you are</span>
              </h2>
              <a
                href="#buy"
                className="mt-8 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-gold px-8 font-sans text-[0.95rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.02]"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
                Buy Apan Makhana
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
