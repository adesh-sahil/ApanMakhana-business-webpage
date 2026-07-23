/**
 * Page order. The spine reads this to place its markers and the nav
 * reads it for anchors — one source of truth so the two can't drift.
 */
export const SECTIONS = [
  { id: "hero", label: "Origin" },
  { id: "product", label: "The Pouch" },
  { id: "range", label: "Sizes" },
  { id: "benefits", label: "Why Makhana" },
  { id: "heritage", label: "Mithila" },
  { id: "faq", label: "Questions" },
  { id: "buy", label: "Buy" },
  { id: "trade", label: "Stockists" },
] as const;

export const AMAZON_URL = "https://www.amazon.in/dp/B0DW3LTXJN";
export const INSTAGRAM_URL = "https://www.instagram.com/apan.makhana/";
export const EMAIL = "tsmfoods01@gmail.com";

/** Order / customer enquiries. */
export const PHONE = "+91 84487 14959";
export const ORDER_PHONE = "+91 99538 21799";
/** Office line, used for trade enquiries. */
export const LANDLINE = "+91 11 4602 3907";
export const ADDRESS = "139/2, Mukherjee Park, Tilak Nagar, New Delhi – 110018";

/** Strips formatting for tel: hrefs. */
export const tel = (n: string) => n.replace(/[^+\d]/g, "");
