import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServices, getServiceBySlug } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export async function generateStaticParams() {
  return (await getServices()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = await getServiceBySlug((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = await getServiceBySlug((await params).slug);
  if (!s) notFound();
  return <DetailPage kicker="Service" item={s} backHref="/site/services" backLabel="All services" />;
}
