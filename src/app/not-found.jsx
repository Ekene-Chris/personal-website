import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Unmatched URLs render here, outside the (site) layout, so include the site
// chrome explicitly.
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-linen">
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>
              <p className="text-lg mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Link href="/" className="btn btn-primary inline-block">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
