import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler disabled — its c() runtime adds ~100-200ms eval overhead during hydration
  // for minimal memoization benefit on a mostly-Server-Component page.
  // reactCompiler: true,
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
  },
};

export default nextConfig;
