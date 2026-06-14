import type { MetadataRoute } from "next";
import { getSiteMeta } from "./(marketing)/site/_lib/content";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const m = await getSiteMeta();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${m.siteUrl}/sitemap.xml`,
  };
}
