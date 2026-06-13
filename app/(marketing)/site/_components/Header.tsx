import Link from "next/link";
import { services, industries } from "../_lib/content";

const Chev = () => (
  <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Dot = () => (
  <span className="di">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  </span>
);

const svcMain = services.filter((s) =>
  ["project-services", "captive-offshoring", "staffing-services"].includes(s.slug)
);
const svcExpertise = services.filter(
  (s) => !["project-services", "captive-offshoring", "staffing-services"].includes(s.slug)
);

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="wrap nav">
          <Link className="brand" href="/site" aria-label="Synergy — Global IT Solutions">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/site/logo-full.svg" alt="Synergy — Global IT Solutions" />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            <div className="nav-item">
              <Link className="nav-link" href="/site/about">About Us</Link>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/industries">Industries<Chev /></Link>
              <div className="dropdown">
                {industries.map((i) => (
                  <Link key={i.slug} href={`/site/industries/${i.slug}`}><Dot />{i.title}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/services">Services<Chev /></Link>
              <div className="dropdown">
                {svcMain.map((s) => (
                  <Link key={s.slug} href={`/site/services/${s.slug}`}><Dot />{s.title}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/services">Expertise<Chev /></Link>
              <div className="dropdown">
                {svcExpertise.map((s) => (
                  <Link key={s.slug} href={`/site/services/${s.slug}`}><Dot />{s.title}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/case-studies">Case Studies</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" href="/site/careers">Careers</Link>
            </div>
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-dark" href="/site/contact">Contact Us<Arrow /></Link>
            <button className="hamburger" aria-label="Open menu" aria-expanded="false">
              <span className="hb"><i></i><i></i><i></i></span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile panel */}
      <div className="mobile-panel">
        <Link href="/site/about">About Us</Link>
        <div className="mgroup">
          <div className="mhead">Industries</div>
          <div className="msub">
            {industries.map((i) => (
              <Link key={i.slug} href={`/site/industries/${i.slug}`}>{i.title}</Link>
            ))}
          </div>
        </div>
        <div className="mgroup">
          <div className="mhead">Services</div>
          <div className="msub">
            {svcMain.map((s) => (
              <Link key={s.slug} href={`/site/services/${s.slug}`}>{s.title}</Link>
            ))}
          </div>
        </div>
        <div className="mgroup">
          <div className="mhead">Expertise</div>
          <div className="msub">
            {svcExpertise.map((s) => (
              <Link key={s.slug} href={`/site/services/${s.slug}`}>{s.title}</Link>
            ))}
          </div>
        </div>
        <Link href="/site/case-studies">Case Studies</Link>
        <Link href="/site/careers">Careers</Link>
        <Link className="btn btn-primary" href="/site/contact">Contact Us</Link>
      </div>
    </>
  );
}
