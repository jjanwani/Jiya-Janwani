const palette: Record<string, string> = {
  SkySpecs: '#ffffff',
  'Carbon Fiber Span': '#7ec242',
  'Ross Tech Plus Consulting': '#d4a93a',
  'Hemlock Semiconductor': '#3a6fd4',
};

export default function LogoBadge({ name }: { name: string }) {
  const color = palette[name] ?? 'var(--peach)';
  return (
    <span className="logo-badge">
      <span className="logo-dot" style={{ background: color }} />
      {name}
    </span>
  );
}
