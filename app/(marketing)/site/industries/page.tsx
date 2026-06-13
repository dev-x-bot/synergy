import Link from "next/link";
import type { Metadata } from "next";
import { industries } from "../_lib/content";
import { industryIcons, ArrowRight } from "../_lib/icons";
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
            {industries.map((s, i) => {
              const Icon = industryIcons[s.slug];
              return (
                <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                  <div className="exp-ic"><Icon strokeWidth={1.7} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <Link className="exp-more" href={`/site/industries/${s.slug}`}>Learn more <ArrowRight /></Link>
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
