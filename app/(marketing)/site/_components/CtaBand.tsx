import Link from "next/link";
import { ArrowRight } from "../_lib/icons";

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
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
