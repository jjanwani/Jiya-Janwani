import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  hue: number;
}

export default function SpaceTunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lastScroll = useRef(0);
  const boost = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    const COUNT = 420;

    function resetStar(s: Star) {
      s.x = (Math.random() - 0.5) * 2;
      s.y = (Math.random() - 0.5) * 2;
      s.z = 1;
      s.hue = Math.random();
    }

    function buildStars() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars = [];
      for (let i = 0; i < COUNT; i++) {
        const s: Star = { x: 0, y: 0, z: Math.random(), hue: Math.random() };
        s.x = (Math.random() - 0.5) * 2;
        s.y = (Math.random() - 0.5) * 2;
        stars.push(s);
      }
    }
    buildStars();

    function onMove(e: MouseEvent) {
      mouse.current.x = (e.clientX / width - 0.5) * 2;
      mouse.current.y = (e.clientY / height - 0.5) * 2;
    }
    function onScroll() {
      const cur = window.scrollY;
      const delta = cur - lastScroll.current;
      lastScroll.current = cur;
      boost.current = Math.min(boost.current + Math.abs(delta) * 0.003, 4);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', buildStars);
    window.addEventListener('scroll', onScroll, { passive: true });

    let raf: number;
    const cx = () => width / 2;
    const cy = () => height / 2;

    function tick() {
      ctx.clearRect(0, 0, width, height);

      const speed = 0.0026 + boost.current * 0.01;
      boost.current *= 0.92;

      const parallaxX = mouse.current.x * 18;
      const parallaxY = mouse.current.y * 18;

      for (const s of stars) {
        s.z -= speed;
        if (s.z <= 0.02) resetStar(s);

        const scale = 0.5 / s.z;
        const sx = cx() + s.x * scale * width * 0.5 + parallaxX;
        const sy = cy() + s.y * scale * height * 0.5 + parallaxY;

        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

        const r = Math.max(0.4, (1 - s.z) * 2.6);
        const alpha = Math.min(1, (1 - s.z) * 1.3);

        const color =
          s.hue < 0.33 ? '255,185,143' : s.hue < 0.66 ? '120,150,255' : '255,243,232';

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha * 0.85})`;
        ctx.fill();

        if (boost.current > 0.3) {
          const px = cx() + s.x * (scale * 0.85) * width * 0.5 + parallaxX;
          const py = cy() + s.y * (scale * 0.85) * height * 0.5 + parallaxY;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = `rgba(${color}, ${alpha * 0.35})`;
          ctx.lineWidth = r * 0.6;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', buildStars);
      window.removeEventListener('scroll', onScroll);
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
