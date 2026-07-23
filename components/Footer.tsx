import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { InstagramGlyph } from "./icons";
import { Fish } from "./Madhubani";
import { FSSAI_LICENCE } from "@/lib/products";
import {
  AMAZON_URL,
  INSTAGRAM_URL,
  EMAIL,
  PHONE,
  ORDER_PHONE,
  LANDLINE,
  ADDRESS,
  tel,
} from "@/lib/sections";

const CERTS = ["FSSAI", "100% Natural", "Gluten Free", "Vegan", "Non-GMO"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ember/20 py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl px-10 sm:px-14 lg:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo-bg.png"
              alt="Apan Makhana"
              width={160}
              height={64}
              quality={75}
              loading="lazy"
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              Premium hand-picked fox nuts from Mithila, Bihar. The taste of
              tradition, the power of nutrition.
            </p>
            <Fish className="mt-6 h-8 w-8 text-gold/30" strokeWidth={0.9} />
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/55">
              Shop
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Buy on Amazon", url: AMAZON_URL },
                { label: "Instagram", url: INSTAGRAM_URL },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm text-cream/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                    <ExternalLink className="h-3 w-3" strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/55">
              Contact
            </h2>
            <ul className="mt-5 space-y-3">
              {[ORDER_PHONE, PHONE, LANDLINE].map((n) => (
                <li key={n}>
                  <a
                    href={`tel:${tel(n)}`}
                    className="inline-flex items-start gap-2.5 font-sans text-sm text-cream/65 transition-colors hover:text-gold"
                  >
                    <Phone
                      className="mt-0.5 h-3.5 w-3.5 text-ember"
                      strokeWidth={1.6}
                    />
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-start gap-2.5 font-sans text-sm text-cream/65 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 text-ember" strokeWidth={1.6} />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 font-sans text-sm text-cream/65">
                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ember" strokeWidth={1.6} />
                {ADDRESS}
              </li>
            </ul>
          </div>

          {/* Certification */}
          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream/55">
              Certified
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CERTS.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ember/25 px-3 py-1.5 font-sans text-[0.7rem] text-cream/55"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-sans text-[0.7rem] leading-relaxed text-cream/55">
              FSSAI Lic. No.
              <br />
              <span className="text-cream/75">{FSSAI_LICENCE}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ember/15 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-cream/55">
            © {new Date().getFullYear()} Apan Makhana. All rights reserved.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apan Makhana on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ember/25 text-cream/55 transition-colors hover:border-gold/50 hover:text-gold"
          >
            <InstagramGlyph className="h-4 w-4" strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </footer>
  );
}
