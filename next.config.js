/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:8090/api/:path*'
      }
    ];
  },
  async redirects() {
    return [
      {
        destination: '/maintenance',
        permanent: false,
        source: '/'
      }
    ];
  },
  images: {
    domains: [
      'peace-inioluola-tribute.fly.dev'
    ],
    remotePatterns: [
      {
        port: '8090',
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/api/files/**',
      },
      {
        port: '',
        protocol: 'https',
        hostname: 'peace-inioluola-tribute.fly.dev',
        pathname: '/api/files/**',
      }
    ]
  },
};

module.exports = nextConfig;
