"use client";

import { useEffect, type RefObject } from "react";

export function activateVisibleReveals(root: HTMLElement) {
  root.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
    const node = el as HTMLElement;
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      node.classList.add("visible");
    }
  });
}

export function useTubesContentReveal(
  contentRef: RefObject<HTMLDivElement | null>,
  deps: unknown[] = []
) {
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    requestAnimationFrame(() => {
      activateVisibleReveals(root);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
