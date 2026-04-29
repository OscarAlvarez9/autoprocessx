import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Frames de animación — nunca cambian, cache 1 año immutable.
        // Visita 2+ = 0 requests de red (servido desde caché del navegador).
        source: "/assets/:dir(robot_frames|robot_frames_sm|automation_frames|automation_frames_sm|chatbot_frames|chatbot_frames_sm|aplicaciones_frames|aplicaciones_frames_sm)/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Otros assets estáticos — cache 30 días con revalidate
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
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
