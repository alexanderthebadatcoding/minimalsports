/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        pathname: "/i/teamlogos/**",
      },
    ],
    unoptimized: true, // Set to true if you want to disable optimization globally
  },
};

module.exports = nextConfig;