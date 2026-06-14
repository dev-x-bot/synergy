import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SiteInteractions from "./_components/SiteInteractions";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
