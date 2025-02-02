import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iralj7kgpu64pokh.public.blob.vercel-storage.com",
        pathname: "/productImage/**",
      },
      {
        protocol: "https",
        hostname: "iralj7kgpu64pokh.public.blob.vercel-storage.com",
        pathname: "/ingredients/**", 
      },
    ],
  },
};

export default nextConfig;
