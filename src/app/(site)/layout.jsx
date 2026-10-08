import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Shared chrome for the main site. Landing pages (e.g. /webinar) live outside
// this group so they can render without the full navigation.
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
