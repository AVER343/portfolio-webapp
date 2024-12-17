/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: `photos.app.goo.gl`,
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
