import Link from "next/link";
import { services, industries } from "../_lib/content";
import { serviceIcons, industryIcons, ChevronDown, ArrowRight } from "../_lib/icons";

const svcMain = services.filter((s) => s.kind !== "expertise");
const svcExpertise = services.filter((s) => s.kind === "expertise");

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
              <Link className="nav-link" href="/site/industries">Industries<ChevronDown className="chev" /></Link>
              <div className="dropdown">
                {industries.map((i) => {
                  const Icon = industryIcons[i.slug];
                  return (
                    <Link key={i.slug} href={`/site/industries/${i.slug}`}>
                      <span className="di"><Icon strokeWidth={1.8} /></span>{i.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/services">Services<ChevronDown className="chev" /></Link>
              <div className="dropdown">
                {svcMain.map((s) => {
                  const Icon = serviceIcons[s.slug];
                  return (
                    <Link key={s.slug} href={`/site/services/${s.slug}`}>
                      <span className="di"><Icon strokeWidth={1.8} /></span>{s.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="nav-item">
              <Link className="nav-link" href="/site/expertise">Expertise<ChevronDown className="chev" /></Link>
              <div className="dropdown">
                {svcExpertise.map((s) => {
                  const Icon = serviceIcons[s.slug];
                  return (
                    <Link key={s.slug} href={`/site/expertise/${s.slug}`}>
                      <span className="di"><Icon strokeWidth={1.8} /></span>{s.title}
                    </Link>
                  );
                })}
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
            <Link className="btn btn-dark" href="/site/contact">Contact Us<ArrowRight /></Link>
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
              <Link key={s.slug} href={`/site/expertise/${s.slug}`}>{s.title}</Link>
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
