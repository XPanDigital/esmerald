export default function AirflowSchematic() {
  return (
    <svg
      viewBox="0 0 640 640"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic diagram of an HVAC airflow and mechanical system"
    >
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00C48C" stopOpacity="0" />
          <stop offset="50%" stopColor="#00C48C" stopOpacity="1" />
          <stop offset="100%" stopColor="#00C48C" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="dialGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00C48C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00C48C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* static duct network */}
      <g stroke="#1E3250" strokeWidth="2" fill="none">
        <rect x="80" y="120" width="200" height="90" rx="6" />
        <rect x="360" y="80" width="200" height="70" rx="6" />
        <rect x="360" y="420" width="200" height="120" rx="6" />
        <rect x="80" y="440" width="180" height="90" rx="6" />
        <path d="M280 165 H360 M460 150 V420 M180 210 V440 M260 480 H360" />
        <circle cx="460" cy="300" r="70" />
        <circle cx="460" cy="300" r="46" />
      </g>

      {/* gauge glow */}
      <circle cx="460" cy="300" r="90" fill="url(#dialGlow)" />

      {/* rotating dial ticks */}
      <g stroke="#8BA5C0" strokeWidth="1.5" opacity="0.6">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 460 + Math.cos(angle) * 60;
          const y1 = 300 + Math.sin(angle) * 60;
          const x2 = 460 + Math.cos(angle) * 68;
          const y2 = 300 + Math.sin(angle) * 68;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* needle */}
      <g style={{ transformOrigin: '460px 300px' }} className="animate-[spin_9s_linear_infinite]">
        <line x1="460" y1="300" x2="460" y2="250" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="460" cy="300" r="6" fill="#00C48C" />

      {/* flowing airflow line, animated dash */}
      <path
        d="M100 165 H280 Q300 165 300 145 V80 H360"
        stroke="url(#flowGrad)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="14 10"
        className="animate-[dash_2.4s_linear_infinite]"
      />
      <path
        d="M170 210 V440 H260"
        stroke="url(#flowGrad)"
        strokeWidth="4"
        fill="none"
        strokeDasharray="14 10"
        className="animate-[dash_2.4s_linear_infinite]"
      />

      {/* corner registration marks — technical drawing feel */}
      <g stroke="#1E3250" strokeWidth="1">
        <path d="M20 20 H50 M20 20 V50" />
        <path d="M620 20 H590 M620 20 V50" />
        <path d="M20 620 H50 M20 620 V590" />
        <path d="M620 620 H590 M620 620 V590" />
      </g>

      <style>{`
        @keyframes dash { to { stroke-dashoffset: -48; } }
      `}</style>
    </svg>
  );
}
