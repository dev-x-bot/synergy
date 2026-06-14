import Link from "next/link";
import type { Metadata } from "next";
import { getCareers } from "../_lib/content";
import { ArrowRight } from "../_lib/icons";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Careers — Synergy" };

export default async function CareersPage() {
  const { openings, faqs } = await getCareers();
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Careers</span>
            <h1 className="reveal d1">Build what&apos;s next with us</h1>
            <p className="reveal d2">Synergy offers a vibrant, collaborative atmosphere — not just a job. We love to teach, coach and ultimately advance your career. Our people are our greatest asset, and we strive to create an encouraging environment full of exceptional opportunities for individual growth.</p>
          </div>

          <div className="open-grid">
            {openings.map((o, i) => (
              <article className={`open-card reveal${i ? " d" + i : ""}`} key={o.title}>
                <span className="flag" aria-hidden="true">{o.flag}</span>
                <h2>{o.title}</h2>
                <Link className="btn btn-primary" href="/site/contact">
                  View Open Positions<ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Got questions?</span>
            <h2 className="reveal d1">Frequently asked questions</h2>
          </div>
          <div className="faq reveal d2">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Don't see your role?" text="We're growing fast. Send us your details and we'll reach out when something fits." cta="Get in touch" href="/site/contact" />
    </>
  );
}
