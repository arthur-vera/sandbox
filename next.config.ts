import type { NextConfig } from "next";

process.env.NEXT_DISABLE_TURBOPACK = "true";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
