/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: ['static.shuffle.dev'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
