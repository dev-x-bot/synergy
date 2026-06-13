import Link from "next/link";
import type { Metadata } from "next";
import { services } from "../_lib/content";
import { serviceIcons, ArrowRight } from "../_lib/icons";
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
            {services.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                  <div className="exp-ic"><Icon strokeWidth={1.7} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <Link className="exp-more" href={`/site/services/${s.slug}`}>Learn more <ArrowRight /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
