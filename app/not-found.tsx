// Global 404. With multiple root layouts (route groups, no app/layout.tsx),
// the root not-found must provide its own <html>/<body>.
import Link from "next/link";
import type { Metadata } from "next";
import "./(marketing)/site.css";
import { ArrowRight } from "./(marketing)/site/_lib/icons";

export const metadata: Metadata = { title: "Page not found — Synergy" };

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main>
          <section className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
            <div className="wrap">
              <div className="section-head center" style={{ margin: "0 auto" }}>
                <span className="eyebrow"><span className="tick"></span>Error 404</span>
                <h1 style={{ marginTop: 16 }}>Page not found</h1>
                <p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
                <div style={{ marginTop: 28, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <Link className="btn btn-primary" href="/site">Back to home<ArrowRight /></Link>
                  <Link className="btn btn-ghost" href="/site/contact">Contact us</Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
