import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { montserrat } from "./fonts";

export const metadata = {
  title: "Ekene Chris | DevOps Architect",
  description:
    "Empowering African Engineers Through DevOps Excellence. Building the bridge between African talent and global opportunities through technical expertise and strategic upskilling.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex flex-col min-h-screen">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
