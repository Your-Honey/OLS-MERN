/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  async rewrites() {
    return [
      {
        source: '/apii/:path*',
        destination: 'http://localhost:8080/api/:path*',
      },
    ];
  },
}
module.exports = nextConfig
