import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Ekene Chris | DevOps Architect",
  description:
    "Empowering African Engineers Through DevOps Excellence. Building the bridge between African talent and global opportunities through technical expertise and strategic upskilling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
