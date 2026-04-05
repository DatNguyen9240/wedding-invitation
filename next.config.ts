import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
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
    // Disabled inlineCss to prevent main-thread bottleneck (2s style parse).
    // Browser parallel loading of CSS is more efficient for this editorial design.
    inlineCss: false,
  },
  // Support Turbopack resolving aliases for polyfill stripping.
  // Using an absolute path ensures the bundler definitively resolves the no-op file.
  // @ts-ignore - Turbopack config is valid in Next.js 16 despite potential @types/next lag
  turbopack: {
    resolveAlias: {
      'core-js/modules/es.array.at': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.array.flat': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.array.flat-map': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.object.from-entries': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.object.has-own': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.string.trim-end': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.string.trim-start': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.array.at': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.array.flat': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.array.flat-map': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.object.from-entries': path.resolve(__dirname, 'scripts/no-op.js'),
    },
  },
  // Webpack fallback to ensure consistent bundling for all build contexts
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // core-js (standard) — strip polyfills for features native in Chrome 95+/Safari 15.4+
      'core-js/modules/es.array.at': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.array.flat': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.array.flat-map': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.object.from-entries': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.object.has-own': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.string.trim-end': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js/modules/es.string.trim-start': path.resolve(__dirname, 'scripts/no-op.js'),
      // core-js-pure (used by @babel/runtime-corejs3) — same strip, previously missing from webpack
      'core-js-pure/modules/es.array.at': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.array.flat': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.array.flat-map': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.object.from-entries': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.object.has-own': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.string.trim-end': path.resolve(__dirname, 'scripts/no-op.js'),
      'core-js-pure/modules/es.string.trim-start': path.resolve(__dirname, 'scripts/no-op.js'),
    };
    return config;
  },
};

export default nextConfig;
