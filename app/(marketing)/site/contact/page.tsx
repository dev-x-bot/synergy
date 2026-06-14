import type { Metadata } from "next";
import { getOffices } from "../_lib/content";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = { title: "Contact — Synergy" };

export default async function ContactPage() {
  const offices = await getOffices();
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="tick"></span>Contact</span>
          <h1 className="reveal d1">Get in touch with us</h1>
          <p className="reveal d2">Tell us what you&apos;re building or who you&apos;re hiring for, and we&apos;ll map a path forward.</p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <ContactForm />
          </div>
          <div className="contact-info reveal d1">
            {offices.map((o) => (
              <div className="office" key={o.city}>
                <h5><span className="pin"></span>{o.city}</h5>
                <p>{o.addr}</p>
                <a href="#">{o.link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
