import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.2rem 5vw',
        backdropFilter: 'blur(10px)',
        background: 'rgba(10,10,13,0.6)',
        borderBottom: '1px solid rgba(255,185,143,0.12)',
      }}
    >
      <Link
        to="/"
        onClick={() => setOpen(false)}
        style={{
          textDecoration: 'none',
          color: 'var(--peach-light)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.15rem',
          letterSpacing: '0.02em',
        }}
      >
        JJ
      </Link>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: '1px solid rgba(255,185,143,0.3)',
          borderRadius: 8,
          color: 'var(--cream)',
          padding: '0.4rem 0.7rem',
        }}
        className="nav-toggle"
      >
        ☰
      </button>

      <div className="nav-links" style={{ display: 'flex', gap: '0.4rem' }}>
        {links.map((l) => {
          const active = l.to === pathname;
          return (
            <Link
              key={l.to}
              to={l.to}
              style={{
                textDecoration: 'none',
                color: active ? 'var(--peach-light)' : 'rgba(255,243,232,0.85)',
                fontSize: '0.85rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                border: `1px solid ${active ? 'rgba(255,185,143,0.4)' : 'transparent'}`,
                background: active ? 'rgba(255,185,143,0.1)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {l.label}
            </Link>
          );
        })}
      </div>

      {open && (
        <div
          className="nav-mobile"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10,10,13,0.95)',
            borderBottom: '1px solid rgba(255,185,143,0.18)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem 0',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none',
                color: l.to === pathname ? 'var(--peach-light)' : 'rgba(255,243,232,0.85)',
                padding: '0.9rem 6vw',
                fontSize: '0.95rem',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-toggle { display: inline-flex !important; }
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
