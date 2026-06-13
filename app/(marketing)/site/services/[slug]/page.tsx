import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = getService((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const isExpertise = s.kind === "expertise";
  return (
    <DetailPage
      kicker={isExpertise ? "Expertise" : "Service"}
      item={s}
      backHref="/site/services"
      backLabel={isExpertise ? "All expertise" : "All services"}
    />
  );
}
