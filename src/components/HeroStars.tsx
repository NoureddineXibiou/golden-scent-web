import React, { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  twinklePhase: number;
};

const STAR_COLOR = "rgba(255,255,255,0.8)";
const STAR_MIN_RADIUS = 0.6;
const STAR_MAX_RADIUS = 1.8;
const STAR_AMOUNT = 54;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

function createStar(width: number, height: number): Star {
  return {
    x: getRandom(0, width),
    y: getRandom(0, height),
    radius: getRandom(STAR_MIN_RADIUS, STAR_MAX_RADIUS),
    alpha: getRandom(0.4, 1),
    alphaSpeed: getRandom(0.003, 0.008) * (Math.random() > 0.5 ? 1 : -1),
    twinklePhase: getRandom(0, Math.PI * 2),
  };
}

const HeroStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);

  // Resize canvas on mount and window resize
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      // Re-create stars for the new dimensions
      starsRef.current = new Array(STAR_AMOUNT)
        .fill(null)
        .map(() => createStar(canvas.width, canvas.height));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animate and draw stars
      for (let star of starsRef.current) {
        // Twinkle: change alpha smoothly
        star.twinklePhase += star.alphaSpeed;
        star.alpha = 0.6 + 0.4 * Math.sin(star.twinklePhase);
        // Slight "wandering/shimmer": change position a bit
        const jitterRange = 0.03 * canvas.width;
        const dx = Math.sin(star.twinklePhase * 0.8) * jitterRange * 0.0004;
        const dy = Math.cos(star.twinklePhase * 1.2) * jitterRange * 0.0005;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(star.alpha, 1));
        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8 * star.radius;
        ctx.fill();
        ctx.restore();

        // Respawn star randomly to keep sparkle effect
        if (
          Math.random() < 0.002 ||
          star.alpha < 0.05 ||
          star.alpha > 1.1 // unlikely, but in case
        ) {
          // Get canvas size
          const w = canvas.width, h = canvas.height;
          Object.assign(star, createStar(w, h));
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 animate-fade-in"
      style={{ position: "absolute", inset: 0, width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
};

export default HeroStars;
