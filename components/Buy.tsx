"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Star } from "lucide-react";
import { CHANNELS } from "@/lib/products";
import { AMAZON_URL, ORDER_PHONE, PHONE, tel } from "@/lib/sections";

const REGIONS = [
  { name: "Delhi NCR", detail: "250+ premium outlets", highlight: true },
  { name: "Gujarat & Rajasthan", detail: "National Handloom" },
  { name: "UP, Haryana & Uttarakhand", detail: "Rozana rural e-commerce" },
  { name: "Kashmir & Himachal", detail: "Direct distribution" },
  { name: "Bhopal, MP", detail: "Direct distribution" },
];

const GALLERY = [
  { src: "/store-1.jpeg", label: "Store shelf display" },
  { src: "/team-2.jpeg", label: "Happy customer" },
  { src: "/store-10.jpeg", label: "Premium outlet" },
  { src: "/team-5.jpeg", label: "Customer interaction" },
  { src: "/store-3.jpeg", label: "Retail display" },
  { src: "/team-6.jpeg", label: "In-store experience" },
  { src: "/store-11.jpeg", label: "Wholesale display" },
  { src: "/team-3.jpeg", label: "Team with customer" },
];

export default function Buy() {
  const live = CHANNELS.filter((c) => c.url);

  return (
    <section id="buy" className="relative overflow-hidden py-24 sm:py-32">
      <div className="spotlight spotlight-gold left-1/2 top-[5%] h-[55vh] w-[85vw] -translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="eyebrow justify-center">Where to buy</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2.5rem,10vw,4.5rem)] text-cream lg:text-[clamp(3rem,5vw,5rem)]">
            Delivered anywhere.{" "}
            <span className="italic text-gold">Stocked nearly everywhere.</span>
          </h2>
        </motion.div>

        {/* Online channels — the whole row is the target, so it's an
            easy tap on a phone. */}
        <div className="mx-auto mt-14 max-w-2xl">
          {live.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url!}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex min-h-[76px] items-center justify-between gap-6 border-b border-ember/20 py-6 transition-colors first:border-t first:border-ember/20 hover:border-gold/40"
            >
              <div>
                <p className="font-display text-3xl text-cream transition-colors group-hover:text-gold sm:text-4xl">
                  {c.name}
                </p>
                <p className="mt-1 font-sans text-[0.8rem] text-cream/55">
                  {c.note}
                </p>
              </div>
              <ArrowUpRight
                className="h-6 w-6 flex-shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4 text-center"
          >
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-cream/70 transition-colors hover:text-gold"
            >
              <Star
                className="h-4 w-4 text-gold"
                fill="currentColor"
                strokeWidth={0}
              />
              Read customer reviews on Amazon
            </a>
            <p className="font-sans text-[0.8rem] text-cream/55">
              Prices and availability vary by marketplace.
            </p>
          </motion.div>
        </div>

        {/* Order by phone — a lot of this audience would rather call. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-ember/25 bg-moss/30 p-7 text-center"
        >
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
            Or order directly
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {[ORDER_PHONE, PHONE].map((n) => (
              <a
                key={n}
                href={`tel:${tel(n)}`}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-gold/40 px-6 font-sans text-[0.95rem] font-semibold text-gold transition-colors hover:bg-gold hover:text-void"
              >
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                {n}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="hairline mt-20" />

        {/* In-store footprint */}
        <div className="mt-12">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
            Find us in store
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {REGIONS.map((r, i) => (
              <motion.li
                key={r.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="flex items-baseline justify-between gap-4 border-b border-ember/15 py-4"
              >
                <span
                  className={`font-display text-xl sm:text-2xl ${
                    r.highlight ? "text-gold" : "text-cream/85"
                  }`}
                >
                  {r.name}
                </span>
                <span className="text-right font-sans text-[0.8rem] text-cream/55">
                  {r.detail}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Proof — shelves and customers */}
        <div className="mt-16 grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
          {GALLERY.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-ember/15"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                quality={75}
                sizes="(max-width: 767px) 45vw, 22vw"
                loading="lazy"
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-3 font-sans text-[0.65rem] uppercase tracking-[0.14em] text-cream/70">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
