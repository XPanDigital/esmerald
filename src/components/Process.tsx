import { useReveal } from '@/lib/useReveal';

const STEPS = [
  {
    title: 'Assessment',
    copy: 'We walk the space, review existing equipment, and understand how the building actually behaves — not just what the last contractor installed.',
  },
  {
    title: 'Diagnosis',
    copy: 'Load calculations and system testing identify the real cause, whether that\u2019s a failing component or a system that was never sized correctly.',
  },
  {
    title: 'Engineering',
    copy: 'We spec the fix or the build: equipment, ductwork, controls, and timeline, calculated for your specific space, not a generic template.',
  },
  {
    title: 'Execution',
    copy: 'Licensed technicians install or repair to the spec, with the same standard whether it\u2019s a single unit or a full building retrofit.',
  },
  {
    title: 'Verification',
    copy: 'Every job is tested under real load before we call it done — airflow, pressure, and temperature confirmed, not assumed.',
  },
  {
    title: 'Follow-up',
    copy: 'We check back. A system that\u2019s right on day one should still be right a year later, and we stand behind that.',
  },
];

export default function Process() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="bg-navy-deep py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={headerRef} className="reveal max-w-2xl mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">How We Work</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 text-balance">
            Precision from day one.
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-line" />
          <div className="grid md:grid-cols-6 gap-10 md:gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.title} index={i + 1} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ index, title, copy }: { index: number; title: string; copy: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal relative">
      <div className="relative z-10 w-12 h-12 rounded-full bg-navy-deep border border-emerald text-emerald font-mono text-sm flex items-center justify-center mb-5">
        {String(index).padStart(2, '0')}
      </div>
      <h3 className="font-display font-bold text-ink text-lg mb-2">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{copy}</p>
    </div>
  );
}
