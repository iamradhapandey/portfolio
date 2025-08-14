// src/components/Particles.jsx
import React, { useRef, useEffect, useMemo } from "react";

const Particles = ({ count = 35 }) => {
  const ref = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.0006,
        vy: (Math.random() - 0.5) * 0.0006,
        a: Math.random() * 0.4 + 0.25,
      })),
    [count]
  );

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = "#7dd3fc";
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [particles]);

  return (
    <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />
  );
};

export default Particles;
