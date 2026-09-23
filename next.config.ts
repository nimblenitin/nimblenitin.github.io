import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }
  // If your repo is not at the root domain, set basePath and assetPrefix
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
