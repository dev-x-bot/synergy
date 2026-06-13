import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Synergy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow"><span className="tick"></span>Legal</span>
          <h1 style={{ marginTop: 16 }}>Privacy Policy</h1>
        </div>
        <div className="prose" style={{ marginTop: 24 }}>
          <p>This Privacy Policy explains how Synergy — Global IT Solutions (&quot;Synergy&quot;, &quot;we&quot;) collects, uses and protects information when you use our website and services.</p>
          <h2>Information we collect</h2>
          <p>We collect information you provide directly — such as your name, email and message when you contact us or subscribe — and basic technical data (like your browser and usage) to operate and improve the site.</p>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to enquiries and provide our services.</li>
            <li>To send updates you&apos;ve asked for, which you can opt out of any time.</li>
            <li>To secure, maintain and improve our website.</li>
          </ul>
          <h2>Sharing</h2>
          <p>We do not sell your personal data. We share it only with service providers who help us operate, under appropriate confidentiality obligations, or where required by law.</p>
          <h2>Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data. Contact us and we&apos;ll respond promptly.</p>
          <h2>Contact</h2>
          <p>Questions about this policy? Reach us via the contact page.</p>
        </div>
      </div>
    </section>
  );
}
