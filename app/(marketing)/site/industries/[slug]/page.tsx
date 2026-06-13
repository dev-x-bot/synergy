import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, getIndustry } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = getIndustry((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getIndustry((await params).slug);
  if (!s) notFound();
  return <DetailPage kicker="Industry" item={s} backHref="/site/industries" backLabel="All industries" />;
}
