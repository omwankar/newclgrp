"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 140;
const MOUSE_RADIUS = 120;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

export function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, active: false };

    const colors = [
      "rgba(255, 255, 255, 0.55)",
      "rgba(99, 102, 241, 0.65)",
      "rgba(139, 92, 246, 0.55)",
      "rgba(6, 182, 212, 0.5)",
      "rgba(244, 63, 94, 0.45)",
    ];

    const count =
      window.innerWidth < 768 ? Math.floor(PARTICLE_COUNT * 0.5) : PARTICLE_COUNT;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function initParticles() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]!,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_RADIUS) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
            p.vx -= (dx / dist) * force * 0.015;
            p.vy -= (dy / dist) * force * 0.015;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]!;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.14 * (1 - dist / CONNECTION_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY, active: true };
    };

    const onMouseLeave = () => {
      mouse = { x: -1000, y: -1000, active: false };
    };

    const onResize = () => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="particles-canvas"
      aria-hidden="true"
    />
  );
}
