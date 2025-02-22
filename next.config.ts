import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // This will allow the build to continue even if there are ESLint errors
  },
};

export default nextConfig;
