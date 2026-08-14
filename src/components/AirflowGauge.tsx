export default function AirflowGauge() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,196,140,0.35)]">
      <defs>
        <radialGradient id="gaugeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00C48C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00C48C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill="url(#gaugeGlow)" />
      <circle cx="100" cy="100" r="70" fill="#0D1F3C" stroke="#1E3250" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="#1E3250" strokeWidth="1.5" />

      <g stroke="#8BA5C0" strokeWidth="1.2" opacity="0.6">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 58;
          const y1 = 100 + Math.sin(angle) * 58;
          const x2 = 100 + Math.cos(angle) * 65;
          const y2 = 100 + Math.sin(angle) * 65;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      <g style={{ transformOrigin: '100px 100px' }} className="animate-[spin_9s_linear_infinite]">
        <line x1="100" y1="100" x2="100" y2="56" stroke="#00C48C" strokeWidth="3" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="5" fill="#00C48C" />
    </svg>
  );
}
