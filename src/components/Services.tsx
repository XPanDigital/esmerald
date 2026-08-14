import { useReveal } from '@/lib/useReveal';

type Service = {
  tag: string;
  title: string;
  copy: string;
  icon: React.ReactNode;
  imageKeyword: string;
};

const SERVICES: Service[] = [
  {
    tag: 'Heating',
    title: 'Heating Systems',
    copy: 'Boiler and furnace service engineered for pre-war and modern Manhattan buildings alike — sized correctly the first time, so you never overpay to stay warm.',
    icon: <FlameIcon />,
    imageKeyword: 'boiler,heating',
  },
  {
    tag: 'Cooling',
    title: 'Air Conditioning',
    copy: 'From single-zone splits to full building VRF systems, we design cooling that matches your actual load — not a rough estimate from a sales visit.',
    icon: <SnowflakeIcon />,
    imageKeyword: 'airconditioner,hvac',
  },
  {
    tag: 'New Build',
    title: 'HVAC Installation',
    copy: 'Full-system design and installation for renovations, gut jobs, and new construction. Every install is drawn, calculated, and signed off before a single duct is run.',
    icon: <DuctIcon />,
    imageKeyword: 'ductwork,installation',
  },
  {
    tag: 'Urgent',
    title: 'Emergency Repair',
    copy: 'A dead system at midnight in February isn\u2019t a scheduling problem, it\u2019s an emergency. Same-day dispatch across Downtown Manhattan.',
    icon: <BoltIcon />,
    imageKeyword: 'technician,repair',
  },
  {
    tag: 'Maintenance',
    title: 'Preventive Maintenance',
    copy: 'Scheduled inspection and tuning that catches the failure before it happens — the difference between a $200 fix and a $12,000 replacement.',
    icon: <GaugeIcon />,
    imageKeyword: 'hvacmaintenance,filter',
  },
  {
    tag: 'Plumbing',
    title: 'Commercial & Residential Plumbing',
    copy: 'Full plumbing service alongside our mechanical work, so heating, cooling, and water systems are handled by one accountable team.',
    icon: <PipeIcon />,
    imageKeyword: 'plumbing,pipes',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.title} service={s} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal max-w-2xl">
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">Expertise</span>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 text-balance">
        Six disciplines. One accountable team.
      </h2>
    </div>
  );
}

function ServiceRow({ service, reversed }: { service: Service; reversed: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal grid md:grid-cols-2 gap-10 md:gap-20 items-center ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="relative aspect-[4/3] rounded-2xl border border-line bg-surface overflow-hidden gradient-border">
        {/* Reference photo only — swap for licensed/owned photography before launch */}
        <img
          src={`https://loremflickr.com/800/600/${service.imageKeyword}`}
          alt={`Reference photo for ${service.title}`}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
        <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-navy-deep/80 backdrop-blur-sm border border-line flex items-center justify-center text-emerald">
          <div className="w-6 h-6">{service.icon}</div>
        </div>
        <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wide text-ink/70 bg-navy-deep/70 backdrop-blur-sm px-2 py-1 rounded-full">
          Reference photo
        </span>
      </div>
      <div>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted">{service.tag}</span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mt-3 mb-4">{service.title}</h3>
        <p className="text-muted leading-relaxed text-base md:text-lg">{service.copy}</p>
      </div>
    </div>
  );
}

/* --- line icons, drawn to match the technical/schematic identity --- */

function FlameIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M50 15c8 14-6 18-6 30a16 16 0 0032 0c0-10-8-14-8-22 6 6 10 16 10 26a24 24 0 01-48 0c0-20 14-24 20-34z" />
    </svg>
  );
}
function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M50 10v80M15 30l70 40M15 70l70-40" />
      <path d="M50 10l-8 10M50 10l8 10M50 90l-8-10M50 90l8-10M15 30l4 12M15 30l13-3M85 70l-4-12M85 70l-13 3M15 70l4-12M15 70l13 3M85 30l-4 12M85 30l-13-3" />
    </svg>
  );
}
function DuctIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="15" y="20" width="35" height="20" rx="2" />
      <rect x="55" y="55" width="35" height="20" rx="2" />
      <path d="M32 40v10a5 5 0 005 5h11M77 55V45a5 5 0 00-5-5H50" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M55 12 25 55h20l-8 33 38-46H55z" strokeLinejoin="round" />
    </svg>
  );
}
function GaugeIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="55" r="32" />
      <path d="M50 55 66 40" />
      <path d="M28 55a22 22 0 0144 0" strokeDasharray="3 4" />
      <circle cx="50" cy="55" r="3" fill="currentColor" />
    </svg>
  );
}
function PipeIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 30h30a10 10 0 0110 10v30a10 10 0 0010 10h10" />
      <circle cx="20" cy="30" r="5" />
      <circle cx="80" cy="80" r="5" />
    </svg>
  );
}
