import Link from "next/link";
import { offices } from "../_lib/content";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="foot-logo" href="/site" aria-label="Synergy — Global IT Solutions">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/site/logo-full-dark.svg" alt="Synergy — Global IT Solutions" />
            </Link>
            <p>
              We deliver top talent by thinking globally and acting locally —
              secure, scalable IT built around the way you work.
            </p>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6v14H.2V8zm7.5 0h4.4v1.9h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.48h-4.6v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V22H7.7V8z" /></svg></a>
              <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.3 8.34L23 22h-6.6l-5.18-6.78L5.3 22H2.2l7.82-8.94L1.5 2h6.78l4.68 6.2L18.9 2zm-1.16 18h1.78L7.36 3.9H5.45L17.74 20z" /></svg></a>
              <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.6 5.6.6 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.4 5.6 18.3.5 12 .5z" /></svg></a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Useful Links</h4>
            <ul>
              <li><Link href="/site/expertise/ai-ml">AI / ML</Link></li>
              <li><Link href="/site/industries/banking-capital-markets">Banking</Link></li>
              <li><Link href="/site/expertise/cloud-enablement">Cloud Solutions</Link></li>
              <li><Link href="/site/expertise/digital-transformation">Digital Transformation</Link></li>
              <li><Link href="/site/case-studies">Case Studies</Link></li>
              <li><Link href="/site/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Subscribe Now</h4>
            <p className="foot-sub">Get the latest roles and insights right in your inbox.</p>
            <SubscribeForm />
          </div>
        </div>

        <div className="offices">
          {offices.map((o) => (
            <div className="office" key={o.city}>
              <h5><span className="pin"></span>{o.city}</h5>
              <p>{o.addr}</p>
              <a href="#">{o.link}</a>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© 2020 Synergy — Global IT Solutions. All rights reserved.</span>
          <div className="links">
            <Link href="/site/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
