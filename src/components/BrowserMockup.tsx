import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import { Project } from '../data/projects';

interface BrowserMockupProps {
  project: Project;
}

export default function BrowserMockup({ project }: BrowserMockupProps) {
  const [imgError, setImgError] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  // Dynamically compute iframe scale factor to fit 1280x800 into container width
  useEffect(() => {
    if (!containerRef.current) return;

    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.id}.zurrilabs.com`;

  const hasLocalImage = project.screenshot && !project.screenshot.startsWith('/assets/');
  const shouldTryIframe = project.liveUrl && !iframeError && (!hasLocalImage || imgError);

  return (
    <motion.div
      className="group relative flex flex-col rounded-xl border border-[var(--grid-soft)] bg-[var(--ink-3)] shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/50"
      initial={false}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top Browser Bar (macOS style) */}
      <div className="flex items-center gap-2 rounded-t-xl border-b border-[var(--grid-soft)] bg-[var(--ink-2)] px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5">
        {/* 3 macOS dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] sm:h-3 sm:w-3" />
        </div>

        {/* Faux non-editable URL bar */}
        <div className="mx-auto flex w-full max-w-xs items-center justify-center rounded-md bg-[var(--ink)]/80 px-2.5 py-1 text-center font-mono text-[10px] tracking-tight text-[var(--grid)] sm:max-w-md sm:px-3 sm:text-xs">
          <span className="truncate select-none">{displayUrl}</span>
        </div>

        {/* Empty spacer to balance layout */}
        <div className="w-10 sm:w-14" aria-hidden="true" />
      </div>

      {/* Screenshot / Live Viewport Area */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-b-xl bg-[var(--ink-2)]"
      >
        {/* 1. Try local image if available */}
        {hasLocalImage && !imgError ? (
          <img
            src={project.screenshot}
            alt={`Screenshot de ${project.title}`}
            loading="lazy"
            width={1280}
            height={800}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          />
        ) : shouldTryIframe ? (
          /* 2. Render Live Iframe Website Preview */
          <div className="relative h-full w-full overflow-hidden bg-[var(--ink)]">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--ink-2)] text-[var(--grid)]">
                <Loader2 className="h-5 w-5 animate-spin text-[var(--accent)]" />
                <span className="font-mono text-[10px] tracking-wider uppercase">Cargando vista previa...</span>
              </div>
            )}
            <iframe
              src={project.liveUrl}
              title={`Vista previa de ${project.title}`}
              loading="lazy"
              tabIndex={-1}
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              className="pointer-events-none absolute left-0 top-0 border-0 select-none"
              style={{
                width: '1280px',
                height: '800px',
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            />
          </div>
        ) : (
          /* 3. Fallback blueprint preview if image/iframe cannot be rendered */
          <div className="bg-grid-fine flex h-full w-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-2 font-mono text-[10px] tracking-widest text-[var(--brass)] uppercase">
              {project.category} · PREVIEW
            </div>
            <h4 className="font-head text-lg font-semibold tracking-tight text-[var(--paper)] sm:text-xl">
              {project.title}
            </h4>
            <span className="mt-2 font-mono text-xs text-[var(--grid)]">
              {displayUrl}
            </span>
          </div>
        )}

        {/* Action Overlay: Hover button to visit live site */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--paper)] bg-[var(--ink)]/90 px-4 py-2.5 font-mono text-xs font-medium tracking-widest text-[var(--paper)] uppercase shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
            >
              VER SITIO EN VIVO
              <ExternalLink size={14} />
            </a>
          ) : (
            <span
              title="Próximamente"
              className="inline-flex items-center gap-2 cursor-not-allowed border border-[var(--grid)] bg-[var(--ink)]/90 px-4 py-2.5 font-mono text-xs font-medium tracking-widest text-[var(--grid)] uppercase"
            >
              PRÓXIMAMENTE
            </span>
          )}
        </div>
      </div>

      {/* External link for mobile accessibility */}
      <div className="flex items-center justify-between border-t border-[var(--grid-soft)] p-4 sm:hidden">
        <div>
          <span className="font-mono text-[10px] tracking-wider text-[var(--accent)] uppercase">
            {project.category}
          </span>
          <h3 className="font-head text-base text-[var(--paper)]">
            {project.title}
          </h3>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[var(--grid)] px-3 py-1.5 font-mono text-[10px] tracking-wider text-[var(--paper)] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            SITIO <ExternalLink size={12} />
          </a>
        ) : (
          <span className="font-mono text-[10px] text-[var(--grid)] uppercase">
            Próximamente
          </span>
        )}
      </div>
    </motion.div>
  );
}
