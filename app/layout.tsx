import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — ${site.strapline}`,
  description: site.short,
  metadataBase: new URL("https://scholarinchambers.com"),
  openGraph: {
    title: site.name,
    description: site.short,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
