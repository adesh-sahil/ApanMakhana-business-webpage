import Nav from "@/components/Nav";
import Spine from "@/components/Spine";
import Motes from "@/components/Motes";
import Hero from "@/components/Hero";
import ProductSequence from "@/components/ProductSequence";
import Range from "@/components/Range";
import Benefits from "@/components/Benefits";
import Heritage from "@/components/Heritage";
import FAQ from "@/components/FAQ";
import Buy from "@/components/Buy";
import Trade from "@/components/Trade";
import Footer from "@/components/Footer";
import StickyBuy from "@/components/StickyBuy";
import { FAQS } from "@/lib/faqs";
import {
  EMAIL,
  LANDLINE,
  ORDER_PHONE,
  PHONE,
  INSTAGRAM_URL,
} from "@/lib/sections";

/**
 * Structured data. Built from the same constants the page renders, so
 * the markup and the schema can't drift — Google penalises structured
 * data that doesn't match visible content.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.apanmakhana.com/#org",
      name: "Apan Makhana",
      alternateName: "अपन मखाना",
      url: "https://www.apanmakhana.com",
      logo: "https://www.apanmakhana.com/logo-bg.png",
      description:
        "Premium hand-picked fox nuts (makhana) from Mithila, Bihar. FSSAI certified, 100% natural.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "139/2, Mukherjee Park, Tilak Nagar",
        addressLocality: "New Delhi",
        postalCode: "110018",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
      email: EMAIL,
      telephone: [ORDER_PHONE, PHONE, LANDLINE],
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.apanmakhana.com/#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // Serialised server-side from local constants only.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Spine />
      <Motes />
      <main className="relative z-10">
        <Hero />
        <ProductSequence />
        <Range />
        <Benefits />
        <Heritage />
        <FAQ />
        <Buy />
        <Trade />
      </main>
      <Footer />
      <StickyBuy />
    </>
  );
}
