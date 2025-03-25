import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // App Router otomatik olarak etkin (Next.js 13.4+)
  // Artık experimental.appDir gerekmiyor
  reactStrictMode: true,
  
  // Eğer TypeScript ile custom path alias kullanıyorsanız
  typescript: {
    ignoreBuildErrors: false, // Build sırasında TS hatalarını engelle
  },
  
  // İsteğe bağlı: Webpack özelleştirmeleri
  webpack: (config) => {
    return config
  },
  
  // İsteğe bağlı: Next.js 14'te sunulan özellikler
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

export default nextConfig