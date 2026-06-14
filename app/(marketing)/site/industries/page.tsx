import type { Metadata } from "next";
import { getIndustries } from "../_lib/content";
import ListingSection from "../_components/ListingSection";

export const metadata: Metadata = { title: "Industries — Synergy" };

export default async function IndustriesPage() {
  const items = await getIndustries();
  return (
    <ListingSection
      kicker="Who we serve"
      title="Industries"
      intro="Deep domain expertise for the sectors where reliability, security and scale are non-negotiable."
      items={items}
      basePath="/site/industries"
    />
  );
}
