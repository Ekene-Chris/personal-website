import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "Ekene Chris | DevOps Architect",
  description:
    "Empowering African Engineers Through DevOps Excellence. Building the bridge between African talent and global opportunities through technical expertise and strategic upskilling.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
