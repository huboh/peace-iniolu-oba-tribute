/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => ([
    {
      source: "/",
      permanent: false,
      destination: "/tributes",
    }
  ]),
  images: {
    remotePatterns: [
      {
        port: '8090',
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/api/files/**',
      }
    ]
  },
};

module.exports = nextConfig;
