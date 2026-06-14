import type { MetadataRoute } from "next";
import {
  getServices,
  getExpertise,
  getIndustries,
  getCaseStudies,
  getSiteMeta,
} from "./(marketing)/site/_lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const m = await getSiteMeta();
  const base = m.siteUrl;

  const staticPaths = [
    "/",
    "/site",
    "/site/about",
    "/site/services",
    "/site/expertise",
    "/site/industries",
    "/site/case-studies",
    "/site/careers",
    "/site/contact",
  ];

  const [services, expertise, industries, cases] = await Promise.all([
    getServices(),
    getExpertise(),
    getIndustries(),
    getCaseStudies(),
  ]);

  const dynamicPaths = [
    ...services.map((s) => `/site/services/${s.slug}`),
    ...expertise.map((s) => `/site/expertise/${s.slug}`),
    ...industries.map((s) => `/site/industries/${s.slug}`),
    ...cases.map((c) => `/site/case-studies/${c.slug}`),
  ];

  const now = new Date();
  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/site" ? 1 : path === "/" ? 0.9 : 0.7,
  }));
}
