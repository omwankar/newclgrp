"use client";

import type { ReactNode } from "react";
import { TubesBackgroundLazy } from "@/components/effects/TubesBackgroundLazy";

type CtaSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function CtaSection({ id, className = "", children }: CtaSectionProps) {
  return (
    <section id={id} className={`section cta-tubes-section ${className}`.trim()}>
      <TubesBackgroundLazy className="cta-tubes-wrap">
        <div className="container cta-center cta-tubes-inner">
          <div className="cta-glass-panel reveal">{children}</div>
        </div>
      </TubesBackgroundLazy>
    </section>
  );
}
