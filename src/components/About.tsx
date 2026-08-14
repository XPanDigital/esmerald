import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-navy-deep py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">About</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 mb-6 text-balance">
              Built in Downtown Manhattan, for Downtown Manhattan.
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-6">
              Emerald Mechanical Solutions Inc. is based at 70 Lafayette St, operating in the neighborhoods
              we know best. Under the direction of owner Michael Kehoe, the company focuses on one thing:
              mechanical systems engineered correctly the first time.
            </p>
            <p className="text-muted leading-relaxed text-lg mb-10">
              That means licensed, insured technicians; documented scopes of work; and a refusal to treat a
              128-year-old walk-up the same way as a glass tower on Sixth Avenue.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-line pt-8">
              <Badge icon={<ShieldCheck size={18} />} label="Licensed & Insured" />
              <Badge icon={<Award size={18} />} label="Specialty Contractor" />
              <Badge icon={<MapPin size={18} />} label="Manhattan-Based" />
            </div>
          </div>

          <div className="order-1 md:order-2 aspect-[4/5] rounded-2xl border border-line bg-surface grid-texture flex flex-col items-center justify-center p-10 text-center gradient-border">
            <div className="w-20 h-20 rounded-full border border-emerald flex items-center justify-center text-emerald font-display font-bold text-2xl mb-6">
              MK
            </div>
            <div className="font-display font-bold text-ink text-xl">Michael Kehoe</div>
            <div className="text-muted text-sm mt-1">Owner, Emerald Mechanical Solutions</div>
            <p className="text-muted text-sm leading-relaxed mt-6 max-w-xs">
              &ldquo;A system is only as good as the engineering behind it. We don&rsquo;t sell equipment &mdash;
              we solve buildings.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="text-emerald mb-2">{icon}</div>
      <div className="text-ink text-xs leading-snug">{label}</div>
    </div>
  );
}
