"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-card">
        <h3 style={{ fontSize: 22 }}>Thanks — we&apos;ll be in touch ✦</h3>
        <p className="prose" style={{ marginTop: 10 }}>
          Your message is on its way to our team. We typically reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="cf-name">Full name</label>
        <input id="cf-name" name="name" type="text" required placeholder="Jane Doe" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">Work email</label>
        <input id="cf-email" name="email" type="email" required placeholder="jane@company.com" />
      </div>
      <div className="field">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" placeholder="Company name" />
      </div>
      <div className="field">
        <label htmlFor="cf-msg">How can we help?</label>
        <textarea id="cf-msg" name="message" required placeholder="Tell us about your project or hiring need…" />
      </div>
      <button className="btn btn-primary" type="submit">
        Send message
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
    </form>
  );
}
