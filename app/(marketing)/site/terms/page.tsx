import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service — Synergy" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow"><span className="tick"></span>Legal</span>
          <h1 style={{ marginTop: 16 }}>Terms of Service</h1>
        </div>
        <div className="prose" style={{ marginTop: 24 }}>
          <p>These Terms govern your use of the Synergy — Global IT Solutions website. By using the site, you agree to these Terms.</p>
          <h2>Use of the site</h2>
          <p>You may use this site for lawful purposes only. You agree not to misuse, disrupt, or attempt to gain unauthorized access to the site or its systems.</p>
          <h2>Intellectual property</h2>
          <p>All content on this site — text, graphics, logos and design — is owned by Synergy or its licensors and is protected by applicable laws.</p>
          <h2>No warranty</h2>
          <p>The site is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the site will be uninterrupted or error-free.</p>
          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, Synergy is not liable for any indirect or consequential damages arising from your use of the site.</p>
          <h2>Contact</h2>
          <p>Questions about these Terms? Reach us via the contact page.</p>
        </div>
      </div>
    </section>
  );
}
