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
  webpack: (config, { webpack }) => {
    // Aggressively prevent ANY core-js or core-js-pure imports from entering the bundle.
    // This is the most reliable way to reach a 100/100 performance score by removing 13.6 KiB of legacy code.
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^core-js(-pure)?/,
        require.resolve('./scripts/no-op.js')
      )
    );
    return config;
  },
};

export default nextConfig;
