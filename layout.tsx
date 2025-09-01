import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import ConsentBar from "@/components/ConsentBar";
import AudioDock from "@/components/AudioDock";
import { BRAND } from "@/lib/constants";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: `${BRAND.name} — Bold gear, filthy beats, real aftercare`,
  description: "Men-only queer ecosystem: fashion (RAW/HUNG/HIGH + SUPER drops), HOTMESS RADIO 24/7, RAW CONVICT RECORDS, and HNH MESS (the only lube with real aftercare).",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  themeColor: "#FF5300",
  icons: { icon: "/favicon.svg" },
  openGraph: { images: ["/og"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-body antialiased">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-black focus:px-3 focus:py-2 focus:outline-none">
          Skip to content
        </a>
        <AgeGate />
        <Header />
        <main id="content" className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        <ConsentBar />
        <AudioDock />
      </body>
    </html>
  );
}
