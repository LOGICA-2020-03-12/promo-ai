/** @type {import('next').NextConfig} */
const nextConfig = {
 //  output: "export",
 output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  trailingSlash: true,
  // Completely disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip type checking
  experimental: {
    typedRoutes: false,
  },
}

module.exports = nextConfig
