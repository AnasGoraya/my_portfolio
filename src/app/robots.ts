import type { MetadataRoute } from "next";

/**
 * robots.txt generator — lets search engines crawl, with a sitemap pointer.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin"],
    },
    sitemap: "https://anasnazir.dev/sitemap.xml",
  };
}
