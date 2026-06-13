import Link from "next/link";
import type { Metadata } from "next";
import { industries } from "../_lib/content";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Industries — Synergy" };

export default function IndustriesPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Who we serve</span>
            <h1 className="reveal d1">Industries</h1>
            <p className="reveal d2">Deep domain expertise for the sectors where reliability, security and scale are non-negotiable.</p>
          </div>
          <div className="exp-grid">
            {industries.map((s, i) => (
              <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                <div className="exp-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <Link className="exp-more" href={`/site/industries/${s.slug}`}>Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
