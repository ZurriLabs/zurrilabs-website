import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Check, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import RegistrationMarks from '@/components/RegistrationMarks';
import CursorSpotlight from '@/components/CursorSpotlight';
import Annotation from '@/components/Annotation';

const PROJECT_TYPES = [
  'Landing Page',
  'Sitio Institucional',
  'Tienda / E-commerce',
  'Diseño de Interfaz (UI)',
  'Mantenimiento',
  'Otro',
];

const BUDGET_RANGES = [
  'Hasta $150.000 ARS',
  '$150.000 – $300.000 ARS',
  '$300.000 – $600.000 ARS',
  'Más de $600.000 ARS',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    budget: '',
    message: '',
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: no backend. Simulate success.
    setSent(true);
  };

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
            <Annotation coord="C-00">Contacto</Annotation>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-[1.05] sm:text-5xl" style={{ color: 'var(--paper)' }}>
              Empecemos por una conversación
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed" style={{ color: 'var(--paper)', opacity: 0.7 }}>
              Contame de qué se trata tu proyecto y te respondo con un alcance,
              un plazo y un precio en pesos. Respuesta directa, sin formularios
              automáticos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + info */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--paper)', color: 'var(--ink)' }}
      >
        <div className="bg-grid-paper absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="p-7 sm:p-9" style={{ background: 'var(--paper)', border: '1px solid var(--line-light)' }}>
                  {sent ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ background: 'var(--accent)', color: 'var(--paper)' }}
                      >
                        <Check size={26} />
                      </span>
                      <h2 className="mt-6 text-2xl" style={{ color: 'var(--ink)' }}>Mensaje enviado</h2>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: '#5a5346' }}>
                        Gracias, {form.name || 'visitante'}. Te respondo a la
                        brevedad al correo que indicaste. Si es urgente, podés
                        escribirme directo por WhatsApp.
                      </p>
                      <button
                        onClick={() => {
                          setSent(false);
                          setForm({ name: '', email: '', type: '', budget: '', message: '' });
                        }}
                        className="btn-ghost-paper mt-8"
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <Annotation coord="C-01">Formulario de proyecto</Annotation>
                        <span className="font-mono-xs" style={{ color: 'var(--brass-2)' }}>REV. 01</span>
                      </div>

                      <form onSubmit={onSubmit} className="mt-8 space-y-6">
                        <Field label="Nombre">
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                            placeholder="Tu nombre"
                            className="form-input"
                          />
                        </Field>

                        <Field label="Email">
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => update('email', e.target.value)}
                            placeholder="tu@email.com"
                            className="form-input"
                          />
                        </Field>

                        <Field label="Tipo de proyecto">
                          <div className="flex flex-wrap gap-2">
                            {PROJECT_TYPES.map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => update('type', t)}
                                className="chip"
                                data-active={form.type === t}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </Field>

                        <Field label="Presupuesto (ARS)">
                          <div className="flex flex-wrap gap-2">
                            {BUDGET_RANGES.map((b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => update('budget', b)}
                                className="chip"
                                data-active={form.budget === b}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </Field>

                        <Field label="Mensaje">
                          <textarea
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => update('message', e.target.value)}
                            placeholder="Contame sobre el proyecto, objetivos y plazos..."
                            className="form-input resize-none"
                          />
                        </Field>

                        <button type="submit" className="btn-accent w-full justify-center">
                          Enviar mensaje
                          <Send size={15} />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Direct contact info */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="space-y-6">
                  <div className="p-7" style={{ background: 'var(--paper)', border: '1px solid var(--line-light)' }}>
                    <Annotation coord="C-02">Contacto directo</Annotation>
                    <ul className="mt-6 space-y-5">
                      <ContactRow icon={Phone} label="Teléfono" value="+54 11 1234-5678" href="tel:+541112345678" />
                      <ContactRow icon={MessageCircle} label="WhatsApp" value="Escribir por WhatsApp" href="https://wa.me/5491112345678" external />
                      <ContactRow icon={Mail} label="Email" value="hola@zurrilabs.com" href="mailto:hola@zurrilabs.com" />
                      <ContactRow icon={MapPin} label="Ubicación" value="Buenos Aires, Argentina" />
                    </ul>
                  </div>

                  <div className="p-7" style={{ background: 'var(--paper)', border: '1px solid var(--line-light)' }}>
                    <Annotation coord="C-03">Horario</Annotation>
                    <p className="mt-5 text-sm leading-relaxed" style={{ color: '#5a5346' }}>
                      Lunes a viernes, 9 a 18 hs (ART). Respondo dentro de las
                      24 hs hábiles. Para proyectos urgentes, WhatsApp es lo más
                      rápido.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono-xs" style={{ color: 'var(--brass-2)' }}>{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3.5">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center"
        style={{ background: 'var(--paper-2)', color: 'var(--accent)', border: '1px solid var(--line-light)' }}
      >
        <Icon size={16} />
      </span>
      <div>
        <p className="font-mono-xs" style={{ color: 'var(--brass-2)' }}>{label}</p>
        <p className="mt-0.5 text-sm" style={{ color: 'var(--ink)' }}>{value}</p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block transition-opacity duration-200 hover:opacity-70"
    >
      {content}
    </a>
  );
}
