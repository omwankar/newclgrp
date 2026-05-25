"use client";

import dynamic from "next/dynamic";
import { useRef, type ReactNode } from "react";
import { useTubesContentReveal } from "./tubes-reveal";

type TubesBackgroundLazyProps = {
  children?: ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
};

const TubesCanvas = dynamic(
  () =>
    import("./TubesBackground").then((mod) => ({ default: mod.TubesCanvas })),
  {
    ssr: false,
    loading: () => <div className="tubes-bg-loading" aria-hidden="true" />,
  }
);

export function TubesBackgroundLazy({
  children,
  className = "",
  enableClickInteraction = true,
}: TubesBackgroundLazyProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  useTubesContentReveal(contentRef, [children]);

  return (
    <div
      className={`tubes-bg${className ? ` ${className}` : ""}`}
      role="presentation"
    >
      <TubesCanvas enableClickInteraction={enableClickInteraction} />
      <div ref={contentRef} className="tubes-bg-content">
        {children}
      </div>
    </div>
  );
}

export type { TubesBackgroundLazyProps };
