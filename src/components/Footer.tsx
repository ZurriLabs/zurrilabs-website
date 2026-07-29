import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-grid-dark"
      style={{ background: 'var(--ink)', borderTop: '1px solid var(--grid-soft)' }}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        {/* Top: brand + nav */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-mono-label" style={{ color: 'var(--paper)', letterSpacing: '0.16em' }}>
              Zurri<span style={{ color: 'var(--accent)' }}>.</span>Labs
            </span>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: 'var(--grid)' }}
            >
              Estudio de diseño y desarrollo web de un solo integrante.
              Buenos Aires, Argentina. Sitios y tiendas hechos con precisión de taller.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-xs" style={{ color: 'var(--brass)' }}>Navegación</p>
            <ul className="mt-4 space-y-2.5">
              {[
                ['/', 'Inicio'],
                ['/servicios', 'Servicios'],
                ['/sobre-nosotros', 'Sobre Nosotros'],
                ['/contacto', 'Contacto'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-mono-label transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: 'var(--paper)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono-xs" style={{ color: 'var(--brass)' }}>Contacto Directo</p>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: 'var(--paper)' }}>
              <li className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: 'var(--brass)' }} />
                <a href="tel:+541112345678" className="hover:text-[var(--accent)] transition-colors">
                  +54 11 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={15} style={{ color: 'var(--brass)' }} />
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} style={{ color: 'var(--brass)' }} />
                <a
                  href="mailto:hola@zurrilabs.com"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  hola@zurrilabs.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} style={{ color: 'var(--brass)' }} />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-12" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono-xs" style={{ color: 'var(--grid)' }}>
            © {new Date().getFullYear()} Zurri Labs · Hecho a mano en Buenos Aires
          </p>
          <p className="font-mono-xs" style={{ color: 'var(--grid)' }}>
            REV. 01 · ESCALA 1:1 · CONFIDENCIAL
          </p>
        </div>
      </div>
    </footer>
  );
}
