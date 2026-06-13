import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "../_lib/content";
import ImgSlot from "../_components/ImgSlot";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Case Studies — Synergy" };

export default function CaseStudiesPage() {
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
                  <ImgSlot />
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <Link className="case-link" href={`/site/case-studies/${c.slug}`}>Read case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
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
