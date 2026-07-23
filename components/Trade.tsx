"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { RETAIL, DISTRIBUTORS } from "@/lib/products";
import {
  EMAIL,
  PHONE,
  ORDER_PHONE,
  LANDLINE,
  ADDRESS,
  tel,
} from "@/lib/sections";

/**
 * Trade enquiries. The distribution footprint is the strongest asset
 * this brand has and the old site gave a retailer no way to act on it —
 * every CTA pointed at a single consumer Amazon listing.
 */
export default function Trade() {
  const enquirySubject = encodeURIComponent(
    "Stockist enquiry — Apan Makhana",
  );

  return (
    <section id="trade" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pond/50 to-transparent" />
      <div className="spotlight spotlight-gold right-[-10%] top-[20%] h-[50vh] w-[60vw]" />

      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">For retailers &amp; distributors</p>
              <h2 className="mt-6 text-[clamp(2.25rem,9vw,4rem)] text-cream lg:text-[clamp(2.5rem,4.5vw,4.25rem)]">
                Stock <span className="italic text-gold">Apan Makhana</span>
              </h2>
              <p className="mt-6 max-w-md font-sans text-[1.05rem] leading-relaxed text-cream/70">
                We supply retail chains, supermarkets and regional
                distributors across North, Central and West India. For bulk
                pricing and trade terms, get in touch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={`tel:${tel(LANDLINE)}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-gold px-7 font-sans text-[0.95rem] font-semibold text-void transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                {LANDLINE}
              </a>
              <a
                href={`mailto:${EMAIL}?subject=${enquirySubject}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-cream/20 px-7 font-sans text-[0.95rem] font-semibold text-cream/85 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.8} />
                Email trade enquiry
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 space-y-3"
            >
              <div className="flex items-start gap-2.5">
                <dt className="sr-only">Registered address</dt>
                <MapPin
                  className="mt-1 h-4 w-4 flex-shrink-0 text-ember"
                  strokeWidth={1.6}
                />
                <dd className="font-sans text-sm text-cream/65">{ADDRESS}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <dt className="sr-only">Mobile</dt>
                <Phone
                  className="mt-1 h-4 w-4 flex-shrink-0 text-ember"
                  strokeWidth={1.6}
                />
                <dd className="flex flex-wrap gap-x-4 font-sans text-sm text-cream/65">
                  {[ORDER_PHONE, PHONE].map((n) => (
                    <a
                      key={n}
                      href={`tel:${tel(n)}`}
                      className="transition-colors hover:text-gold"
                    >
                      {n}
                    </a>
                  ))}
                </dd>
              </div>
            </motion.dl>
          </div>

          {/* Existing footprint — proof the trade already works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
              Retail partners
            </p>
            <ul className="mt-5 space-y-5">
              {RETAIL.map((r) => (
                <li key={r.region}>
                  <p className="font-display text-xl text-gold">{r.region}</p>
                  <p className="mt-1 font-sans text-sm text-cream/65">
                    {r.stores.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-cream/55">
              Distributors
            </p>
            <ul className="mt-5 space-y-5">
              {DISTRIBUTORS.map((d) => (
                <li key={d.region}>
                  <p className="font-display text-xl text-gold">{d.region}</p>
                  <p className="mt-1 font-sans text-sm text-cream/65">
                    {d.cities.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
