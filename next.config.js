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
    quality: 90, // Adjust image quality (default is 75)
    formats: ["image/webp", "image/png"], // Control allowed formats
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 1 day
    unoptimized: false, // Set to true if you want to disable optimization globally
  },
};

module.exports = nextConfig;