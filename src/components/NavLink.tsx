import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

/**
 * Annotation-style link used in nav and inline.
 * Red underline grows on hover; turns red when active.
 */
export default function NavLink({ children, to, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={`font-mono-label group relative inline-flex items-center transition-colors duration-200 ${className}`}
    >
      <span
        className="relative transition-colors duration-200"
        style={{ color: 'var(--paper)' }}
      >
        {children}
        <span
          className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-out group-hover:w-full"
          style={{ background: 'var(--accent)' }}
        />
      </span>
    </Link>
  );
}
