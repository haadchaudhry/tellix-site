"use client";

import React, { useEffect, useRef } from "react";

type FiberStar = {
  x: number;
  y: number;
  r: number;         // tiny radius
  baseA: number;     // base brightness
  twAmp: number;     // twinkle amplitude
  twSpeed: number;   // twinkle speed
  twPhase: number;   // offset
  warm: number;      // 0..1 (cool -> warm)
  sparkle: number;   // rare micro-sparkle chance weight
};

type MicroStreak = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;  // 0..1
  decay: number;
  len: number;
  w: number;
};

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));
const rand = (a = 1, b?: number) => (b === undefined ? Math.random() * a : a + Math.random() * (b - a));

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function rgba(r: number, g: number, b: number, a: number) {
  return `rgba(${r|0},${g|0},${b|0},${a})`;
}

export default function StarlightHeadliner({
  className = "",
  density = 0.0025,          // increase for more fibers
  featureStarRate = 0.018,   // fraction of slightly bigger/brighter stars
  enableMicroStreaks = true, // keep subtle, RR-like
}: {
  className?: string;
  density?: number;
  featureStarRate?: number;
  enableMicroStreaks?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0, h = 0, dpr = 1;
    let stars: FiberStar[] = [];
    let streaks: MicroStreak[] = [];

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // First shooting star appears immediately, then every 3-5 seconds
    let nextStreakAt = performance.now() + rand(100, 300); // immediate on load

    const resize = () => {
      const parent = canvas.parentElement;
      const rect = (parent ?? canvas).getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      dpr = clamp(window.devicePixelRatio || 1, 1, 2.5);

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // seed "fiber optic" stars
      const count = Math.floor(w * h * density);
      stars = new Array(count).fill(0).map(() => {
        const warm = Math.pow(Math.random(), 2.2); // mostly cool/white, few warm
        return {
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.35, 0.95),
          baseA: rand(0.12, 0.55),
          twAmp: rand(0.15, 0.35),  // more visible twinkle
          twSpeed: rand(0.12, 0.4),  // slower, more relaxed twinkle
          twPhase: rand(0, Math.PI * 2),
          warm,
          sparkle: rand(0.2, 1.0),
        };
      });

      // sprinkle feature stars (slightly bigger/brighter)
      const featureCount = Math.floor(count * featureStarRate);
      for (let i = 0; i < featureCount; i++) {
        const warm = rand(0, 1);
        stars.push({
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.9, 1.6),
          baseA: rand(0.35, 0.9),
          twAmp: rand(0.12, 0.25),  // more visible twinkle
          twSpeed: rand(0.08, 0.25),  // slower, more relaxed twinkle
          twPhase: rand(0, Math.PI * 2),
          warm,
          sparkle: rand(0.4, 1.2),
        });
      }
    };

    const drawVelvetBase = () => {
      // deep black with soft vignette, like a headliner fabric
      ctx.fillStyle = "rgba(0,0,0,0.92)";
      ctx.fillRect(0, 0, w, h);

      const vignette = ctx.createRadialGradient(
        w * 0.55, h * 0.45, Math.min(w, h) * 0.1,
        w * 0.55, h * 0.45, Math.max(w, h) * 0.85
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
    };

    const spawnMicroStreak = () => {
      // very subtle, short, rare — just a hint of motion
      const x = rand(-w * 0.05, w * 1.05);
      const y = rand(-h * 0.05, h * 0.35);
      const speed = rand(420, 820);
      const angle = rand(Math.PI * 0.20, Math.PI * 0.32); // down-right
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      streaks.push({
        x, y, vx, vy,
        life: 1,
        decay: rand(1.4, 2.0),  // quick
        len: rand(80, 160),
        w: rand(0.8, 1.6),
      });
    };

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      drawVelvetBase();

      const t = now / 1000;

      // stars (fiber optics) - with twinkle
      for (const s of stars) {
        const tw = Math.sin(t * s.twSpeed + s.twPhase) * s.twAmp;
        let a = clamp(s.baseA + tw, 0.05, 1);

        // occasional micro sparkle (random, non-rhythmic)
        const sparkleChance = 0.0022 * s.sparkle;
        if (!prefersReducedMotion && Math.random() < sparkleChance) {
          a = clamp(a + rand(0.15, 0.4), 0, 1);
        }

        // color: mostly cool white, some warm white (RR-esque)
        const r = mix(230, 255, s.warm);
        const g = mix(235, 252, s.warm);
        const b = mix(255, 235, s.warm);

        // crisp star core with visible twinkle (no glow/aura)
        ctx.fillStyle = rgba(r, g, b, a);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // micro streaks (optional) - first one immediately, then every 3-5 seconds
      if (enableMicroStreaks && !prefersReducedMotion && now >= nextStreakAt) {
        spawnMicroStreak();
        nextStreakAt = now + rand(3000, 5000); // 3-5 seconds
      }

      streaks = streaks.filter((s) => s.life > 0);

      for (const st of streaks) {
        st.x += st.vx * dt;
        st.y += st.vy * dt;
        st.life -= st.decay * dt;

        const life = clamp(st.life, 0, 1);
        const mag = Math.hypot(st.vx, st.vy) || 1;
        const nx = st.vx / mag, ny = st.vy / mag;

        const tailX = st.x - nx * st.len;
        const tailY = st.y - ny * st.len;

        const grad = ctx.createLinearGradient(st.x, st.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${0.55 * life})`);
        grad.addColorStop(0.3, `rgba(230,240,255,${0.22 * life})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = st.w;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(st.x, st.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, featureStarRate, enableMicroStreaks]);

  return (
    <canvas
      ref={ref}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}

