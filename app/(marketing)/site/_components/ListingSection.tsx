import Link from "next/link";
import type { Item } from "../_lib/types";
import { Icon, ArrowRight } from "../_lib/icons";
import CtaBand from "./CtaBand";

export default function ListingSection({
  kicker,
  title,
  intro,
  items,
  basePath,
}: {
  kicker: string;
  title: string;
  intro: string;
  items: Item[];
  basePath: string; // e.g. "/site/services"
}) {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>{kicker}</span>
            <h1 className="reveal d1">{title}</h1>
            <p className="reveal d2">{intro}</p>
          </div>
          <div className="exp-grid">
            {items.map((s, i) => (
              <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={s.slug}>
                <div className="exp-ic"><Icon name={s.icon} strokeWidth={1.7} /></div>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <Link className="exp-more" href={`${basePath}/${s.slug}`}>Learn more <ArrowRight /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
