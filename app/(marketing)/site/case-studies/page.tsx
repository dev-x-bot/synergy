import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudies } from "../_lib/content";
import { ArrowRight } from "../_lib/icons";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Case Studies — Synergy" };

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Case Studies</span>
            <h1 className="reveal d1">Real-world results</h1>
            <p className="reveal d2">See the impact of our solutions in action across logistics, retail and banking.</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((c, i) => (
              <article className={`case-card reveal${i ? " d" + i : ""}`} key={c.slug}>
                <div className="case-media">
                  <span className="case-tag">{c.tag}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <Link className="case-link" href={`/site/case-studies/${c.slug}`}>Read case study <ArrowRight /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
