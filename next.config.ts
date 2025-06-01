import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/pokedex',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
