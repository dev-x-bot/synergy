import type { Metadata } from "next";
import { getServices } from "../_lib/content";
import ListingSection from "../_components/ListingSection";

export const metadata: Metadata = { title: "Services — Synergy" };

export default async function ServicesPage() {
  const items = await getServices();
  return (
    <ListingSection
      kicker="What we do"
      title="Services"
      intro="Specialists, squads and full project teams — engaged the way that fits your roadmap."
      items={items}
      basePath="/site/services"
    />
  );
}
