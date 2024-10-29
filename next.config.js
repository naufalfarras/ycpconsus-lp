/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "consus.ycp.com",
      },
      {
        protocol: "https",
        hostname: "ycpconsus.ycps.digital",
      },
      {
        protocol: "https",
        hostname: "api.ycpconsus.ycps.digital",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
};

module.exports = nextConfig;
