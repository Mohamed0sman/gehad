/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  typescript: {
    // Allow production builds even if TypeScript type-checking fails.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig