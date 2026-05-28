"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

export function Loader({ subtitle = "Group" }: { subtitle?: string }) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPct((prev) => {
        const next = Math.min(prev + Math.random() * 15, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 300);
        }
        return next;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-inner">
        <Logo height={56} href="" className="loader-brand-logo" />
        <div className="loader-subtitle">{subtitle}</div>
        <div className="loader-bar" />
        <div className="loader-pct">{Math.floor(pct)}%</div>
      </div>
    </div>
  );
}

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorRing = document.getElementById("cursor-ring");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onLeave = () => {
      if (cursor) cursor.style.opacity = "0";
      if (cursorRing) cursorRing.style.opacity = "0";
    };

    const onEnter = () => {
      if (cursor) cursor.style.opacity = "1";
      if (cursorRing) cursorRing.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}

export function MobileMenu({
  links,
}: {
  links: { href: string; label: string; section?: string }[];
}) {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileClose = document.getElementById("mobile-close");

    const open = () => mobileMenu?.classList.add("open");
    const close = () => mobileMenu?.classList.remove("open");

    hamburger?.addEventListener("click", open);
    mobileClose?.addEventListener("click", close);

    return () => {
      hamburger?.removeEventListener("click", open);
      mobileClose?.removeEventListener("click", close);
    };
  }, []);

  return (
    <div id="mobile-menu">
      <button
        id="mobile-close"
        type="button"
        className="mobile-close"
        aria-label="Close menu"
      >
        ✕
      </button>
      <div className="mobile-menu-brand">
        <Logo height={40} />
      </div>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="nav-link"
          data-section={link.section}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

