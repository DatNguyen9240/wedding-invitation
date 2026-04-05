import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Remove X-Powered-By header from all responses (minor security + saves bytes)
  poweredByHeader: false,
  images: {
    // Allow Next.js Image optimization for Google AI-generated images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
    // Serve WebP for modern browsers, AVIF where supported
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 1 year (matches CDN best practice)
    minimumCacheTTL: 31536000,
  },
  experimental: {
    // Inline critical CSS into the HTML response, eliminating the render-blocking
    // CSS network round-trip (~10.8 KiB, 300ms). This removes the CSS node from
    // the "Network dependency tree" chain, dropping critical path to ~TTFB only.
    inlineCss: true,
  },
};

export default nextConfig;
