import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoSrc from '@/assets/LogoNavCropped.png';

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(16, 25, 46, 0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--grid-soft)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center" aria-label="Zurri Labs — Inicio">
          <img
            src={logoSrc}
            alt="Zurri Labs"
            style={{ height: '28px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="font-mono-label group relative"
                style={{ color: active ? 'var(--accent)' : 'var(--paper)' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-px transition-all duration-300"
                  style={{
                    width: active ? '100%' : '0%',
                    background: 'var(--accent)',
                  }}
                />
              </Link>
            );
          })}
          <Link to="/contacto" className="btn-accent">
            Iniciar Proyecto
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: 'var(--paper)' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(16, 25, 46, 0.98)',
            borderBottom: '1px solid var(--grid-soft)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-mono-label py-3"
                  style={{ color: active ? 'var(--accent)' : 'var(--paper)' }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link to="/contacto" className="btn-accent mt-3 self-start">
              Iniciar Proyecto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="20" stroke="var(--brass)" strokeWidth="1" />
      <line x1="1" y1="11" x2="21" y2="11" stroke="var(--grid)" strokeWidth="1" />
      <line x1="11" y1="1" x2="11" y2="21" stroke="var(--grid)" strokeWidth="1" />
      <rect x="8" y="8" width="6" height="6" fill="var(--accent)" />
    </svg>
  );
}
