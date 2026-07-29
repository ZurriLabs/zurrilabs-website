type Props = {
  children: React.ReactNode;
  className?: string;
  /** x coordinate label, e.g. "A-01" */
  coord?: string;
};

/**
 * Small technical annotation label: monospace, uppercase, wide tracking.
 * Used with restraint for coordinates, revisions, scale notes.
 */
export default function Annotation({ children, className = '', coord }: Props) {
  return (
    <span className={`font-mono-label ${className}`} style={{ color: 'var(--brass)' }}>
      {coord ? <span style={{ color: 'var(--accent)' }}>{coord}</span> : null}
      {coord ? <span className="mx-1.5" style={{ color: 'var(--grid)' }}>·</span> : null}
      <span style={{ color: 'var(--brass)' }}>{children}</span>
    </span>
  );
}
