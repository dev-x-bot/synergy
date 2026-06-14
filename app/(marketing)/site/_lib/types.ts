// Shared content types. Icons are stored as string names (resolved via the icon
// registry in icons.tsx) so the data is plain/JSON-portable and CMS-ready.

export type Point = { h: string; p: string; icon: string };

export type Item = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  icon: string; // card icon (lucide name)
  points: Point[];
  kind?: "service" | "expertise";
};

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
};

export type Office = { city: string; addr: string; link: string };
export type Stat = { target: number; suffix: string; label: string };
export type FeaturedCard = { title: string; href: string; icon: string; blurb: string };
export type FooterLink = { label: string; href: string };
export type Opening = { flag: string; title: string };
export type Faq = { q: string; a: string };
export type SiteMeta = {
  name: string;
  shortName: string;
  siteUrl: string;
  basePath: string;
  description: string;
  email: string;
};
