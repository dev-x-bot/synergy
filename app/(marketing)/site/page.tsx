import Link from "next/link";
import { caseStudies } from "./_lib/content";
import { serviceIcons, industryIcons, ArrowRight, BadgeCheck } from "./_lib/icons";
import StatsSection from "./_components/StatsSection";

const STRIP_NAMES = ["Banking", "Healthcare", "Retail", "Logistics", "Cloud", "Insurance", "Manufacturing", "Telecom", "Public Sector"];

const expertise = [
  { h: "AI / ML", href: "/site/expertise/ai-ml", Icon: serviceIcons["ai-ml"], p: "Production-grade machine learning, generative AI and intelligent automation that turn data into decisions." },
  { h: "Banking & Capital Markets", href: "/site/industries/banking-capital-markets", Icon: industryIcons["banking-capital-markets"], p: "Resilient, compliant platforms for the institutions that keep global capital moving safely." },
  { h: "Cloud Enablement", href: "/site/expertise/cloud-enablement", Icon: serviceIcons["cloud-enablement"], p: "Migration, modernization and FinOps that make the cloud faster, leaner and genuinely yours." },
  { h: "Digital Transformation", href: "/site/expertise/digital-transformation", Icon: serviceIcons["digital-transformation"], p: "End-to-end reinvention of products and operations, designed around the people who use them." },
  { h: "Cyber Security", href: "/site/expertise/cyber-security", Icon: serviceIcons["cyber-security"], p: "Zero-trust architecture, threat detection and governance that protects what matters most." },
  { h: "Emerging Talent", href: "/site/expertise/emerging-talent", Icon: serviceIcons["emerging-talent"], p: "Trained, screened and mentored specialists ready to plug into your roadmap from day one." },
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
        <div className="wrap">
          <div className="hero-copy">
          <h1 className="reveal d1">Delivering <span className="gradient-text">Technology</span> That Works For You</h1>
          <p className="lead reveal d2">Whether you need a highly skilled specialist or a practiced full-time team, Synergy makes it happen — secure, scalable IT delivered around the way you work.</p>
          <div className="hero-actions reveal d3">
            <Link className="btn btn-primary" href="/site/contact">Find Talent Now<ArrowRight /></Link>
            <Link className="btn btn-ghost" href="/site/expertise">Explore Expertise</Link>
          </div>
          <div className="hero-badges reveal d4">
            <span className="hero-badge">
              <span className="hb-ic"><BadgeCheck strokeWidth={2.2} /></span>
              <span><b>98%</b> placement success rate</span>
            </span>
            <span className="hero-badge">
              <span className="hb-dot"></span>Global delivery, local presence
            </span>
          </div>
          </div> 
        </div>
      </section>

      {/* LOGO STRIP — marquee slider */}
      <div className="strip">
        <div className="wrap strip-inner">
          <span className="lbl">Expertise that powers</span>
          <div className="marquee">
            <div className="marquee-track" aria-hidden="false">
              {STRIP_NAMES.map((n) => <span className="name" key={n}>{n}</span>)}
              {STRIP_NAMES.map((n) => <span className="name" key={n + "-2"} aria-hidden="true">{n}</span>)}
            </div>
          </div>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.title} />
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
      <StatsSection />
    </>
  );
}
