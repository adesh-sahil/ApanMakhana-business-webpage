"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { FAQS } from "@/lib/faqs";
import { EMAIL } from "@/lib/sections";

/**
 * FAQ accordion. The matching FAQPage JSON-LD is emitted from page.tsx
 * off the same FAQS array — Google penalises structured data that
 * doesn't match what's visible, so they must share one source.
 */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="spotlight spotlight-moss right-[-15%] top-[20%] h-[50vh] w-[60vw]" />

      <div className="relative mx-auto max-w-3xl px-10 sm:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Questions</p>
          <h2 className="mt-6 text-[clamp(2.25rem,9vw,3.75rem)] text-cream">
            Good to <span className="italic text-gold">know</span>
          </h2>
        </motion.div>

        <dl className="mt-12">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.05 }}
                className="border-b border-ember/20"
              >
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl text-cream sm:text-2xl">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={1.6}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-10 font-sans text-[0.95rem] leading-relaxed text-cream/70">
                        {faq.a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <p className="font-sans text-sm text-cream/60">Still have a question?</p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ember/30 px-5 font-sans text-sm font-semibold text-cream/80 transition-colors hover:border-gold/50 hover:text-gold"
          >
            <Mail className="h-4 w-4" strokeWidth={1.6} />
            {EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
