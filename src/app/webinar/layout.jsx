import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import TrackingPixels from "@/components/webinar/TrackingPixels";
import { host } from "@/lib/webinar/config";

// Next only makes og:url and the canonical link absolute when metadataBase is
// set explicitly; link scrapers expect absolute URLs there. Vercel provides
// the production domain (www.ekenechris.com) at build time.
export const metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
};

// Distraction-free chrome for the webinar funnel: no site navigation.
export default function WebinarLayout({ children }) {
  return (
    <div
      className="webinar flex flex-grow flex-col bg-linen text-black"
    >
      <header>
        <div className="container mx-auto px-6 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-lg font-bold"
          >
            <Image src="/logo.svg" alt="" width={36} height={31} priority />
            Ekene Chris
          </Link>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-black text-white/70">
        <div className="container mx-auto flex flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Ekene Chris · Teleios. All rights
            reserved.
          </p>
          <a
            href={host.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin aria-hidden="true" />
            Follow on LinkedIn
          </a>
        </div>
      </footer>

      <TrackingPixels />
    </div>
  );
}
