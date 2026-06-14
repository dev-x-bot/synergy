import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getIndustries, getIndustryBySlug } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export async function generateStaticParams() {
  return (await getIndustries()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = await getIndustryBySlug((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function IndustryDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = await getIndustryBySlug((await params).slug);
  if (!s) notFound();
  return <DetailPage kicker="Industry" item={s} backHref="/site/industries" backLabel="All industries" />;
}
