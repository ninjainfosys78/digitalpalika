// app/robots.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://ninjainfosys.com";

// Required when using `output: "export"`
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/api/*",
          "/_next/",
          "/private/",
          "/private/*",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
