import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.importpremium.pt",
      },
      {
        protocol: "https",
        hostname: "qvlcsboadnmbqregliiv.supabase.co",
      },
    ],
  },
};

export default nextConfig;