import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import HeroBlueprint from '@/components/HeroBlueprint';
import Reveal from '@/components/Reveal';
import RegistrationMarks from '@/components/RegistrationMarks';
import CursorSpotlight from '@/components/CursorSpotlight';
import Annotation from '@/components/Annotation';

const SERVICES = [
  {
    id: '01',
    title: 'Diseño de Interfaz',
    desc: 'Sistemas de UI, prototipos navegables y diseño de marca digital con foco en claridad y jerarquía.',
    tags: ['UI', 'Prototipo', 'Sistema'],
  },
  {
    id: '02',
    title: 'Desarrollo Frontend',
    desc: 'Frontends rápidos y accesibles con React y Tailwind, construidos para escalar sin deudas técnicas.',
    tags: ['React', 'Tailwind', 'A11y'],
  },
  {
    id: '03',
    title: 'Tiendas & E-commerce',
    desc: 'Tiendas online integradas con pasarelas de pago, optimizadas para conversión y mantenimiento simple.',
    tags: ['Shopify', 'Stripe', 'CMS'],
  },
  {
    id: '04',
    title: 'Landing Pages',
    desc: 'Páginas de aterrizaje de alto rendimiento listas para campañas, con métricas y SEO desde el día uno.',
    tags: ['SEO', 'Performance', 'Campaña'],
  },
];

const DESIGN_PROJECTS = [
  {
    id: 'P-01',
    title: 'Boutique de Moda — Concepto UI',
    category: 'E-commerce · Conceptual',
    desc: 'Exploración de interfaz para una boutique de moda: navegación por colección, ficha de producto y carrito lateral.',
    accent: 'Catálogo · Ficha · Checkout',
  },
  {
    id: 'P-02',
    title: 'Dashboard Empresarial — Concepto UI',
    category: 'Producto · Conceptual',
    desc: 'Sistema de paneles para una plataforma SaaS: KPIs, tablas de datos densas y flujos de configuración.',
    accent: 'KPIs · Tablas · Settings',
  },
];

const PRODUCTS = [
  {
    id: 'T-01',
    name: 'Plantilla Negocio de Servicios',
    desc: 'Landing page completa para negocios de servicios: hero, servicios, testimonios, formulario y SEO base.',
    price: '$180.000 ARS',
    turnaround: '7 días hábiles',
    features: ['1 página, 6 secciones', 'Formulario de contacto', 'SEO técnico base', 'Diseño responsivo'],
  },
  {
    id: 'T-02',
    name: 'Plantilla Catálogo de Productos',
    desc: 'Catálogo navegable con fichas de producto, filtros y CTA de consulta — ideal para comercios sin carrito.',
    price: '$260.000 ARS',
    turnaround: '10 días hábiles',
    features: ['Catálogo + fichas', 'Filtros por categoría', 'CTA de consulta', 'Panel de edición simple'],
  },
];

