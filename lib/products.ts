/**
 * Product + channel data from the printed catalogue
 * ("Apan Makhana Catalogue (Printing File).pdf").
 *
 * No prices anywhere by design: marketplace prices move independently
 * of this site, and a stale price is worse than no price. Every CTA
 * sends the customer to a live listing instead.
 *
 * Pack images were extracted from the catalogue PDF as transparent
 * cutouts (colour plate + soft mask rejoined), which is what lets them
 * sit lit against the dark field rather than in a white box.
 *
 * NOTE: sizes below follow the catalogue's own labelling. The green
 * "Traditional Taste" artwork reads "Net Wt. 100g" on the bag while the
 * catalogue lists that pack at 250 g — likely reused mockup art, but
 * worth confirming before print/marketing reuse.
 */
export type Pack = {
  id: string;
  size: string;
  /** Pack design name, as it appears in the catalogue. */
  variant: string;
  image: string;
  /** Short reason this pack exists, for the range list. */
  note: string;
};

export const PACKS: Pack[] = [
  {
    id: "100g",
    size: "100 g",
    variant: "Traditional Taste",
    image: "/packs/pack-100-front.png",
    note: "Try it out",
  },
  {
    id: "200g",
    size: "200 g",
    variant: "22 Caret",
    image: "/packs/pack-200.png",
    note: "On Blinkit",
  },
  {
    id: "250g-traditional",
    size: "250 g",
    variant: "Traditional Taste",
    image: "/packs/pack-250-traditional.png",
    note: "Our everyday pack",
  },
  {
    id: "250g-mithila",
    size: "250 g",
    variant: "Mithila",
    image: "/packs/pack-mithila-front.png",
    note: "Gifting edition",
  },
];

/**
 * Declared nutrition, transcribed exactly from the pack panel. These
 * must match the printed label character-for-character — a site that
 * rounds its own declared values differently from the pack is a
 * labelling inconsistency, not a design choice.
 */
export const NUTRITION = [
  { label: "Protein", value: "9.75g" },
  { label: "Fibre", value: "11.10g" },
  { label: "Carbs", value: "76.33g" },
  { label: "Fat", value: "0.86g" },
  { label: "Calcium", value: "5.01g" },
  { label: "Energy", value: "374 kcal" },
];

/** Printed on every pack. A real trust signal for a food brand. */
export const FSSAI_LICENCE = "13324011000687";

export type Channel = {
  name: string;
  /** null hides the channel rather than shipping a dead link. */
  url: string | null;
  note: string;
};

export const CHANNELS: Channel[] = [
  {
    name: "Amazon",
    url: "https://www.amazon.in/dp/B0DW3LTXJN",
    note: "All pack sizes · delivered across India",
  },
  {
    name: "Blinkit",
    url: "https://blinkit.com/prn/apan-makhana-foxnuts-makhana/prid/1367320",
    note: "200 g · delivered in minutes",
  },
];

/** Retail partners, corrected against the catalogue. */
export const RETAIL = [
  {
    region: "Delhi NCR",
    stores: ["Baniya Ki Dukan", "Raj Mandir Hyper Market", "Subham Store"],
  },
  { region: "Gurgaon, HR", stores: ["Sodhi Super Mart", "Garg Dastak Market"] },
  { region: "Rajasthan & Gujarat", stores: ["National Handloom"] },
  { region: "Uttar Pradesh", stores: ["Rozana"] },
];

export const DISTRIBUTORS = [
  { region: "North India", cities: ["Srinagar", "Himachal"] },
  {
    region: "Central & West India",
    cities: ["Bhopal", "Jodhpur", "Lucknow", "Ahmedabad"],
  },
];
