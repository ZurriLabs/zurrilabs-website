import { useEffect, useRef, useState } from 'react';

/**
 * Hero blueprint SVG.
 * - One-time getTotalLength() measurement per path, then pure CSS
 *   stroke-dashoffset animation (staggered).
 * - After draw-in: marching-ants dashed line, pulsing status dot, and a
 *   small marker traveling along the frame perimeter via CSS offset-path.
 * - All motion disabled under prefers-reduced-motion (final state shown).
 */
export default function HeroBlueprint() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const paths = Array.from(wrap.querySelectorAll<SVGPathElement>('.draw-path'));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.setProperty('--len', String(len));
      p.style.strokeDasharray = String(len);
      if (reduce) {
        p.style.strokeDashoffset = '0';
      } else {
        p.style.strokeDashoffset = String(len);
      }
    });

    // Frame perimeter path for the traveling marker (offset-path)
    const frame = wrap.querySelector<SVGPathElement>('#frame-perimeter');
    if (frame) {
      const fl = frame.getTotalLength();
      frame.style.setProperty('--frame-len', String(fl));
    }

    // Kick off CSS animations next frame
    requestAnimationFrame(() => setReady(true));
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full">
      <svg
        viewBox="0 0 520 360"
        className="w-full h-auto"
        fill="none"
        role="img"
        aria-label="Plano animado: wireframe de una página web en proceso de dibujo"
      >
        {/* Palette refs via currentColor + CSS vars */}
        <g style={{ color: 'var(--brass)' }}>
          {/* Registration ticks at corners */}
          <path className="draw-path" d="M6 6 L18 6 M6 6 L6 18" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.5s' }} />
          <path className="draw-path" d="M514 6 L502 6 M514 6 L514 18" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.5s' }} />
          <path className="draw-path" d="M6 354 L18 354 M6 354 L6 342" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.5s' }} />
          <path className="draw-path" d="M514 354 L502 354 M514 354 L514 342" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.5s' }} />
        </g>

        {/* Main frame perimeter — also used as offset-path for traveling marker */}
        <path
          id="frame-perimeter"
          className="draw-path"
          d="M30 40 H490 V320 H30 Z"
          stroke="var(--grid)"
          strokeWidth="1.5"
          style={{ ['--dur' as string]: '1.4s' }}
        />

        {/* Top app bar */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M30 40 H490" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '1.2s' }} />
          <path className="draw-path" d="M30 64 H490" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.9s', animationDelay: '0.3s' }} />
          {/* window dots */}
          <circle className="draw-path" cx="44" cy="52" r="3" stroke="var(--accent)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.5s' }} />
          <circle className="draw-path" cx="56" cy="52" r="3" stroke="var(--brass)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.55s' }} />
          <circle className="draw-path" cx="68" cy="52" r="3" stroke="var(--grid)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.6s' }} />
          {/* nav items */}
          <path className="draw-path" d="M300 52 H340" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.7s' }} />
          <path className="draw-path" d="M356 52 H396" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.78s' }} />
          <path className="draw-path" d="M412 52 H452" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.86s' }} />
        </g>

        {/* Sidebar */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M30 64 V320" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.9s', animationDelay: '0.4s' }} />
          <path className="draw-path" d="M120 64 V320" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.9s', animationDelay: '0.5s' }} />
          {/* sidebar items */}
          <path className="draw-path" d="M48 84 H104" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '0.9s' }} />
          <path className="draw-path" d="M48 104 H104" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '0.98s' }} />
          <path className="draw-path" d="M48 124 H104" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.06s' }} />
          <path className="draw-path" d="M48 144 H104" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.14s' }} />
          {/* active sidebar item highlight */}
          <rect x="42" y="118" width="68" height="14" stroke="var(--accent)" strokeWidth="1" fill="none" className="draw-path" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.2s' }} />
        </g>

        {/* Content area — image placeholder with X */}
        <g style={{ color: 'var(--grid)' }}>
          <rect className="draw-path" x="150" y="84" width="160" height="100" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '1s', animationDelay: '0.6s' }} />
          <path className="draw-path" d="M150 84 L310 184" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.6s', animationDelay: '1.1s' }} />
          <path className="draw-path" d="M310 84 L150 184" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.6s', animationDelay: '1.15s' }} />
        </g>

        {/* Content blocks — text lines */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M330 92 H470" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.9s' }} />
          <path className="draw-path" d="M330 108 H470" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.96s' }} />
          <path className="draw-path" d="M330 124 H440" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.02s' }} />
          <path className="draw-path" d="M330 140 H470" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.08s' }} />
          <path className="draw-path" d="M330 156 H420" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.14s' }} />
          {/* CTA button placeholder */}
          <rect className="draw-path" x="330" y="172" width="80" height="20" stroke="var(--accent)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.3s' }} />
        </g>

        {/* Lower content cards */}
        <g style={{ color: 'var(--grid)' }}>
          <rect className="draw-path" x="150" y="210" width="96" height="70" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.7s', animationDelay: '1s' }} />
          <rect className="draw-path" x="262" y="210" width="96" height="70" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.7s', animationDelay: '1.08s' }} />
          <rect className="draw-path" x="374" y="210" width="96" height="70" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.7s', animationDelay: '1.16s' }} />
          {/* card text lines */}
          <path className="draw-path" d="M162 296 H234" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.4s' }} />
          <path className="draw-path" d="M274 296 H346" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.45s' }} />
          <path className="draw-path" d="M386 296 H458" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.5s' }} />
        </g>

        {/* Marching ants — a dashed line that "marches" continuously after draw-in */}
        <path
          id="march-line"
          d="M30 40 H490"
          stroke="var(--brass)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className={ready ? 'anim-march' : ''}
          style={{ opacity: ready ? 0.7 : 0 }}
        />

        {/* Pulsing status dot */}
        <g style={{ transformOrigin: '476px 52px' }}>
          <circle
            cx="476"
            cy="52"
            r="3.5"
            fill="var(--accent)"
            className={ready ? 'anim-pulse-dot' : ''}
            style={{ opacity: ready ? 1 : 0 }}
          />
        </g>

        {/* Traveling marker along frame perimeter via offset-path */}
        <circle
          r="3"
          fill="var(--brass)"
          className={ready ? 'anim-travel' : ''}
          style={{
            offsetPath: "path('M30 40 H490 V320 H30 Z')",
            offsetRotate: '0deg',
            ['--travel-dur' as string]: '7s',
            opacity: ready ? 1 : 0,
          }}
        />

        {/* Dimension annotation lines (brass, thin) */}
        <g style={{ color: 'var(--brass)' }} className={ready ? '' : ''}>
          <path d="M30 332 V328 M490 332 V328 M30 330 H490" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" style={{ opacity: ready ? 0.5 : 0 }} />
        </g>
      </svg>

      {/* Floating annotation labels around the SVG */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease 1.4s' }}
      >
        <span className="font-mono-xs" style={{ color: 'var(--brass)' }}>Y · 180</span>
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease 1.5s' }}
      >
        <span className="font-mono-xs" style={{ color: 'var(--brass)' }}>X · 260 · ESCALA 1:1</span>
      </div>
    </div>
  );
}
