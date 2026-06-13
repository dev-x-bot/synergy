import type { Metadata, Viewport } from "next";
import "./site.css";

export const metadata: Metadata = {
  title: "Synergy — Global IT Solutions",
  description:
    "Synergy — Global IT Solutions. We deliver top talent by thinking globally and acting locally. Secure, scalable IT, AI/ML, cloud and digital transformation expertise.",
  icons: { icon: "/site/logo-full.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fbfcf8",
};

export default function MarketingRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
