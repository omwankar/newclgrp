import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
};

export function GlassPanel({
  children,
  className = "",
  spotlight = false,
}: GlassPanelProps) {
  return (
    <div
      className={`sd-glass sd-glow-card${spotlight ? " sd-spotlight" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
