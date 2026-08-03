import { useEffect, useRef, useState } from 'react';

/**
 * Hero blueprint SVG — improved animation version.
 *
 * Improvements:
 * - draw-path elements get .anim-draw class applied via JS (was missing before)
 * - Corner registration marks flash with accent glow on entry
 * - Scanline sweep effect overlays the SVG
 * - Post-draw: marching ants, pulsing dot, traveling marker, data counter readout
 * - Staggered easing per element group (structure first, details after)
 * - All motion respects prefers-reduced-motion
 */
export default function HeroBlueprint() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [scanDone, setScanDone] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const paths = Array.from(wrap.querySelectorAll<SVGGeometryElement>('.draw-path'));
    paths.forEach((p) => {
      const len = p.getTotalLength ? p.getTotalLength() : 100;
      p.style.setProperty('--len', String(len));
      p.style.strokeDasharray = String(len);
      if (reduce) {
        p.style.strokeDashoffset = '0';
      } else {
        p.style.strokeDashoffset = String(len);
      }
    });

    // Kick off CSS animations
    requestAnimationFrame(() => {
      paths.forEach((p) => p.classList.add('anim-draw'));
      setReady(true);
    });

    // Scanline done after ~1.8s
    const scanTimer = setTimeout(() => setScanDone(true), 1800);

    // Counter readout effect (simulates live data)
    if (!reduce) {
      let val = 0;
      const interval = setInterval(() => {
        val += Math.floor(Math.random() * 12) + 3;
        if (val >= 260) { val = 260; clearInterval(interval); }
        setCounter(val);
      }, 60);
      return () => { clearInterval(interval); clearTimeout(scanTimer); };
    }

    return () => clearTimeout(scanTimer);
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full select-none">

      {/* Scanline sweep overlay */}
      <div
        className={`absolute inset-0 pointer-events-none z-10 ${ready && !scanDone ? 'anim-scanline' : ''}`}
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(201,162,39,0.08) 50%, transparent 100%)',
          backgroundSize: '100% 60px',
          opacity: scanDone ? 0 : 1,
          transition: 'opacity 0.4s ease',
        }}
      />

      <svg
        viewBox="0 0 520 360"
        className="w-full h-auto"
        fill="none"
        role="img"
        aria-label="Plano animado: wireframe de una página web en proceso de dibujo"
      >
        {/* Subtle glow filter */}
        <defs>
          <filter id="glow-accent" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-brass" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Registration ticks at corners — glow on entry */}
        <g style={{ color: 'var(--brass)' }} filter={ready ? 'url(#glow-brass)' : undefined}>
          <path className="draw-path" d="M6 6 L18 6 M6 6 L6 18"   stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.4s', animationDelay: '0s'    }} />
          <path className="draw-path" d="M514 6 L502 6 M514 6 L514 18" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.05s' }} />
          <path className="draw-path" d="M6 354 L18 354 M6 354 L6 342"  stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.1s'  }} />
          <path className="draw-path" d="M514 354 L502 354 M514 354 L514 342" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.4s', animationDelay: '0.15s' }} />
        </g>

        {/* Main frame perimeter */}
        <path
          id="frame-perimeter"
          className="draw-path"
          d="M30 40 H490 V320 H30 Z"
          stroke="var(--grid)"
          strokeWidth="1.5"
          style={{ ['--dur' as string]: '1.2s', animationDelay: '0.2s' }}
        />

        {/* Top app bar */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M30 64 H490" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.8s', animationDelay: '0.5s' }} />
          {/* window dots */}
          <circle className="draw-path" cx="44" cy="52" r="3.5" stroke="var(--accent)" strokeWidth="1.5" fill="none" style={{ ['--dur' as string]: '0.3s', animationDelay: '0.65s' }} />
          <circle className="draw-path" cx="58" cy="52" r="3.5" stroke="var(--brass)"  strokeWidth="1.5" fill="none" style={{ ['--dur' as string]: '0.3s', animationDelay: '0.72s' }} />
          <circle className="draw-path" cx="72" cy="52" r="3.5" stroke="var(--grid)"   strokeWidth="1.5" fill="none" style={{ ['--dur' as string]: '0.3s', animationDelay: '0.79s' }} />
          {/* nav items */}
          <path className="draw-path" d="M290 52 H335" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.35s', animationDelay: '0.88s' }} />
          <path className="draw-path" d="M350 52 H395" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.35s', animationDelay: '0.95s' }} />
          <path className="draw-path" d="M410 52 H450" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.35s', animationDelay: '1.02s' }} />
          {/* CTA pill in nav */}
          <rect className="draw-path" x="460" y="44" width="22" height="16" rx="2" stroke="var(--accent)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.3s', animationDelay: '1.1s' }} />
        </g>

        {/* Sidebar */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M120 64 V320" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.8s', animationDelay: '0.6s' }} />
          {/* sidebar items */}
          <path className="draw-path" d="M42 88  H108" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.0s'  }} />
          <path className="draw-path" d="M42 108 H108" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.08s' }} />
          <path className="draw-path" d="M42 128 H108" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.16s' }} />
          <path className="draw-path" d="M42 148 H108" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.24s' }} />
          <path className="draw-path" d="M42 168 H90"  stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.32s' }} />
          {/* active highlight */}
          <rect className="draw-path" x="36" y="122" width="76" height="14" stroke="var(--accent)" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.38s' }} filter={ready ? 'url(#glow-accent)' : undefined} />
        </g>

        {/* Content area — image placeholder */}
        <g style={{ color: 'var(--grid)' }}>
          <rect  className="draw-path" x="148" y="80" width="170" height="108" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.9s', animationDelay: '0.7s' }} />
          <path  className="draw-path" d="M148 80  L318 188" stroke="currentColor" strokeWidth="0.75" style={{ ['--dur' as string]: '0.5s', animationDelay: '1.2s'  }} />
          <path  className="draw-path" d="M318 80  L148 188" stroke="currentColor" strokeWidth="0.75" style={{ ['--dur' as string]: '0.5s', animationDelay: '1.24s' }} />
        </g>

        {/* Text lines right column */}
        <g style={{ color: 'var(--grid)' }}>
          <path className="draw-path" d="M334 90  H478" stroke="currentColor" strokeWidth="1.5" style={{ ['--dur' as string]: '0.38s', animationDelay: '0.9s'  }} />
          <path className="draw-path" d="M334 107 H478" stroke="currentColor" strokeWidth="1"   style={{ ['--dur' as string]: '0.38s', animationDelay: '0.97s' }} />
          <path className="draw-path" d="M334 124 H450" stroke="currentColor" strokeWidth="1"   style={{ ['--dur' as string]: '0.38s', animationDelay: '1.04s' }} />
          <path className="draw-path" d="M334 141 H478" stroke="currentColor" strokeWidth="1"   style={{ ['--dur' as string]: '0.38s', animationDelay: '1.11s' }} />
          <path className="draw-path" d="M334 158 H420" stroke="currentColor" strokeWidth="1"   style={{ ['--dur' as string]: '0.38s', animationDelay: '1.18s' }} />
          {/* CTA */}
          <rect className="draw-path" x="334" y="174" width="84" height="22" stroke="var(--accent)" strokeWidth="1.5" fill="none" style={{ ['--dur' as string]: '0.38s', animationDelay: '1.32s' }} filter={ready ? 'url(#glow-accent)' : undefined} />
        </g>

        {/* Lower cards */}
        <g style={{ color: 'var(--grid)' }}>
          <rect className="draw-path" x="148" y="208" width="100" height="72" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.65s', animationDelay: '1.1s'  }} />
          <rect className="draw-path" x="262" y="208" width="100" height="72" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.65s', animationDelay: '1.18s' }} />
          <rect className="draw-path" x="376" y="208" width="100" height="72" stroke="currentColor" strokeWidth="1" fill="none" style={{ ['--dur' as string]: '0.65s', animationDelay: '1.26s' }} />
          {/* card inner lines */}
          <path className="draw-path" d="M162 300 H236" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.5s'  }} />
          <path className="draw-path" d="M276 300 H348" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.55s' }} />
          <path className="draw-path" d="M390 300 H460" stroke="currentColor" strokeWidth="1" style={{ ['--dur' as string]: '0.28s', animationDelay: '1.6s'  }} />
          {/* card accent dots */}
          <circle className="draw-path" cx="198" cy="244" r="10" stroke="var(--brass)" strokeWidth="0.75" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.45s' }} />
          <circle className="draw-path" cx="312" cy="244" r="10" stroke="var(--brass)" strokeWidth="0.75" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.52s' }} />
          <circle className="draw-path" cx="426" cy="244" r="10" stroke="var(--brass)" strokeWidth="0.75" fill="none" style={{ ['--dur' as string]: '0.4s', animationDelay: '1.59s' }} />
        </g>

        {/* Marching ants top line */}
        <path
          id="march-line"
          d="M30 40 H490"
          stroke="var(--brass)"
          strokeWidth="1"
          strokeDasharray="4 5"
          className={ready ? 'anim-march' : ''}
          style={{ opacity: ready ? 0.6 : 0, transition: 'opacity 0.5s ease 1.8s' }}
        />

        {/* Pulsing status dot */}
        <circle
          cx="480" cy="52" r="4"
          fill="var(--accent)"
          className={ready ? 'anim-pulse-dot' : ''}
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.3s ease 1.6s', filter: ready ? 'url(#glow-accent)' : undefined }}
        />

        {/* Traveling marker along frame */}
        <circle
          r="3.5"
          fill="var(--brass)"
          className={ready ? 'anim-travel' : ''}
          style={{
            offsetPath: "path('M30 40 H490 V320 H30 Z')",
            offsetRotate: '0deg',
            ['--travel-dur' as string]: '5s',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.4s ease 1.8s',
            filter: ready ? 'url(#glow-brass)' : undefined,
          }}
        />

        {/* Second marker offset by half — creates two-marker chase */}
        <circle
          r="2"
          fill="var(--grid)"
          className={ready ? 'anim-travel-b' : ''}
          style={{
            offsetPath: "path('M30 40 H490 V320 H30 Z')",
            offsetRotate: '0deg',
            ['--travel-dur' as string]: '5s',
            opacity: ready ? 0.5 : 0,
            transition: 'opacity 0.4s ease 2s',
          }}
        />

        {/* Dimension annotation */}
        <g style={{ color: 'var(--brass)' }}>
          <path
            d="M30 336 V332 M490 336 V332 M30 334 H490"
            stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3"
            style={{ opacity: ready ? 0.45 : 0, transition: 'opacity 0.6s ease 1.7s' }}
          />
          {/* Cross-hair target on image area */}
          <path
            d="M233 134 H243 M238 129 V139"
            stroke="currentColor" strokeWidth="0.75"
            className={ready ? 'anim-pulse-subtle' : ''}
            style={{ opacity: ready ? 0.7 : 0, transition: 'opacity 0.4s ease 1.9s' }}
          />
          {/* Y label inside SVG left margin */}
          <text
            x="4"
            y="180"
            textAnchor="middle"
            dominantBaseline="middle"
            transform="rotate(-90, 4, 180)"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '7px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fill: 'var(--brass)',
              opacity: ready ? 0.85 : 0,
              transition: 'opacity 0.6s ease 1.5s',
            }}
          >
            Y · 180
          </text>
        </g>
      </svg>

      {/* Floating annotation labels */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease 1.6s' }}
      >
        <span className="font-mono-xs" style={{ color: 'var(--brass)' }}>
          X · {counter} · ESCALA 1:1
        </span>
      </div>
    </div>
  );
}
