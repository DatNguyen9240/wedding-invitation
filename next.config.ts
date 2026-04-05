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
    // Inline critical CSS into the HTML response, eliminating the render-blocking
    // CSS network round-trip (~10.8 KiB, 300ms). This removes the CSS node from
    inlineCss: true,
  },
  // Use Webpack overrides to strip internal legacy polyfills
  webpack: (config) => {
    // Alias both core-js and core-js-pure variants identified in Lighthouse
    config.resolve.alias = {
      ...config.resolve.alias,
      // Catch specific modules in core-js/modules/...
      'core-js/modules/es.array.at': './scripts/no-op.js',
      'core-js/modules/es.array.flat': './scripts/no-op.js',
      'core-js/modules/es.array.flat-map': './scripts/no-op.js',
      'core-js/modules/es.object.from-entries': './scripts/no-op.js',
      'core-js/modules/es.object.has-own': './scripts/no-op.js',
      'core-js/modules/es.string.trim-end': './scripts/no-op.js',
      'core-js/modules/es.string.trim-start': './scripts/no-op.js',
      
      // Catch core-js-pure used by Babel/Webpack polyfill plugins
      'core-js-pure/modules/es.array.at': './scripts/no-op.js',
      'core-js-pure/modules/es.array.flat': './scripts/no-op.js',
      'core-js-pure/modules/es.array.flat-map': './scripts/no-op.js',
      'core-js-pure/modules/es.object.from-entries': './scripts/no-op.js',
      
      // Catch root-level polyfill imports
      'core-js/stable/array/at': './scripts/no-op.js',
      'core-js/stable/object/from-entries': './scripts/no-op.js',
    };
    return config;
  },
};

export default nextConfig;
