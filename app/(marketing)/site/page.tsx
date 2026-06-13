import Link from "next/link";
import ImgSlot from "./_components/ImgSlot";
import { caseStudies } from "./_lib/content";
import { serviceIcons, industryIcons, ArrowRight } from "./_lib/icons";

const expertise = [
  { h: "AI / ML", href: "/site/services/ai-ml", Icon: serviceIcons["ai-ml"], p: "Production-grade machine learning, generative AI and intelligent automation that turn data into decisions." },
  { h: "Banking & Capital Markets", href: "/site/industries/banking-capital-markets", Icon: industryIcons["banking-capital-markets"], p: "Resilient, compliant platforms for the institutions that keep global capital moving safely." },
  { h: "Cloud Enablement", href: "/site/services/cloud-enablement", Icon: serviceIcons["cloud-enablement"], p: "Migration, modernization and FinOps that make the cloud faster, leaner and genuinely yours." },
  { h: "Digital Transformation", href: "/site/services/digital-transformation", Icon: serviceIcons["digital-transformation"], p: "End-to-end reinvention of products and operations, designed around the people who use them." },
  { h: "Cyber Security", href: "/site/services/cyber-security", Icon: serviceIcons["cyber-security"], p: "Zero-trust architecture, threat detection and governance that protects what matters most." },
  { h: "Emerging Talent", href: "/site/services/emerging-talent", Icon: serviceIcons["emerging-talent"], p: "Trained, screened and mentored specialists ready to plug into your roadmap from day one." },
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
            <h1 className="reveal d1">We deliver top talent by <span className="gradient-text">thinking globally</span> and acting locally.</h1>
            <p className="lead reveal d2">Whether you need a highly skilled specialist or a practiced full-time team, Synergy makes it happen — secure, scalable IT delivered around the way you work.</p>
            <div className="hero-actions reveal d3">
              <Link className="btn btn-primary" href="/site/contact">Find Talent Now<ArrowRight /></Link>
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
                <div className="exp-ic"><e.Icon strokeWidth={1.7} /></div>
                <h3>{e.h}</h3>
                <p>{e.p}</p>
                <Link className="exp-more" href={e.href}>Learn more <ArrowRight /></Link>
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
              <Link className="btn btn-primary" href="/site/contact">Get a Quote<ArrowRight /></Link>
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
                  <Link className="case-link" href={`/site/case-studies/${c.slug}`}>Read case study <ArrowRight /></Link>
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
