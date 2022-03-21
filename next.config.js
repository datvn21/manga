/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "i.truyenvua.com", "tintruyen.net"],
  },
};
module.exports = nextConfig;
