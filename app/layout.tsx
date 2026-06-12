import type { Metadata, Viewport } from "next";
import { Sora, Onest } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synergy — Coming Soon",
  description:
    "Synergy — Global IT Solutions. A smarter way to deliver secure, scalable IT. Launching soon.",
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fbfcf8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  );
}
