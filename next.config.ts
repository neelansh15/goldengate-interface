import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Handle external modules properly for the @1inch/limit-order-sdk
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        os: false,
        url: false,
      };
    }
    
    return config;
  },
  transpilePackages: ['@1inch/limit-order-sdk'],
};

export default nextConfig;
