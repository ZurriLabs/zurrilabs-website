import { useEffect, useRef } from 'react';

type Props = {
  className?: string;
  /** grid variant to match the section background */
  variant?: 'dark' | 'paper';
};

/**
 * Cursor spotlight overlay for the blueprint grid.
 * Writes directly to the DOM via refs (not React state) and is throttled
 * with requestAnimationFrame. Disabled under prefers-reduced-motion.
 */
export default function CursorSpotlight({ className = '', variant = 'dark' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    // Only enable on devices with a fine pointer (desktop)
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
      });
    };

    const parent = el.parentElement;
    if (!parent) return;
    parent.addEventListener('mousemove', onMove);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`cursor-spotlight absolute inset-0 ${className}`}
      style={variant === 'paper' ? { opacity: 0.6 } : undefined}
    />
  );
}
