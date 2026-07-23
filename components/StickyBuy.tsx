"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Phone } from "lucide-react";
import { ORDER_PHONE, tel } from "@/lib/sections";

/**
 * Mobile sticky buy bar.
 *
 * 90%+ of this traffic is on a phone, and the stretch between the hero
 * and the Buy zone — pouch sequence, range, benefits, heritage, FAQ —
 * is a long scroll with no visible way to act. This keeps the action
 * reachable throughout.
 *
 * Hidden while the Buy section is on screen: repeating the CTA directly
 * above the thing it points at is just noise.
 */
export default function StickyBuy() {
  const [pastHero, setPastHero] = useState(false);
  const [atBuy, setAtBuy] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Suppress the bar once the destination is actually visible.
    const target = document.getElementById("buy");
    let io: IntersectionObserver | undefined;
    if (target) {
      io = new IntersectionObserver(
        ([entry]) => setAtBuy(entry.isIntersecting),
        { rootMargin: "-10% 0px -25% 0px" },
      );
      io.observe(target);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = pastHero && !atBuy;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ember/30 bg-void/90 backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center gap-3 px-5 py-3">
            <a
              href="#buy"
              className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full bg-gold px-6 font-sans text-[0.95rem] font-semibold text-void active:scale-[0.98]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
              Buy Apan Makhana
            </a>
            <a
              href={`tel:${tel(ORDER_PHONE)}`}
              aria-label={`Call to order, ${ORDER_PHONE}`}
              className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={1.8} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
