import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import RegistrationMarks from '@/components/RegistrationMarks';
import CursorSpotlight from '@/components/CursorSpotlight';
import Annotation from '@/components/Annotation';

const VALUES = [
  {
    n: '01',
    title: 'Una sola persona, estándar de estudio',
    desc: 'Soy un solo integrante, pero cada proyecto se trabaja con el rigor de un estudio: proceso, entregables y revisión. Lo que cambia es la agilidad — una sola persona decide y ejecuta.',
  },
  {
    n: '02',
    title: 'Calidad de ejecución, no cantidad de años',
    desc: 'No vendo antigüedad. Lo que importa es el criterio con el que se toman decisiones de diseño y código: cada elección se justifica y se documenta.',
  },
  {
    n: '03',
    title: 'Diseño y código, sin intermediarios',
    desc: 'Quien diseña tu interfaz es quien la construye. No hay traducción perdida entre el Figma y el repositorio — la intención se preserva hasta el último píxel.',
  },
];

const STACK = [
  { label: 'Diseño', tools: ['Figma', 'Sistemas de UI', 'Prototipos'] },
  { label: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', tools: ['Supabase', 'PostgreSQL', 'Edge Functions'] },
  { label: 'E-commerce', tools: ['Stripe', 'Pasarelas AR', 'CMS headless'] },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <RegistrationMarks />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <Annotation coord="N-01">Sobre Nosotros</Annotation>
                <h1 className="mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl" style={{ color: 'var(--paper)' }}>
                  Un estudio de una persona, con oficio de taller
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
                  Zurri Labs es un estudio de diseño y desarrollo web de un solo
                  integrante, basado en Buenos Aires. No es un equipo grande
                  disfrazado de pequeño — es una persona que decide, diseña y
                  construye cada proyecto de principio a fin.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={160}>
                <div
                  className="relative h-full min-h-[200px] overflow-hidden bg-grid-fine p-6"
                  style={{ background: 'var(--ink-3)', border: '1px solid var(--grid-soft)' }}
                >
                  <span className="font-mono-xs" style={{ color: 'var(--brass)' }}>FICHA TÉCNICA</span>
                  <dl className="mt-5 space-y-3 text-sm">
                    {[
                      ['Sede', 'Buenos Aires, Argentina'],
                      ['Integrantes', '1 (freelancer)'],
                      ['Enfoque', 'Diseño + Desarrollo'],
                      ['Modalidad', 'Remoto · Híbrido CABA'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4">
                        <dt className="font-mono-xs" style={{ color: 'var(--grid)' }}>{k}</dt>
                        <dd style={{ color: 'var(--paper)' }}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Annotation coord="N-02">Historia</Annotation>
                <h2 className="mt-3 text-2xl sm:text-3xl" style={{ color: 'var(--ink)' }}>
                  Por qué un solo integrante
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={80}>
                <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3a3528' }}>
                  <p>
                    Empecé Zurri Labs con una idea simple: el diseño y el
                    desarrollo deberían ser la misma mano. Cuando quien diseña
                    es quien escribe el código, las decisiones se toman con
                    conocimiento real de lo que cuesta construirlas — y lo que
                    cuesta mantenerlas.
                  </p>
                  <p>
                    No prometo un equipo grande ni años de antigüedad. Lo que
                    ofrezco es criterio: cada proyecto se trata como un plano
                    técnico, con decisiones documentadas, entregables claros y
                    revisión en cada fase. El estándar es el de un estudio; la
                    ejecución, la de una persona que responde directamente.
                  </p>
                  <p>
                    Trabajo con negocios y emprendedores que valoran la precisión
                    sobre el volumen. Si buscás un sitio hecho rápido y sin
                    criterio, hay otras opciones. Si buscás un sitio que se
                    sostenga y evolucione, hablemos.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="relative overflow-hidden bg-grid-dark"
        style={{ background: 'var(--ink)' }}
      >
        <CursorSpotlight />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Annotation coord="N-03">Principios</Annotation>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl" style={{ color: 'var(--paper)' }}>
              Cómo trabajo
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px sm:grid-cols-3" style={{ background: 'var(--grid-soft)' }}>
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 90}>
                <div className="h-full p-7" style={{ background: 'var(--ink)' }}>
                  <span className="font-mono-label" style={{ color: 'var(--brass)' }}>{v.n}</span>
                  <h3 className="mt-4 text-lg" style={{ color: 'var(--paper)' }}>{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.6 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <Annotation coord="N-04">Herramientas</Annotation>
            <h2 className="mt-3 text-2xl sm:text-3xl" style={{ color: 'var(--ink)' }}>
              Lo que uso
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line-light)' }}>
            {STACK.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="h-full p-6" style={{ background: 'var(--paper)' }}>
                  <span className="font-mono-xs" style={{ color: 'var(--accent)' }}>{s.label}</span>
                  <ul className="mt-4 space-y-2">
                    {s.tools.map((t) => (
                      <li key={t} className="text-sm" style={{ color: 'var(--ink)' }}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
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
              ¿Trabajamos juntos?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Si tu proyecto necesita criterio y ejecución, escribite.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/contacto" className="btn-accent mt-8">
              Iniciar Proyecto <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
