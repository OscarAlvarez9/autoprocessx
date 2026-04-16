import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
