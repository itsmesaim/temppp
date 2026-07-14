import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 140, 160, 256, 384],
    minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
