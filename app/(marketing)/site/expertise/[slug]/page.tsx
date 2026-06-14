import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getExpertise, getExpertiseBySlug } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export async function generateStaticParams() {
  return (await getExpertise()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = await getExpertiseBySlug((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function ExpertiseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = await getExpertiseBySlug((await params).slug);
  if (!s) notFound();
  return <DetailPage kicker="Expertise" item={s} backHref="/site/expertise" backLabel="All expertise" />;
}
