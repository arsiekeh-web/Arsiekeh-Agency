import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/organization-schema";

// ------------------------------------------------------------------
// FONT LOADING — SANDBOX NOTE
// This build environment has no network access to fonts.googleapis.com
// (allowlisted domains are npm/pip/github registries only), so
// next/font/google cannot fetch Manrope/Inter here.
//
// Production setup (uncomment when building outside this sandbox,
// or self-host via next/font/local for zero runtime dependency on
// Google's CDN — recommended given target users are on patchy mobile
// data):
//
// import { Manrope, Inter } from "next/font/google";
// const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"], weight: ["500","600","700","800"] });
// const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["400","500","600"] });
// Then apply `${manrope.variable} ${inter.variable}` on <html> below.
// ------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Arsiekeh Agency — Built to Be Seen",
  description:
    "WhatsApp-first digital systems and branding for businesses, organisations and events in Sierra Leone — websites, AI WhatsApp agents, and brand identities that match what you're capable of.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-offwhite font-body">
        <OrganizationSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
