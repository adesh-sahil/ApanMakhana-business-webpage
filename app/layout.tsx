import type { Metadata, Viewport } from "next";
import {
  Instrument_Serif,
  Instrument_Sans,
  Noto_Serif_Devanagari,
} from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

/* Display: high stroke contrast, so gold catches like lit metal.
   Deliberately not Playfair — that was the old site's face. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/* Body: two weights only, per the brief. */
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

/* Devanagari for the brand's own Hindi line. Instrument has no
   Devanagari coverage, so without this the script falls back to
   whatever the device happens to have. */
const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apanmakhana.com"),
  title: "Apan Makhana — Premium Fox Nuts | The Taste of Mithilaa",
  description:
    "Apan Makhana – Premium quality hand-picked fox nuts from the heart of Mithila. FSSAI certified, 100% natural superfood. Available on Amazon India & retail stores across Delhi.",
  keywords: [
    "Makhana",
    "Fox Nuts",
    "Healthy Snacks",
    "Apan Makhana",
    "Buy Makhana Online",
    "Premium Foxnuts India",
    "The Taste of Mithilaa",
    "Lotus Seeds",
    "Superfood",
    "FSSAI Certified",
  ],
  authors: [{ name: "Apan Makhana" }],
  openGraph: {
    title: "Apan Makhana — Premium Fox Nuts | The Taste of Mithilaa",
    description:
      "Discover Apan Makhana's premium, hand-picked fox nuts for a healthy and delicious snacking experience. Available on Amazon and in stores across Delhi.",
    type: "website",
    url: "https://www.apanmakhana.com",
  },
  icons: { icon: "/fav.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#050f0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${notoDevanagari.variable} antialiased`}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
