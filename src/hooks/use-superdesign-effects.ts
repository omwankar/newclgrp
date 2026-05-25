"use client";

import { useEffect } from "react";

export function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("sd-scroll-progress");
    if (!bar) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function useMagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn, .sd-magnetic");

    const handlers: Array<{
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    buttons.forEach((node) => {
      const el = node as HTMLElement;
      const strength = 14;

      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      };

      const leave = () => {
        el.style.transform = "";
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = "";
      });
    };
  }, []);
}

export function useStaggerReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sd-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document
        .querySelectorAll(".sd-stagger, .sd-scale-reveal")
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            observer.observe(el);
          }
        });
    };

    observe();
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}

export function useCardSpotlight() {
  useEffect(() => {
    const cards = document.querySelectorAll(".sd-spotlight");

    const cleanups: Array<() => void> = [];

    cards.forEach((node) => {
      const el = node as HTMLElement;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--sd-spot-x", `${x}%`);
        el.style.setProperty("--sd-spot-y", `${y}%`);
      };

      el.addEventListener("mousemove", onMove);
      cleanups.push(() => el.removeEventListener("mousemove", onMove));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

export function useParallaxSections() {
  useEffect(() => {
    const layers = document.querySelectorAll("[data-sd-parallax]");

    const onScroll = () => {
      layers.forEach((layer) => {
        const el = layer as HTMLElement;
        const speed = parseFloat(el.dataset.sdParallax || "0.15");
        const rect = el.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
