import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import HeroBlueprint from '@/components/HeroBlueprint';
import Reveal from '@/components/Reveal';
import RegistrationMarks from '@/components/RegistrationMarks';
import CursorSpotlight from '@/components/CursorSpotlight';
import Annotation from '@/components/Annotation';
import BrowserMockup from '@/components/BrowserMockup';
import { projects } from '@/data/projects';

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
            <Annotation coord="C-01">Trabajo de Selección</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              Proyectos Destacados
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Selección de plataformas y sitios web desarrollados. Cada proyecto está presentado dentro de una simulación de navegador con enlace directo a su versión en vivo.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article
                  className="group flex h-full flex-col justify-between overflow-hidden p-5 transition-colors duration-300 sm:p-6"
                  style={{ background: 'var(--ink-3)', border: '1px solid var(--grid-soft)' }}
                >
                  <div>
                    <BrowserMockup project={p} />
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold" style={{ color: 'var(--paper)' }}>
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--grid)' }}>
                      {p.description}
                    </p>
                  </div>

                  {p.liveUrl ? (
                    <div className="mt-6 border-t border-[var(--grid-soft)] pt-4">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[var(--paper)] uppercase transition-colors hover:text-[var(--accent)]"
                      >
                        VER SITIO EN VIVO
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-6 border-t border-[var(--grid-soft)] pt-4">
                      <span
                        title="Próximamente"
                        className="font-mono text-xs text-[var(--grid)] uppercase"
                      >
                        PRÓXIMAMENTE
                      </span>
                    </div>
                  )}
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
