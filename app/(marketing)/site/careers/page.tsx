import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "../_lib/icons";
import CtaBand from "../_components/CtaBand";

export const metadata: Metadata = { title: "Careers — Synergy" };

const roles = [
  { title: "Senior Full-Stack Engineer", loc: "Hyderabad, India · Hybrid", team: "Engineering" },
  { title: "Cloud / DevOps Engineer", loc: "Bangalore, India · Hybrid", team: "Cloud" },
  { title: "Machine Learning Engineer", loc: "Remote · India", team: "AI / ML" },
  { title: "Cyber Security Consultant", loc: "Pune, India · Hybrid", team: "Security" },
  { title: "Technical Recruiter", loc: "Austin, USA · On-site", team: "Talent" },
];

export default function CareersPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Careers</span>
            <h1 className="reveal d1">Build what&apos;s next with us</h1>
            <p className="reveal d2">We&apos;re always looking for curious, kind and capable people. Explore open roles across our global hubs.</p>
          </div>

          <div className="reveal d2" style={{ marginTop: 44 }}>
            {roles.map((r) => (
              <div className="cta-box" key={r.title} style={{ marginBottom: 14 }}>
                <div className="ct">
                  <h2 style={{ fontSize: 22 }}>{r.title}</h2>
                  <p>{r.team} · {r.loc}</p>
                </div>
                <div className="ca">
                  <Link className="btn btn-dark" href="/site/contact">Apply<ArrowRight /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Don't see your role?" text="We're growing fast. Send us your details and we'll reach out when something fits." cta="Get in touch" href="/site/contact" />
    </>
  );
}
