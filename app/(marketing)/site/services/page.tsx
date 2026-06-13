import Link from "next/link";
import type { Metadata } from "next";
import { services } from "../_lib/content";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Services & Expertise — Synergy" };

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>What we do</span>
            <h1 className="reveal d1">Services &amp; expertise</h1>
            <p className="reveal d2">Specialists, squads and full project teams across the disciplines that move modern enterprises forward.</p>
          </div>
          <div className="exp-grid">
            {services.map((s, i) => (
              <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                <div className="exp-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <Link className="exp-more" href={`/site/services/${s.slug}`}>Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
