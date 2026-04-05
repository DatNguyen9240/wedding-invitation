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
  
  // Next.js 16 Turbopack Resolution (Root level property)
  // This is the GOLDEN KEY to shrinking the 70.3KB chunk!
  turbopack: {
    resolveAlias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    }
  },
  
  // Fallback for non-turbo environments
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
       Object.assign(config.resolve.alias, {
          'react': 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
          'react/jsx-runtime': 'preact/jsx-runtime',
       })
    }
    return config;
  },
};

export default nextConfig
