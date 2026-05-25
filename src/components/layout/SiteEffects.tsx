"use client";

import {
  useScrollReveal,
  useCounters,
  useNavbarScroll,
  useParallax,
  useCompanyCardTilt,
  useMapDotPulse,
  useNewsTabs,
  useSmoothScroll,
  useMarquee,
} from "@/hooks/use-site-effects";
import {
  useScrollProgress,
  useMagneticButtons,
  useStaggerReveal,
  useCardSpotlight,
  useParallaxSections,
} from "@/hooks/use-superdesign-effects";

export function SiteEffects() {
  useScrollReveal();
  useCounters();
  useNavbarScroll();
  useParallax();
  useCompanyCardTilt();
  useMapDotPulse();
  useNewsTabs();
  useSmoothScroll();
  useMarquee();
  useScrollProgress();
  useMagneticButtons();
  useStaggerReveal();
  useCardSpotlight();
  useParallaxSections();
  return null;
}
