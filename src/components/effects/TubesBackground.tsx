"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useTubesContentReveal } from "./tubes-reveal";

type TubesApp = {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
};

type TubesFactory = (
  canvas: HTMLCanvasElement,
  options: {
    tubes: {
      colors: string[];
      lights: { intensity: number; colors: string[] };
    };
  }
) => TubesApp;

type TubesBackgroundProps = {
  children?: ReactNode;
  className?: string;
  enableClickInteraction?: boolean;
};

type TubesCanvasProps = {
  enableClickInteraction?: boolean;
};

const TUBES_SCRIPT_ID = "clarusto-tubes-cursor-loader";
const TUBES_CDN =
  "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const BRAND_PALETTES = [
  {
    tubes: ["#C9A84C", "#E8C97A", "#1E6FD9"],
    lights: ["#C9A84C", "#E8C97A", "#1E6FD9", "#1DB86B"],
  },
  {
    tubes: ["#8A6A20", "#C9A84C", "#6958d5"],
    lights: ["#E8C97A", "#C9A84C", "#4D9BFF", "#4DDEA0"],
  },
  {
    tubes: ["#C9A84C", "#53bc28", "#1E6FD9"],
    lights: ["#E8C97A", "#fe8a2e", "#4D9BFF", "#1DB86B"],
  },
];

function randomPalette() {
  return BRAND_PALETTES[Math.floor(Math.random() * BRAND_PALETTES.length)];
}

function loadTubesFactory(): Promise<TubesFactory> {
  const win = window as Window & { __clarustoTubesFactory?: TubesFactory };

  if (win.__clarustoTubesFactory) {
    return Promise.resolve(win.__clarustoTubesFactory);
  }

  return new Promise((resolve, reject) => {
    const onReady = () => {
      window.removeEventListener("clarusto-tubes-ready", onReady);
      if (win.__clarustoTubesFactory) {
        resolve(win.__clarustoTubesFactory);
      } else {
        reject(new Error("TubesCursor factory missing after load"));
      }
    };

    window.addEventListener("clarusto-tubes-ready", onReady);

    if (!document.getElementById(TUBES_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TUBES_SCRIPT_ID;
      script.type = "module";
      script.textContent = `
        import TubesCursor from "${TUBES_CDN}";
        window.__clarustoTubesFactory = TubesCursor;
        window.dispatchEvent(new Event("clarusto-tubes-ready"));
      `;
      script.onerror = () => reject(new Error("Failed to load TubesCursor script"));
      document.head.appendChild(script);
    }
  });
}

export function TubesCanvas({ enableClickInteraction = true }: TubesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const tubesRef = useRef<TubesApp | null>(null);

  useEffect(() => {
    let mounted = true;
    let removeCanvasClick: (() => void) | undefined;
    let resizeObserver: ResizeObserver | undefined;

    const sizeCanvas = () => {
      const canvas = canvasRef.current;
      const host = hostRef.current;
      if (!canvas || !host) return false;

      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width < 2 || height < 2) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      return true;
    };

    const initTubes = async () => {
      if (!canvasRef.current || !hostRef.current) return;

      if (!sizeCanvas()) return;

      try {
        const TubesCursor = await loadTubesFactory();
        if (!mounted || !canvasRef.current) return;

        sizeCanvas();

        const palette = BRAND_PALETTES[0];
        tubesRef.current = TubesCursor(canvasRef.current, {
          tubes: {
            colors: palette.tubes,
            lights: { intensity: 180, colors: palette.lights },
          },
        });

        const canvas = canvasRef.current;
        const onCanvasClick = () => {
          if (!enableClickInteraction || !tubesRef.current) return;
          const next = randomPalette();
          tubesRef.current.tubes.setColors(next.tubes);
          tubesRef.current.tubes.setLightsColors(next.lights);
        };
        canvas.addEventListener("click", onCanvasClick);
        removeCanvasClick = () => canvas.removeEventListener("click", onCanvasClick);
      } catch (error) {
        console.error("Failed to load TubesCursor:", error);
      }
    };

    if (hostRef.current) {
      resizeObserver = new ResizeObserver(() => {
        sizeCanvas();
      });
      resizeObserver.observe(hostRef.current);
    }

    initTubes();

    return () => {
      mounted = false;
      removeCanvasClick?.();
      resizeObserver?.disconnect();
      tubesRef.current = null;
    };
  }, [enableClickInteraction]);

  return (
    <div ref={hostRef} className="tubes-canvas-host">
      <canvas ref={canvasRef} className="tubes-bg-canvas" />
      <div className="tubes-bg-vignette" aria-hidden="true" />
    </div>
  );
}

export function TubesBackground({
  children,
  className = "",
  enableClickInteraction = true,
}: TubesBackgroundProps) {
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
