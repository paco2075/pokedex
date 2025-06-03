import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/pokedex',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
