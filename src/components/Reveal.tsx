import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** delay in ms before revealing */
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Reveal-on-scroll using IntersectionObserver.
 * Triggers once, then unobserves. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.classList.add('is-visible');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) {
              window.setTimeout(() => el.classList.add('is-visible'), delay);
            } else {
              el.classList.add('is-visible');
            }
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