const PRINCIPLES = [
  {
    n: '01',
    title: 'Precisión antes que volumen',
    desc: 'Cada línea de layout y cada token de diseño se decide a propósito. No hay elementos de relleno.',
  },
  {
    n: '02',
    title: 'Diseño y desarrollo, misma mano',
    desc: 'Quien diseña es quien construye. Las decisiones de interfaz se traducen sin pérdida al código.',
  },
  {
    n: '03',
    title: 'Mantenible por defecto',
    desc: 'Código y estructura pensados para que el sitio evolucione sin rehacerse desde cero.',
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <RegistrationMarks />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left: copy */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="anim-pulse-dot inline-block h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  <Annotation coord="A-01">Estudio activo · Buenos Aires</Annotation>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1
                  className="mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
                  style={{ color: 'var(--paper)' }}
                >
                  Diseño y desarrollo web con{' '}
                  <span style={{ color: 'var(--accent)' }}>precisión de taller</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p
                  className="mt-6 max-w-md text-pretty text-base leading-relaxed sm:text-lg"
                  style={{ color: 'var(--grid)' }}
                >
                  Zurri Labs es un estudio de una sola persona que diseña y construye
                  sitios y tiendas online. Cada proyecto se trata como un plano:
                  medido, revisado y ejecutado con oficio.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link to="/contacto" className="btn-accent">
                    Iniciar Proyecto
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link to="/servicios" className="btn-ghost">
                    Ver Servicios
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-12 flex items-center gap-6">
                  <Annotation coord="REV. 01">ESCALA 1:1</Annotation>
                  <span className="h-px w-12" style={{ background: 'var(--grid)' }} />
                  <Annotation>Un integrante · Estándar de estudio</Annotation>
                </div>
              </Reveal>
            </div>

            {/* Right: blueprint SVG */}
            <div className="lg:col-span-6">
              <Reveal delay={200}>
                <div className="relative">
                  <div
                    className="absolute -inset-3"
                    style={{ border: '1px solid var(--grid-soft)' }}
                    aria-hidden="true"
                  />
                  <div className="relative p-4 sm:p-6">
                    <HeroBlueprint />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SUMMARY ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <div>
                <Annotation coord="B-01" >Servicios</Annotation>
                <h2 className="mt-3 text-3xl sm:text-4xl" style={{ color: 'var(--ink)' }}>
                  Qué construyo
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <Link
                to="/servicios"
                className="font-mono-label inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent)]"
                style={{ color: 'var(--ink)' }}
              >
                Ver detalle completo <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line-light)' }}>
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <article
                  className="group flex h-full flex-col p-6 transition-colors duration-300"
                  style={{ background: 'var(--paper)' }}
                >
                  <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>{s.id}</span>
                  <h3 className="mt-4 text-xl" style={{ color: 'var(--ink)' }}>{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#5a5346' }}>{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-xs"
                        style={{ color: 'var(--brass-2)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRABAJO DE DISEÑO ===== */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Annotation coord="C-01">Trabajo de Diseño</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              Proyectos conceptuales de interfaz
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Piezas de exploración de diseño. Son trabajos conceptuales de
              portafolio — no son clientes reales y no incluyen métricas inventadas.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {DESIGN_PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article
                  className="group relative h-full overflow-hidden p-6 transition-colors duration-300"
                  style={{ background: 'var(--ink-3)', border: '1px solid var(--grid-soft)' }}
                >
                  {/* Conceptual frame mockup */}
                  <div
                    className="relative mb-6 aspect-[16/10] overflow-hidden bg-grid-fine"
                    style={{ background: 'var(--ink-2)', border: '1px solid var(--grid-soft)' }}
                  >
                    <ProjectMockup id={p.id} />
                    <span
                      className="absolute left-3 top-3 font-mono-xs"
                      style={{ color: 'var(--brass)' }}
                    >
                      {p.id} · CONCEPTO
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>{p.category}</span>
                  </div>
                  <h3 className="mt-3 text-xl" style={{ color: 'var(--paper)' }}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--grid)' }}>{p.desc}</p>
                  <p className="mt-4 font-mono-xs" style={{ color: 'var(--brass)' }}>{p.accent}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUCIONES PARA TU NEGOCIO ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Annotation coord="D-01">Soluciones para tu Negocio</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--ink)' }}>
              Plantillas productizadas, listas para lanzar
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: '#5a5346' }}>
              Ofertas cerradas con precio y plazo definidos. Pensadas para
              negocios que necesitan un sitio profesional sin un proceso a medida.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <article
                  className="group flex h-full flex-col p-7 transition-colors duration-300"
                  style={{ background: 'var(--paper)', border: '1px solid var(--line-light)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>{p.id}</span>
                    <span className="font-mono-xs" style={{ color: 'var(--brass-2)' }}>{p.turnaround}</span>
                  </div>
                  <h3 className="mt-4 text-2xl" style={{ color: 'var(--ink)' }}>{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#5a5346' }}>{p.desc}</p>

                  <ul className="mt-6 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--ink)' }}>
                        <span className="h-1.5 w-1.5" style={{ background: 'var(--accent)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-xs" style={{ color: 'var(--brass-2)' }}>DESDE</span>
                      <span className="font-head text-2xl font-semibold" style={{ color: 'var(--ink)' }}>{p.price}</span>
                    </div>
                    <Link to="/contacto" className="btn-ghost-paper mt-5">
                      Consultar esta plantilla
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STUDIO METHOD ===== */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Annotation coord="E-01">Método</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              Tres principios de taller
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px sm:grid-cols-3" style={{ background: 'var(--grid-soft)' }}>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="h-full p-7" style={{ background: 'var(--ink)' }}>
                  <span className="font-mono-label" style={{ color: 'var(--brass)' }}>{p.n}</span>
                  <h3 className="mt-4 text-lg" style={{ color: 'var(--paper)' }}>{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--grid)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--ink-2)' }}
      >
        <CursorSpotlight />
        <RegistrationMarks />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Annotation coord="F-01">Próximo proyecto</Annotation>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl sm:text-5xl" style={{ color: 'var(--paper)' }}>
                ¿Construimos tu sitio como un plano?
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed" style={{ color: 'var(--grid)' }}>
                  Cuéntame qué necesitas y te respondo con un alcance claro, un
                plazo y un precio en pesos. Sin plantillas genéricas ni sorpresas.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contacto" className="btn-accent">
                  Empezar conversación
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/sobre-nosotros" className="btn-ghost">
                  Conocer el estudio
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/** Small decorative wireframe mockups for the conceptual projects. */
function ProjectMockup({ id }: { id: string }) {
  if (id === 'P-01') {
    // Fashion e-commerce concept
    return (
      <svg viewBox="0 0 320 200" className="h-full w-full" fill="none" aria-hidden="true">
        <rect x="12" y="12" width="296" height="176" stroke="var(--grid)" strokeWidth="1" />
        <line x1="12" y1="34" x2="308" y2="34" stroke="var(--grid)" strokeWidth="1" />
        <line x1="120" y1="34" x2="120" y2="188" stroke="var(--grid)" strokeWidth="1" />
        {/* product grid */}
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <g key={`${r}-${c}`}>
              <rect
                x={134 + c * 56}
                y={48 + r * 44}
                width="44"
                height="36"
                stroke="var(--grid-soft)"
                strokeWidth="1"
                fill="none"
              />
              <line
                x1={134 + c * 56}
                y1={88 + r * 44}
                x2={134 + c * 56 + 30}
                y2={88 + r * 44}
                stroke="var(--grid-soft)"
                strokeWidth="1"
              />
            </g>
          ))
        )}
        {/* sidebar items */}
        <line x1="24" y1="50" x2="108" y2="50" stroke="var(--brass)" strokeWidth="1" />
        <line x1="24" y1="64" x2="108" y2="64" stroke="var(--grid-soft)" strokeWidth="1" />
        <line x1="24" y1="78" x2="108" y2="78" stroke="var(--grid-soft)" strokeWidth="1" />
        <line x1="24" y1="92" x2="108" y2="92" stroke="var(--grid-soft)" strokeWidth="1" />
        <rect x="24" y="150" width="80" height="22" stroke="var(--accent)" strokeWidth="1" fill="none" />
      </svg>
    );
  }
  // Dashboard concept
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" fill="none" aria-hidden="true">
      <rect x="12" y="12" width="296" height="176" stroke="var(--grid)" strokeWidth="1" />
      <line x1="12" y1="34" x2="308" y2="34" stroke="var(--grid)" strokeWidth="1" />
      <line x1="80" y1="34" x2="80" y2="188" stroke="var(--grid)" strokeWidth="1" />
      {/* KPI cards */}
      <rect x="92" y="44" width="64" height="34" stroke="var(--grid-soft)" strokeWidth="1" fill="none" />
      <rect x="164" y="44" width="64" height="34" stroke="var(--grid-soft)" strokeWidth="1" fill="none" />
      <rect x="236" y="44" width="60" height="34" stroke="var(--grid-soft)" strokeWidth="1" fill="none" />
      {/* chart */}
      <polyline
        points="92,120 120,108 148,128 176,96 204,112 232,88 260,104 296,92"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="92" y1="150" x2="296" y2="150" stroke="var(--grid-soft)" strokeWidth="1" />
      {/* table rows */}
      {[0, 1, 2].map((r) => (
        <line key={r} x1="92" y1={162 + r * 8} x2="296" y2={162 + r * 8} stroke="var(--grid-soft)" strokeWidth="1" />
      ))}
      {/* sidebar */}
      <line x1="24" y1="48" x2="68" y2="48" stroke="var(--brass)" strokeWidth="1" />
      <line x1="24" y1="62" x2="68" y2="62" stroke="var(--grid-soft)" strokeWidth="1" />
      <line x1="24" y1="76" x2="68" y2="76" stroke="var(--grid-soft)" strokeWidth="1" />
      <line x1="24" y1="90" x2="68" y2="90" stroke="var(--grid-soft)" strokeWidth="1" />
      <rect x="24" y="104" width="44" height="14" stroke="var(--accent)" strokeWidth="1" fill="none" />
    </svg>
  );
}
