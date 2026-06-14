import type { Metadata, Viewport } from "next";
import { Roboto_Slab } from "next/font/google";
import "./site.css";
import { getSiteMeta } from "./site/_lib/content";

// Brand wordmark font ("Synergy") — slab serif matching the logo.
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-slab",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const m = await getSiteMeta();
  return {
    metadataBase: new URL(m.siteUrl),
    title: { default: m.name, template: "%s" },
    description: m.description,
    applicationName: m.shortName,
    icons: { icon: "/site/logo-full.svg" },
    alternates: { canonical: m.basePath },
    openGraph: {
      type: "website",
      siteName: m.name,
      title: m.name,
      description: m.description,
      url: m.basePath,
    },
    twitter: {
      card: "summary_large_image",
      title: m.name,
      description: m.description,
    },
  };
}

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
