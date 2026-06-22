const links = [
  { id: 'hero', label: 'Home' },
  { id: 'brand', label: 'Brand' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'framework', label: 'Framework' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  function go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

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
        padding: '1.1rem 5vw',
        backdropFilter: 'blur(10px)',
        background: 'rgba(10,10,13,0.55)',
        borderBottom: '1px solid rgba(255,185,143,0.12)',
      }}
    >
      <button
        onClick={() => go('hero')}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--peach-light)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.02em',
        }}
      >
        JJ
      </button>
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            style={{
              background: 'transparent',
              border: '1px solid transparent',
              color: 'rgba(255,243,232,0.85)',
              fontSize: '0.82rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '999px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,185,143,0.12)';
              e.currentTarget.style.borderColor = 'rgba(255,185,143,0.4)';
              e.currentTarget.style.color = '#ffd9b8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.color = 'rgba(255,243,232,0.85)';
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
