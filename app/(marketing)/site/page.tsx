import Link from "next/link";
import ImgSlot from "./_components/ImgSlot";
import { caseStudies } from "./_lib/content";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const expertise = [
  { h: "AI / ML", href: "/site/services/ai-ml", p: "Production-grade machine learning, generative AI and intelligent automation that turn data into decisions.", icon: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></> },
  { h: "Banking & Capital Markets", href: "/site/industries/banking-capital-markets", p: "Resilient, compliant platforms for the institutions that keep global capital moving safely.", icon: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /> },
  { h: "Cloud Enablement", href: "/site/services/cloud-enablement", p: "Migration, modernization and FinOps that make the cloud faster, leaner and genuinely yours.", icon: <path d="M16 19a4 4 0 000-8 6 6 0 00-11.5-2A4.5 4.5 0 005 19h11z" /> },
  { h: "Digital Transformation", href: "/site/services/digital-transformation", p: "End-to-end reinvention of products and operations, designed around the people who use them.", icon: <path d="M4 17l6-6 4 4 6-7M4 7h4M4 7v4" /> },
  { h: "Cyber Security", href: "/site/services/cyber-security", p: "Zero-trust architecture, threat detection and governance that protects what matters most.", icon: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></> },
  { h: "Emerging Talent", href: "/site/services/emerging-talent", p: "Trained, screened and mentored specialists ready to plug into your roadmap from day one.", icon: <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v7M7 11v4c0 1 2 2 5 2s5-1 5-2v-4" /> },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="ambient">
          <div className="blob gold"></div>
          <div className="blob lime"></div>
          <div className="grid"></div>
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="badge reveal"><span className="dot"></span>Where Talent Meets Opportunity</span>
            <h1 className="reveal d1">We deliver top talent by <span className="gradient-text">thinking globally</span> and acting locally.</h1>
            <p className="lead reveal d2">Whether you need a highly skilled specialist or a practiced full-time team, Synergy makes it happen — secure, scalable IT delivered around the way you work.</p>
            <div className="hero-actions reveal d3">
              <Link className="btn btn-primary" href="/site/contact">Find Talent Now<Arrow /></Link>
              <Link className="btn btn-ghost" href="/site/services">Explore Expertise</Link>
            </div>
            <div className="hero-trust reveal d4">
              <div className="avatars"><span>AI</span><span>BK</span><span>CL</span><span>DX</span></div>
              <span>Trusted across <b>4 global delivery hubs</b> and 40+ enterprise teams.</span>
            </div>
          </div>

          <div className="hero-visual reveal d2">
            <ImgSlot />
            <div className="hero-card">
              <span className="hc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg></span>
              <div><div className="hc-num">98%</div><div className="hc-lbl">Placement success rate</div></div>
            </div>
            <div className="hero-tag"><span className="pin"></span>Global delivery, local presence</div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="strip">
        <div className="wrap strip-inner">
          <span className="lbl">Expertise that powers</span>
          <span className="name">Banking</span>
          <span className="name">Healthcare</span>
          <span className="name">Retail</span>
          <span className="name">Logistics</span>
          <span className="name">Cloud</span>
        </div>
      </div>

      {/* INTRO */}
      <section className="section intro">
        <div className="wrap intro-grid">
          <div className="big reveal">Synergy</div>
          <p className="reveal d1">As the world develops rapidly, Synergy helps companies stay ahead of the curve by <b>modernizing technology</b>, <b>reimagining processes</b>, and <b>transforming experiences</b>.</p>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section" id="expertise">
        <div className="wrap">
          <div className="section-head center">
            <span className="eyebrow reveal"><span className="tick"></span>Extent of Expertise</span>
            <h2 className="reveal d1">Expertise at your service</h2>
            <p className="reveal d2">Unparalleled depth and breadth across the disciplines that move modern enterprises forward.</p>
          </div>

          <div className="exp-grid">
            {expertise.map((e, i) => (
              <article className={`exp-card reveal${i % 3 ? " d" + (i % 3) : ""}`} key={e.h}>
                <div className="exp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{e.icon}</svg></div>
                <h3>{e.h}</h3>
                <p>{e.p}</p>
                <Link className="exp-more" href={e.href}>Learn more <Arrow /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <div className="ct">
              <h2>Get in touch with us</h2>
              <p>Have a question or need a hand scoping your next build? Talk to our sales team and we&apos;ll map a path forward.</p>
            </div>
            <div className="ca">
              <Link className="btn btn-primary" href="/site/contact">Get a Quote<Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section" id="cases" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow reveal"><span className="tick"></span>Case Studies</span>
            <h2 className="reveal d1">Real-world results</h2>
            <p className="reveal d2">See the impact of our solutions in action across logistics, retail and banking.</p>
          </div>

          <div className="case-grid">
            {caseStudies.map((c, i) => (
              <article className={`case-card reveal${i ? " d" + i : ""}`} key={c.slug}>
                <div className="case-media">
                  <span className="case-tag">{c.tag}</span>
                  <ImgSlot />
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.summary}</p>
                  <Link className="case-link" href={`/site/case-studies/${c.slug}`}>Read case study <Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats">
        <div className="wrap stats-grid">
          <div className="stats-intro reveal">
            <span className="eyebrow"><span className="tick"></span>By the Numbers</span>
            <h2 style={{ marginTop: 14 }}>Synergy, measured.</h2>
            <p>A quick snapshot of the reach and momentum behind every engagement.</p>
          </div>
          <div className="stat reveal d1"><div className="num"><span data-target="4">0</span></div><div className="lbl">Global locations</div></div>
          <div className="stat reveal d2"><div className="num"><span data-target="1200">0</span><span className="suf">+</span></div><div className="lbl">Consultants hired</div></div>
          <div className="stat reveal d3"><div className="num"><span data-target="350">0</span><span className="suf">+</span></div><div className="lbl">Projects delivered</div></div>
        </div>
      </section>
    </>
  );
}
