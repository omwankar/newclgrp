"use client";

import { Loader, CustomCursor, MobileMenu } from "@/components/layout/SiteChrome";
import { SiteEffects } from "@/components/layout/SiteEffects";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ParticlesCanvas } from "@/components/effects/ParticlesCanvas";
import { AuroraBlobs } from "@/components/effects/AuroraBlobs";
import { navLinks } from "@/lib/site-config";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  loaderSubtitle?: string;
  mobileLinks?: { href: string; label: string; section?: string }[];
  navbarProps?: React.ComponentProps<typeof Navbar>;
};

export function PageShell({
  children,
  loaderSubtitle = "Group",
  mobileLinks = [...navLinks],
  navbarProps,
}: PageShellProps) {
  return (
    <>
      <ParticlesCanvas />
      <AuroraBlobs />
      <ScrollProgress />
      <CustomCursor />
      <Loader subtitle={loaderSubtitle} />
      <MobileMenu links={mobileLinks} />
      <Navbar {...navbarProps} />
      <SiteEffects />
      <div className="site-content">{children}</div>
    </>
  );
}
