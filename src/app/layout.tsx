import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import "../styles/superdesign.css";
import "../styles/premium-ui.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23080A0E'/><text x='50%25' y='50%25' font-size='18' text-anchor='middle' dominant-baseline='central' fill='%23C9A84C' font-family='Georgia'>C</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
