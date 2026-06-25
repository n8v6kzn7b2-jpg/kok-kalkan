import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Real photos are dropped into /public/assets/images. Local images need no
    // remote patterns; formats kept modern for performance.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
