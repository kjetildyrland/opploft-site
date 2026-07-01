import type { NextConfig } from "next";

// På GitHub Pages ligger siden under /opploft-site — workflowen setter
// NEXT_PUBLIC_BASE_PATH. Lokalt og på eget domene (opploft.no) er den tom.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
