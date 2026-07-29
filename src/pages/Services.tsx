import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, PenTool, Code, Rocket } from 'lucide-react';
import Reveal from '@/components/Reveal';
import RegistrationMarks from '@/components/RegistrationMarks';
import CursorSpotlight from '@/components/CursorSpotlight';
import Annotation from '@/components/Annotation';

const SERVICES = [
  {
    id: 'S-01',
    title: 'Diseño de Interfaz & UX',
    desc: 'Sistemas de diseño, prototipos navegables y arquitectura de información. Cada pantalla se justifica por una decisión, no por una tendencia.',
    items: ['Sistema de componentes', 'Prototipo navegable', 'Jerarquía y tipografía', 'Accesibilidad (WCAG)'],
  },
  {
    id: 'S-02',
    title: 'Desarrollo Frontend',
    desc: 'Frontends en React y TypeScript con Tailwind. Rápidos, accesibles y mantenibles — construidos para crecer sin reescribirse.',
    items: ['React + TypeScript', 'Tailwind CSS', 'Animación performante', 'SEO técnico'],
  },
  {
    id: 'S-03',
    title: 'Tiendas & E-commerce',
    desc: 'Tiendas online con pasarelas de pago, gestión de catálogo y optimización de conversión. Integraciones con Stripe y pasarelas locales.',
    items: ['Catálogo y checkout', 'Pasarelas de pago', 'Gestión de pedidos', 'Optimización de conversión'],
  },
  {
    id: 'S-04',
    title: 'Landing Pages',
    desc: 'Páginas de aterrizaje para campañas y lanzamientos. Listas para medir, con SEO base y rendimiento optimizado.',
    items: ['Diseño de conversión', 'SEO técnico base', 'Integración de analítica', 'Despliegue rápido'],
  },
  {
    id: 'S-05',
    title: 'Identidad Digital de Marca',
    desc: 'Sistemas visuales para web: color, tipografía, iconografía y voz. Coherencia de marca aplicada a cada superficie digital.',
    items: ['Sistema de color', 'Tipografía y voz', 'Iconografía', 'Guía de aplicación'],
  },
  {
    id: 'S-06',
    title: 'Mantenimiento & Evolución',
    desc: 'Soporte continuo para sitios en producción: actualizaciones, mejoras incrementales y monitoreo. El sitio vive y mejora.',
    items: ['Actualizaciones de contenido', 'Mejoras incrementales', 'Monitoreo de rendimiento', 'Respuesta directa'],
  },
];

const PROCESS = [
  {
    n: '01',
    icon: Search,
    title: 'Descubrimiento',
    desc: 'Entiendo el negocio, los objetivos y el público. Definimos alcance, prioridades y restricciones antes de dibujar una sola línea.',
    deliverables: ['Brief técnico', 'Mapa de sitio', 'Criterios de éxito'],
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Diseño',
    desc: 'Bocetos, wireframes y diseño de interfaz en iteraciones cortas. Prototipo navegable para validar antes de construir.',
    deliverables: ['Wireframe', 'Sistema de UI', 'Prototipo navegable'],
  },
  {
    n: '03',
    icon: Code,
    title: 'Desarrollo',
    desc: 'Construcción en React con componentes reutilizables y código limpio. Revisión continua de accesibilidad y rendimiento.',
    deliverables: ['Frontend funcional', 'Contenido integrado', 'Pruebas de calidad'],
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    desc: 'Despliegue, SEO, analítica y entrega de documentación. El sitio queda operativo y listo para evolucionar.',
    deliverables: ['Despliegue', 'SEO + analítica', 'Documentación'],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <RegistrationMarks />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
          <Reveal>
            <Annotation coord="S-00">Servicios</Annotation>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-[1.05] sm:text-5xl" style={{ color: 'var(--paper)' }}>
              Diseño y desarrollo, ejecutados por la misma mano
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Servicios de diseño de interfaz y desarrollo web. Cada uno se cotiza
              y entrega con alcance claro — sin ambigüedades ni costos ocultos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Annotation coord="S-01">Catálogo</Annotation>
          </Reveal>
          <div className="mt-10 grid gap-px sm:grid-cols-2" style={{ background: 'var(--line-light)' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 80}>
                <article className="h-full p-7" style={{ background: 'var(--paper)' }}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>{s.id}</span>
                    <span className="h-px w-10" style={{ background: 'var(--line-light)' }} />
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl" style={{ color: 'var(--ink)' }}>{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#5a5346' }}>{s.desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="h-1 w-1" style={{ background: 'var(--accent)' }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Annotation coord="S-02">Proceso</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              Cuatro fases, numeradas y medibles
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.65 }}>
              Un proceso lineal con entregables claros al final de cada fase.
              Sabés qué recibís y cuándo, en todo momento.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.n} delay={i * 100}>
                  <div className="relative h-full p-6" style={{ background: 'var(--ink-3)', border: '1px solid var(--grid-soft)' }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono-label" style={{ color: 'var(--brass)' }}>{p.n}</span>
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="mt-5 text-lg" style={{ color: 'var(--paper)' }}>{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.6 }}>{p.desc}</p>
                    <div className="mt-5 space-y-1.5">
                      {p.deliverables.map((d) => (
                        <p key={d} className="font-mono-xs" style={{ color: 'var(--brass)' }}>→ {d}</p>
                      ))}
                    </div>
                    {/* connector arrow on desktop */}
                    {i < PROCESS.length - 1 && (
                      <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden="true">
                        <span style={{ color: 'var(--grid)' }}>→</span>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--ink-2)' }}
      >
        <RegistrationMarks />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="text-balance text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              ¿No estás seguro de cuál necesitás?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Escribime y armamos juntos el alcance ideal para tu proyecto.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/contacto" className="btn-accent mt-8">
              Hablemos <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
