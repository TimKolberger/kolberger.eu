/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    remotePatterns: [{ hostname: 'www.gravatar.com' }],
  },
}

module.exports = nextConfig
