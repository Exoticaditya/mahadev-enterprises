/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '</.well-known/api-catalog>; rel="api-catalog", </llms-full.txt>; rel="resources"'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
