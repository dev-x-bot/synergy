import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "../../_lib/content";
import DetailPage from "../../_components/DetailPage";

export function generateStaticParams() {
  return services
    .filter((s) => s.kind === "expertise")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const s = getService((await params).slug);
  return { title: s ? `${s.title} — Synergy` : "Synergy" };
}

export default async function ExpertiseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);
  if (!s || s.kind !== "expertise") notFound();
  return <DetailPage kicker="Expertise" item={s} backHref="/site/expertise" backLabel="All expertise" />;
}
