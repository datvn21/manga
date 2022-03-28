/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // This works, and returns appropriate Response headers:
        source: "/(.*).jpg",
        headers: [
          {
            key: "Host",
            value: "nhanhtruyen.org",
          },
          {
            key: "Referer",
            value: "http://www.nettruyenmoi.com/",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
