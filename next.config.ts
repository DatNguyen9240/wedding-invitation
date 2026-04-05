import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  /* config options here */
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
    // Keep experimental flags clean
    inlineCss: false,
  },

  // Next.js 16 Turbopack Resolution (Now a root-level property)
  turbopack: {
    resolveAlias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    }
  },
  
  // Legacy Webpack fallback for traditional build processes
  webpack: (config, { dev, isServer }) => {
    if (config.resolve.alias) {
      // Strip core-js polyfills
      config.resolve.alias['core-js-pure/modules/es.string.trim-end'] = path.resolve(__dirname, 'scripts/no-op.js');
      config.resolve.alias['core-js-pure/modules/es.string.trim-start'] = path.resolve(__dirname, 'scripts/no-op.js');
      
      // Swap React for Preact in production
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          'react': 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
          'react/jsx-runtime': 'preact/jsx-runtime',
        });
      }
    }
    return config;
  },
};

export default nextConfig
