"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const observeReveals = () => {
      document
        .querySelectorAll(
          ".reveal, .reveal-left, .reveal-right, .premium-reveal, .glass-card, .pillar, .info-card, .news-card, .stat-bar-item, .value-card, .mission-card, .leadership-card, .office-card, .partnership-card"
        )
        .forEach((el) => {
          if (!observed.has(el)) {
            observed.add(el);
            observer.observe(el);
          }
        });
    };

    observeReveals();

    const mutationObserver = new MutationObserver(() => {
      observeReveals();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

export function useCounters() {
  useEffect(() => {
    function animateCounter(
      el: HTMLElement,
      target: number,
      suffix: string
    ) {
      const duration = 2000;
      const start = performance.now();

      function update(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting && !el.dataset.counted) {
            el.dataset.counted = "true";
            animateCounter(
              el,
              parseFloat(el.dataset.target || "0"),
              el.dataset.suffix || ""
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-counter]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export function useNavbarScroll() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link[data-section]");

    function updateActiveNav() {
      const sections = document.querySelectorAll("section[id], div[id]");
      let current = "";
      sections.forEach((sec) => {
        const htmlSec = sec as HTMLElement;
        if (window.scrollY >= htmlSec.offsetTop - 120) {
          current = sec.getAttribute("id") || "";
        }
      });
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          (link as HTMLElement).dataset.section === current
        );
      });
    }

    function onScroll() {
      navbar?.classList.toggle("scrolled", window.scrollY > 50);
      updateActiveNav();
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function useParallax() {
  useEffect(() => {
    function onScroll() {
      const heroBg = document.querySelector(".hero-bg") as HTMLElement | null;
      if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export function useCompanyCardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll(".company-card");

    cards.forEach((card) => {
      const el = card as HTMLElement;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) scale(1.01)`;
      };

      const onLeave = () => {
        el.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });
  }, []);
}

export function useMapDotPulse() {
  useEffect(() => {
    document.querySelectorAll(".map-dot").forEach((dot, i) => {
      const pulse = dot.querySelector(".pulse") as HTMLElement | null;
      if (pulse) pulse.style.animationDelay = `${i * 0.4}s`;
    });
  }, []);
}

export function useNewsTabs() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".news-tab");
    const newsCards = document.querySelectorAll(".news-card[data-category]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const cat = (tab as HTMLElement).dataset.tab;
        newsCards.forEach((card) => {
          const htmlCard = card as HTMLElement;
          const show = cat === "all" || htmlCard.dataset.category === cat;
          htmlCard.style.display = show ? "flex" : "none";
        });
      });
    });
  }, []);
}

export function useSmoothScroll() {
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu");

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          mobileMenu?.classList.remove("open");
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);
}

export function useMarquee() {
  useEffect(() => {
    const marquee = document.querySelector(".marquee-track");
    if (marquee) {
      marquee.innerHTML = marquee.innerHTML + marquee.innerHTML;
    }
  }, []);
}
