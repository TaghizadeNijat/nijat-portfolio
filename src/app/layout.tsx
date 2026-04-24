import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Electrical Engineering ePortfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${siteConfig.name} | Electrical Engineering ePortfolio`,
    description: siteConfig.description,
    type: "website",
  },
  keywords: [
    "Nijat Taghizade",
    "Georgia Tech",
    "Electrical Engineering",
    "ePortfolio",
    "embedded systems",
    "semiconductor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.12),transparent_33%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.12),transparent_30%)]" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <ScrollReveal />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
