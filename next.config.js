/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "threadheads.com",
      },
    ],
  },
};

module.exports = nextConfig;
