import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    // Keep it minimal for absolute stability
    inlineCss: false,
  },
  // Adding empty Turbopack config to satisfy Next.js 16 build worker
  turbopack: {},
  
  // Minimal Webpack for fallbacks
  webpack: (config) => {
    return config;
  },
};

export default nextConfig
