import type { Metadata } from "next";
import CtaBand from "../_components/CtaBand";
import StatsSection from "../_components/StatsSection";

export const metadata: Metadata = { title: "About Us — Synergy" };

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow reveal"><span className="tick"></span>About Us</span>
            <h1 className="reveal d1">We think globally and act locally.</h1>
            <p className="reveal d2">Synergy is a global IT solutions and talent partner. We connect enterprises with the specialists, teams and technology they need to move faster — securely and at scale.</p>
          </div>

          <div className="prose reveal d2" style={{ marginTop: 24 }}>
            <h2>Who we are</h2>
            <p>From four global delivery hubs, we deliver top talent and outcome-owned projects across AI/ML, cloud, cyber security and digital transformation. Whether you need a single hard-to-find expert or a full practiced team, we make it happen around the way you work.</p>
            <h2>How we work</h2>
            <p>We pair deep domain knowledge with modern engineering practice — shipping in small, safe increments and measuring impact at every step. The result is technology that&apos;s reliable, secure and genuinely yours.</p>
            <h2>What drives us</h2>
            <ul>
              <li><b>People first.</b> Great hires and happy teams build great software.</li>
              <li><b>Outcomes over output.</b> We measure success by your results, not hours logged.</li>
              <li><b>Built to last.</b> Secure, scalable foundations that evolve with you.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsSection flush />

      <CtaBand />
    </>
  );
}
