import Link from "next/link";
import type { Metadata } from "next";
import { services } from "../_lib/content";
import { serviceIcons, ArrowRight } from "../_lib/icons";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Expertise — Synergy" };

const items = services.filter((s) => s.kind === "expertise");

export default function ExpertisePage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Extent of expertise</span>
            <h1 className="reveal d1">Expertise</h1>
            <p className="reveal d2">Unparalleled depth and breadth across the disciplines that move modern enterprises forward.</p>
          </div>
          <div className="exp-grid">
            {items.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                  <div className="exp-ic"><Icon strokeWidth={1.7} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <Link className="exp-more" href={`/site/expertise/${s.slug}`}>Learn more <ArrowRight /></Link>
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
