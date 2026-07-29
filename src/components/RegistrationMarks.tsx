type Props = {
  className?: string;
  variant?: 'dark' | 'paper';
};

/**
 * Corner registration / crop marks. Purely decorative.
 */
export default function RegistrationMarks({ className = '', variant = 'dark' }: Props) {
  const color = variant === 'dark' ? 'var(--brass)' : 'var(--grid)';
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {([
        ['tl', 'top-3 left-3'],
        ['tr', 'top-3 right-3'],
        ['bl', 'bottom-3 left-3'],
        ['br', 'bottom-3 right-3'],
      ] as const).map(([k, pos]) => (
        <svg
          key={k}
          className={`absolute ${pos}`}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ color }}
        >
          <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1" />
          <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      ))}
    </div>
  );
}
