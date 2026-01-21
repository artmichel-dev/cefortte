import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.zupernova.dev",
        pathname: "/cefortte/**",
      },
      {
        protocol: "https",
        hostname: "cdn.zupernova.dev",
        pathname: "/cefortte/**",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
        pathname: "/plus-assets/**",
      },
    ],
  },
};

export default nextConfig;
