"use client";

import { useEffect, useRef } from "react";

type Petal = { x: number; y: number; s: number; vy: number; sway: number; phase: number; color: string };

const COLORS = ["#F7B2C0", "#F7B2C0", "#F7B2C0", "#E8E8C6", "#A6F04D"];

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let petals: Petal[] = [];

    const make = (randomY: boolean): Petal => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -10,
      s: [4, 6, 8][Math.floor(Math.random() * 3)],
      vy: 0.25 + Math.random() * 0.5,
      sway: 10 + Math.random() * 25,
      phase: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const resize = () => {
      const p = el.parentElement;
      w = p ? p.clientWidth : window.innerWidth;
      h = p ? p.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = w * dpr;
      el.height = h * dpr;
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(14, Math.min(40, Math.round(w / 40)));
      petals = Array.from({ length: count }, () => make(true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.01;
      for (const p of petals) {
        if (!reduce) p.y += p.vy;
        if (p.y > h + 10) Object.assign(p, make(false));
        const x = p.x + Math.sin(t + p.phase) * p.sway;
        ctx.globalAlpha = 0.75;
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(x / 2) * 2, Math.round(p.y / 2) * 2, p.s, p.s);
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
