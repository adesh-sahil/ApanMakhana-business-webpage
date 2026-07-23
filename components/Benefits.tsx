"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Dumbbell,
  Bone,
  Moon,
  Flame,
  Wheat,
  Scale,
  Heart,
  Droplet,
} from "lucide-react";
import { Sun } from "./Madhubani";

/* Deliberately icons, not emoji. The old site mixed 💪🦴🧠 into a
   "premium" brand — emoji render differently on every OS and read cheap. */
const REASONS = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Zero artificial ingredients — pure fox nuts straight from Mithila's farms.",
  },
  {
    icon: HeartPulse,
    title: "Heart Healthy",
    desc: "Low in fat, cholesterol-free, rich in magnesium for a healthy heart.",
  },
  {
    icon: ShieldCheck,
    title: "FSSAI Certified",
    desc: "Tested & certified to meet India's highest food safety standards.",
  },
  {
    icon: Sparkles,
    title: "Rich in Antioxidants",
    desc: "Fights free radicals, slows ageing, and boosts immunity naturally.",
  },
];

const BENEFITS = [
  { icon: Dumbbell, text: "High protein — 9.7g per 100g" },
  { icon: Bone, text: "Rich in calcium" },
  { icon: Moon, text: "Helps with insomnia" },
  { icon: Flame, text: "Anti-inflammatory" },
  { icon: Wheat, text: "Gluten-free & vegan" },
  { icon: Scale, text: "Aids weight loss" },
  { icon: Heart, text: "Good for the heart" },
  { icon: Droplet, text: "Low glycemic index" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden py-24 sm:py-32">
      <div className="spotlight spotlight-moss right-[-15%] top-[10%] h-[60vh] w-[70vw]" />

      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        {/* Statement, not a centred card header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Why makhana</p>
            <h2 className="mt-6 max-w-2xl text-[clamp(2.5rem,10vw,4.5rem)] text-cream lg:text-[clamp(3rem,5vw,5rem)]">
              A superfood that was{" "}
              <span className="italic text-gold">never engineered</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 0.35, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hidden text-gold lg:block"
          >
            <Sun className="h-24 w-24" strokeWidth={0.8} />
          </motion.div>
        </div>

        <div className="hairline mt-12" />

        {/* Reasons as a hairline-divided editorial list */}
        <div className="mt-4 grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ul>
            {REASONS.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-5 border-b border-ember/15 py-7 last:border-b-0"
              >
                <r.icon
                  className="mt-1 h-5 w-5 flex-shrink-0 text-gold transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-display text-2xl text-cream sm:text-3xl">
                    {r.title}
                  </h3>
                  <p className="mt-2 max-w-md font-sans text-[0.95rem] leading-relaxed text-cream/60">
                    {r.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 self-start lg:sticky lg:top-28 lg:mt-12"
          >
            <Image
              src="/product-benefits.jpeg"
              alt="Nutritional benefits of Apan Makhana fox nuts"
              width={1200}
              height={1200}
              quality={75}
              sizes="(max-width: 1023px) 90vw, 38vw"
              loading="lazy"
              className="w-full rounded-2xl border border-ember/20 opacity-90"
            />
          </motion.div>
        </div>

        {/* Benefit ledger — quiet, dense, no cards */}
        <div className="mt-16">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
            Why nutritionists recommend it
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <motion.li
                key={b.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="flex items-center gap-3 border-b border-ember/12 py-4"
              >
                <b.icon className="h-4 w-4 flex-shrink-0 text-gold/80" strokeWidth={1.6} />
                <span className="font-sans text-[0.95rem] text-cream/75">
                  {b.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
