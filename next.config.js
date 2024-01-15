/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // if your website has no www, drop it
      },
    ],
  },
};

module.exports = nextConfig;
