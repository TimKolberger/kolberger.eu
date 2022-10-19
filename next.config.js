/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    externalDir: true,
  },
  swcMinify: true,
  images: {
    domains: ['www.gravatar.com'],
  },
}

module.exports = nextConfig
