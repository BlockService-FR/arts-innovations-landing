import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
