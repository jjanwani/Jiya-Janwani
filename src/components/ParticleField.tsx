import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  ox: number;
  oy: number;
  r: number;
  hue: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let dots: Dot[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    function buildDots() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const gap = 46;
      dots = [];
      for (let x = gap / 2; x < width; x += gap) {
        for (let y = gap / 2; y < height; y += gap) {
          dots.push({
            x,
            y,
            ox: x,
            oy: y,
            r: 1.4,
            hue: Math.random(),
          });
        }
      }
    }

    buildDots();

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }
    function onLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', buildDots);

    let raf: number;
    function tick() {
      ctx.clearRect(0, 0, width, height);
      const mx = mouse.current.x;
      const my = mouse.current.y;
      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = 130;
        if (dist < radius) {
          const force = (radius - dist) / radius;
          const angle = Math.atan2(dy, dx);
          d.x += Math.cos(angle) * force * 6;
          d.y += Math.sin(angle) * force * 6;
        }
        d.x += (d.ox - d.x) * 0.06;
        d.y += (d.oy - d.y) * 0.06;

        const colorMix = d.hue;
        const color =
          colorMix < 0.33
            ? '255,185,143'
            : colorMix < 0.66
            ? '58,79,158'
            : '255,243,232';

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.5)`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', buildDots);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
