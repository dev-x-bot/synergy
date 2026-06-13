import Header from "./_components/Header";
import Footer from "./_components/Footer";
import SiteInteractions from "./_components/SiteInteractions";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SiteInteractions />
    </>
  );
}
