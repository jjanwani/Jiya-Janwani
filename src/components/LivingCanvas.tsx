import { useEffect, useRef } from 'react';

type Blob = { x: number; y: number; r: number; vx: number; vy: number; hue: number };

const PALETTE = [18, 230, 28, 250]; // peach, deep-blue, peach-deep, blue-violet hue anchors

export default function LivingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hueShift = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const blobs: Blob[] = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: width * (0.22 + Math.random() * 0.18),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: PALETTE[i % PALETTE.length],
    }));

    function onResize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function onScroll() {
      hueShift.current = window.scrollY * 0.05;
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });

    let raf = 0;
    function paint() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const hue = (b.hue + hueShift.current) % 360;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `hsla(${hue}, 85%, 68%, 0.22)`);
        grad.addColorStop(1, 'hsla(0, 0%, 0%, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(paint);
    }
    raf = requestAnimationFrame(paint);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        filter: 'blur(30px) saturate(1.3)',
        pointerEvents: 'none',
      }}
    />
  );
}
