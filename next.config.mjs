import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build target: leaner, faster static chunks for Vercel edge.
  output: "standalone",

  // Best-in-class modern image formats served from next/image.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [380, 420, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Aggressive long-term caching for hashed static assets.
  async headers() {
    return [
      {
        source: "/imgs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Keep vendor bundle minimal — never block first paint on heavy 3D.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Drop console logs in prod (keep errors/warnings).
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
};

// Monitor vendor chunk sizes: `ANALYZE=true npm run build`
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
