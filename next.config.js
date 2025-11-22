/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'impro.usercontent.one',
        },
        {
          protocol: 'https',
          hostname: '*.princeclean.de',
        },
      ],
    },
  };

  module.exports = nextConfig;