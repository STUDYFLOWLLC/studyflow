/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://studio.apollographql.com',
          },
        ],
      },
    ]
  },
})

module.exports = nextConfig
