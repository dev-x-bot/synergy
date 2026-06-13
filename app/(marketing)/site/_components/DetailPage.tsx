import Link from "next/link";
import type { Item } from "../_lib/content";
import { ArrowRight } from "../_lib/icons";
import CtaBand from "./CtaBand";

export default function DetailPage({
  kicker,
  item,
  backHref,
  backLabel,
}: {
  kicker: string;
  item: Item;
  backHref: string;
  backLabel: string;
}) {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Link className="back-link" href={backHref}>
            <ArrowRight />
            {backLabel}
          </Link>
          <div className="section-head">
            <span className="eyebrow reveal"><span className="tick"></span>{kicker}</span>
            <h1 className="reveal d1">{item.title}</h1>
            <p className="reveal d2">{item.tagline}</p>
          </div>
          <div className="prose reveal d2" style={{ marginTop: 22 }}>
            <p>{item.intro}</p>
          </div>

          <div className="exp-grid">
            {item.points.map((pt, i) => (
              <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={pt.h}>
                <div className="exp-ic"><pt.icon strokeWidth={1.7} /></div>
                <h3>{pt.h}</h3>
                <p>{pt.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
