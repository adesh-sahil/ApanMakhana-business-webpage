import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults this to [75] and coerces anything else to the
    // nearest allowed value. The hero pouch is the LCP element and is
    // shown large, so it gets a higher tier.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
