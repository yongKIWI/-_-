import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/advertising-ae", destination: "/", permanent: true },
      { source: "/performance-ae", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
