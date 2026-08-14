import { useReveal } from '@/lib/useReveal';

const NEIGHBORHOODS = ['Tribeca', 'SoHo', 'Financial District', 'Chinatown', 'NoLIta', 'Lower East Side', 'Greenwich Village', 'Midtown'];

export default function ServiceArea() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="coverage" className="bg-navy py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">Service Area</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 mb-6 text-balance">
              We cover Manhattan.
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-8">
              From Tribeca to Midtown, Emerald Mechanical Solutions dispatches technicians across Downtown
              Manhattan and the surrounding zip codes, with priority response for buildings near our
              base at 70 Lafayette St, NY 10013.
            </p>
            <div className="flex flex-wrap gap-3">
              {NEIGHBORHOODS.map((n) => (
                <span key={n} className="text-xs font-mono uppercase tracking-wide text-muted border border-line rounded-full px-4 py-2">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <ManhattanSchematic />
        </div>
      </div>
    </section>
  );
}

function ManhattanSchematic() {
  return (
    <div className="aspect-square rounded-2xl border border-line bg-surface grid-texture relative overflow-hidden gradient-border">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* simplified lower-Manhattan street grid, schematic — not a literal map */}
        <g stroke="#1E3250" strokeWidth="1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v${i}`} x1={60 + i * 35} y1="40" x2={60 + i * 35} y2="360" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="60" y1={40 + i * 40} x2="340" y2={40 + i * 40} />
          ))}
        </g>
        <path d="M40 60 L120 40 L200 20 L320 60 L360 160 L320 340 L200 380 L100 340 L40 240 Z" fill="none" stroke="#00C48C" strokeWidth="2" strokeDasharray="6 5" opacity="0.6" />

        {/* HQ marker */}
        <circle cx="130" cy="130" r="7" fill="#00C48C" />
        <circle cx="130" cy="130" r="16" fill="none" stroke="#00C48C" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="r" from="7" to="26" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="145" y="134" fill="#F0F4F8" fontSize="11" fontFamily="JetBrains Mono, monospace">70 Lafayette St</text>
      </svg>
    </div>
  );
}
