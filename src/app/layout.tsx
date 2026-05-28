import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import "../styles/superdesign.css";
import "../styles/premium-ui.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Technology, Logistics & Innovation`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Clarusto Group",
    "technology solutions",
    "logistics",
    "freight forwarding",
    "global business",
    "IT solutions",
    "digital transformation",
  ],
  openGraph: {
    title: `${siteConfig.name} — Global Technology & Logistics Solutions`,
    description:
      "Building Global Solutions Through Technology, Logistics & Innovation",
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: siteConfig.brand.logo, type: "image/png" }],
    apple: siteConfig.brand.logo,
    shortcut: siteConfig.brand.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
