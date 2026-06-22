import { useRef, useState } from 'react';

export default function Globe() {
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(-10);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  function onDown(e: React.PointerEvent) {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  }
  function onUp() {
    dragging.current = false;
  }
  function onMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    setRotY((r) => r + dx * 0.5);
    setRotX((r) => Math.max(-60, Math.min(60, r - dy * 0.5)));
  }

  const rings = Array.from({ length: 10 });

  return (
    <div
      onPointerDown={onDown}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      onPointerMove={onMove}
      style={{
        width: 280,
        height: 280,
        perspective: 900,
        cursor: dragging.current ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: dragging.current ? 'none' : 'transform 0.4s ease-out',
          animation: dragging.current ? 'none' : 'globeSpin 18s linear infinite',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 35% 30%, #ffd9b8 0%, #ffb98f 28%, #3a4f9e 65%, #131b3d 100%)',
            boxShadow: '0 0 60px rgba(255,140,90,0.35), inset -20px -20px 50px rgba(0,0,0,0.5)',
          }}
        />
        {rings.map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255,217,184,0.35)',
              transform: `rotateY(${(i * 180) / rings.length}deg)`,
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1px solid rgba(255,217,184,0.5)',
            transform: 'rotateX(90deg)',
          }}
        />
      </div>
      <style>{`
        @keyframes globeSpin {
          from { transform: rotateX(${rotX}deg) rotateY(0deg); }
          to { transform: rotateX(${rotX}deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
