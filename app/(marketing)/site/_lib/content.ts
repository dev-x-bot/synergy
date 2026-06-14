// Content service. Today it returns local mock JSON; to move to a CMS later,
// swap the bodies of these getters for `fetch(...)` calls — pages/components
// don't change because they only depend on these typed, async functions.
import servicesData from "./data/services.json";
import industriesData from "./data/industries.json";
import caseStudiesData from "./data/case-studies.json";
import siteData from "./data/site.json";
import type {
  Item, CaseStudy, Office, Stat, FeaturedCard, FooterLink, Opening, Faq,
} from "./types";

const services = servicesData as Item[];
const industries = industriesData as Item[];
const caseStudies = caseStudiesData as CaseStudy[];

// ── Services & expertise (same data, split by `kind`) ──
export async function getServices(): Promise<Item[]> {
  return services.filter((s) => s.kind !== "expertise");
}
export async function getExpertise(): Promise<Item[]> {
  return services.filter((s) => s.kind === "expertise");
}
export async function getServiceBySlug(slug: string): Promise<Item | undefined> {
  return services.find((s) => s.slug === slug && s.kind !== "expertise");
}
export async function getExpertiseBySlug(slug: string): Promise<Item | undefined> {
  return services.find((s) => s.slug === slug && s.kind === "expertise");
}

// ── Industries ──
export async function getIndustries(): Promise<Item[]> {
  return industries;
}
export async function getIndustryBySlug(slug: string): Promise<Item | undefined> {
  return industries.find((s) => s.slug === slug);
}

// ── Case studies ──
export async function getCaseStudies(): Promise<CaseStudy[]> {
  return caseStudies;
}
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  return caseStudies.find((c) => c.slug === slug);
}

// ── Site-level content ──
export async function getStats(): Promise<Stat[]> {
  return siteData.stats as Stat[];
}
export async function getOffices(): Promise<Office[]> {
  return siteData.offices as Office[];
}
export async function getStripNames(): Promise<string[]> {
  return siteData.stripNames as string[];
}
export async function getFeatured(): Promise<FeaturedCard[]> {
  return siteData.home.featured as FeaturedCard[];
}
export async function getFooterLinks(): Promise<FooterLink[]> {
  return siteData.footerLinks as FooterLink[];
}
export async function getCareers(): Promise<{ openings: Opening[]; faqs: Faq[] }> {
  return siteData.careers as { openings: Opening[]; faqs: Faq[] };
}
