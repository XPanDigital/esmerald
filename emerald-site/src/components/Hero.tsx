import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import AirflowSchematic from './AirflowSchematic';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden grid-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-deep -z-10" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-emerald/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald mb-6">
            <span className="w-8 h-px bg-emerald" />
            Downtown Manhattan · Licensed &amp; Insured
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.98] text-balance text-ink mb-6">
            Comfort isn&rsquo;t luck.
            <br />
            It&rsquo;s <span className="text-emerald">engineering.</span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Your HVAC system is invisible when it works and unbearable when it fails. Emerald Mechanical
            Solutions designs, installs, and maintains heating, cooling, and plumbing systems built for
            Manhattan buildings &mdash; with the precision of engineers, not the guesswork of a repairman.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="tel:+12122331001"
              className="inline-flex items-center gap-3 bg-emerald text-navy-deep font-semibold px-7 py-4 rounded-full hover:bg-emerald-dark transition-colors"
            >
              <Phone size={18} />
              Call (212) 233-1001
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-ink border border-line px-7 py-4 rounded-full hover:border-emerald transition-colors"
            >
              Request an Assessment
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md border-t border-line pt-8">
            <Stat icon={<MapPin size={16} />} value={<>Manhattan</>} label="Service Base" />
            <Stat icon={<ShieldCheck size={16} />} value={<>Licensed</>} label="&amp; Insured" />
            <Stat icon={<Clock size={16} />} value={<>Same-Day</>} label="Emergency Calls" />
          </div>
        </div>

        <div className="relative aspect-square max-w-xl mx-auto w-full">
          <AirflowSchematic />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: React.ReactNode; label: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-emerald mb-1.5">{icon}</div>
      <div className="font-display font-bold text-ink text-base leading-tight">{value}</div>
      <div className="text-muted text-xs mt-0.5">{label}</div>
    </div>
  );
}
