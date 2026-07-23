/**
 * Deterministic makhana field — fixed values, so SSR and client agree
 * (Math.random here would trip a hydration mismatch).
 *
 * Bigger motes get more blur and lower opacity so they read as nearer
 * the lens and further out of focus. Kept to 14 across the whole page:
 * enough for the field to feel alive, few enough that it stays ambient
 * rather than becoming the subject.
 *
 * Lives outside lib/motion.ts on purpose: that module is "use client",
 * and data imported from a client module into a Server Component
 * arrives as a client-reference proxy rather than the real array.
 */
export const MOTES = [
  { left: "6%", top: "78%", size: 14, dur: 26, delay: 0, x: "34px", peak: 0.13, blur: 2.4 },
  { left: "16%", top: "92%", size: 8, dur: 21, delay: 4, x: "-22px", peak: 0.2, blur: 1.2 },
  { left: "24%", top: "68%", size: 18, dur: 31, delay: 9, x: "40px", peak: 0.1, blur: 3.2 },
  { left: "33%", top: "96%", size: 7, dur: 19, delay: 2, x: "-28px", peak: 0.22, blur: 1 },
  { left: "41%", top: "82%", size: 11, dur: 24, delay: 12, x: "20px", peak: 0.16, blur: 1.8 },
  { left: "49%", top: "90%", size: 6, dur: 18, delay: 6, x: "-18px", peak: 0.24, blur: 0.8 },
  { left: "57%", top: "72%", size: 16, dur: 29, delay: 15, x: "36px", peak: 0.11, blur: 2.8 },
  { left: "65%", top: "98%", size: 9, dur: 22, delay: 3, x: "-24px", peak: 0.19, blur: 1.4 },
  { left: "73%", top: "80%", size: 12, dur: 25, delay: 10, x: "26px", peak: 0.15, blur: 2 },
  { left: "81%", top: "88%", size: 7, dur: 20, delay: 7, x: "-30px", peak: 0.21, blur: 1 },
  { left: "89%", top: "74%", size: 15, dur: 28, delay: 14, x: "32px", peak: 0.12, blur: 2.6 },
  { left: "95%", top: "94%", size: 8, dur: 23, delay: 5, x: "-20px", peak: 0.2, blur: 1.2 },
  { left: "11%", top: "60%", size: 10, dur: 27, delay: 17, x: "24px", peak: 0.14, blur: 1.6 },
  { left: "69%", top: "58%", size: 6, dur: 20, delay: 19, x: "-16px", peak: 0.23, blur: 0.8 },
] as const;
