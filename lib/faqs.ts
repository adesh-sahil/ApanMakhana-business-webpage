/**
 * FAQ content. Shared between the rendered accordion and the FAQPage
 * JSON-LD in the page, so the two can never disagree — Google flags
 * structured data that doesn't match visible page content.
 *
 * Answers deliberately avoid two claims that appear on the printed
 * packs: "fat free" (the declared panel is 0.8g/100g, above the
 * ≤0.5g/100g FSSAI threshold for that claim) and the specific
 * reproductive-health / muscle-building claims. "Low in fat" and
 * "rich in iron and protein" carry the same benefit and are defensible.
 */
export const FAQS = [
  {
    q: "What makes Apan Makhana different?",
    a: "Our makhana is hand-picked from the ponds of Mithila in Bihar, where fox nuts have been cultivated for generations. Every pack is FSSAI certified with zero preservatives, hygienically processed and quality checked before it reaches you.",
  },
  {
    q: "Where can I buy Apan Makhana?",
    a: "You can order online from Amazon and Blinkit for quick delivery. We're also stocked in 250+ retail outlets across Delhi NCR, Gurgaon, Rajasthan, Gujarat, Uttar Pradesh, Haryana, Kashmir, Himachal Pradesh and Bhopal.",
  },
  {
    q: "What pack sizes are available?",
    a: "Apan Makhana is available in 100 g, 200 g and 250 g packs. The 200 g “22 Caret” pack is the one listed on Blinkit; availability of each size varies by marketplace and store.",
  },
  {
    q: "Are your fox nuts really 100% natural?",
    a: "Yes. Apan Makhana contains no artificial ingredients, no preservatives and no added colour. It is naturally gluten-free, vegan and non-GMO — just pure roasted lotus seeds.",
  },
  {
    q: "What are the health benefits of makhana?",
    a: "Makhana is high in protein and fibre, low in fat, and rich in calcium, iron and antioxidants. It has a low glycemic index, which makes it a sensible snack for people managing blood sugar, and it supports bone strength and everyday energy.",
  },
  {
    q: "How should I store makhana once opened?",
    a: "Keep it in an airtight container in a cool, dry place away from direct sunlight. Makhana absorbs moisture easily — if it softens, dry-roast it on low heat for two to three minutes and it will crisp up again.",
  },
  {
    q: "Do you supply to retailers and distributors?",
    a: "Yes. We supply supermarkets, retail chains and regional distributors across North, Central and West India. Call +91 11 4602 3907 or email tsmfoods01@gmail.com for bulk pricing and trade terms.",
  },
] as const;
