import type { Metadata } from "next";
import { getExpertise } from "../_lib/content";
import ListingSection from "../_components/ListingSection";

export const metadata: Metadata = { title: "Expertise — Synergy" };

export default async function ExpertisePage() {
  const items = await getExpertise();
  return (
    <ListingSection
      kicker="Extent of expertise"
      title="Expertise"
      intro="Unparalleled depth and breadth across the disciplines that move modern enterprises forward."
      items={items}
      basePath="/site/expertise"
    />
  );
}
