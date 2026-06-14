import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "../_lib/icons";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Careers — Synergy" };

const openings = [
  { flag: "🇺🇸", title: "US Openings" },
  { flag: "🇮🇳", title: "India Openings" },
  { flag: "🌍", title: "Remote Openings" },
];

const faqs = [
  {
    q: "How do I apply for a job at your company?",
    a: "To apply, submit your resume and details through our careers page or the contact form on our website — our talent team will take it from there.",
  },
  {
    q: "Do you have internships or entry-level positions available?",
    a: "Yes. We offer internships and entry-level positions for those just starting their careers. These roles provide valuable experience and the opportunity to learn from experienced professionals.",
  },
  {
    q: "What is the hiring process like at your company?",
    a: "Our hiring process typically includes submitting an application, a phone or video interview, and potentially an in-person interview. If a job offer is made, we'll guide you through the next steps.",
  },
  {
    q: "Is your company diverse and inclusive?",
    a: "Diversity and inclusivity are important values at Synergy. We are committed to building a team that represents a wide range of backgrounds, perspectives, and experiences.",
  },
];

export default function CareersPage() {
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
                <h3>{o.title}</h3>
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
