import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "../../_lib/content";
import ImgSlot from "../../_components/ImgSlot";
import CtaBand from "../../_components/CtaBand";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return { title: c ? `${c.title} — Synergy` : "Synergy" };
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Link className="back-link" href="/site/case-studies">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            All case studies
          </Link>
          <div className="section-head">
            <span className="eyebrow reveal"><span className="tick"></span>{c.tag}</span>
            <h1 className="reveal d1">{c.title}</h1>
            <p className="reveal d2">{c.summary}</p>
          </div>
          <div className="reveal d2" style={{ marginTop: 28 }}>
            <ImgSlot className="" />
          </div>
          <div className="prose reveal d3" style={{ marginTop: 28 }}>
            <h2>The challenge</h2>
            <p>The client needed to modernize how they operate without disrupting the business that depends on it every day.</p>
            <h2>What we did</h2>
            <p>Synergy assembled a focused team that paired domain knowledge with modern engineering practice — shipping in small, safe increments and measuring impact at every step.</p>
            <h2>The outcome</h2>
            <p>{c.summary}</p>
          </div>
        </div>
      </section>
      <CtaBand title="Want results like these?" cta="Talk to us" />
    </>
  );
}
