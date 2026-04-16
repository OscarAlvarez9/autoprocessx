import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "autoprocessx.com" }],
        destination: "https://www.autoprocessx.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
