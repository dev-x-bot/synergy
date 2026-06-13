import type { Metadata, Viewport } from "next";
import { Roboto_Slab } from "next/font/google";
import "./site.css";

// Brand wordmark font ("Synergy") — slab serif matching the logo.
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-slab",
  display: "swap",
});

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
    <html lang="en" className={robotoSlab.variable}>
      <body>{children}</body>
    </html>
  );
}
