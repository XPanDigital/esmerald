import { useReveal } from '@/lib/useReveal';

export default function Tension() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-navy-deep py-28 md:py-36 overflow-hidden">
      {/* temperature gradient element */}
      <div className="absolute right-0 top-0 bottom-0 w-1.5 md:w-2 bg-gradient-to-b from-emerald via-steel to-navy-deep opacity-70" />

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">The Problem</span>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 mb-10 text-balance max-w-3xl">
            Manhattan doesn&rsquo;t forgive a broken system.
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <p className="text-muted text-lg leading-relaxed">
              At 95&deg;F in July, a stalled compressor turns a Tribeca loft into a greenhouse within an hour.
              At 12&deg;F in January, a failed boiler in a pre-war building doesn&rsquo;t just cost comfort &mdash;
              it risks frozen pipes, damaged tenants, and a building that no longer holds its value.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Most HVAC problems in this city aren&rsquo;t equipment failures. They&rsquo;re engineering
              failures &mdash; systems sized wrong, installed fast, and serviced by whoever answered the phone
              first. Downtown buildings need mechanical systems designed for their specific loads, not a
              one-size-fits-all install.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
