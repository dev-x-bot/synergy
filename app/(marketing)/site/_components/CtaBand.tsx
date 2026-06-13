import Link from "next/link";

export default function CtaBand({
  title = "Get in touch with us",
  text = "Have a question or need a hand scoping your next build? Talk to our team and we'll map a path forward.",
  cta = "Get a Quote",
  href = "/site/contact",
}: {
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="section cta-band">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="ct">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="ca">
            <Link className="btn btn-primary" href={href}>
              {cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
