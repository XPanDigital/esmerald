import { Star } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

const HIGHLIGHTS = [
  { label: 'Response Time', copy: 'Same-day dispatch for active emergencies across Downtown Manhattan.' },
  { label: 'Technical Depth', copy: 'Every technician is trained to diagnose the system, not just replace parts.' },
  { label: 'Straight Answers', copy: 'A written scope and price before any work begins — no surprise line items.' },
  { label: 'Local Knowledge', copy: 'Built for pre-war risers and modern towers alike, not a suburban playbook.' },
];

export default function SocialProof() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-navy py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald">The Record</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mt-4 mb-6 text-balance">
              What Downtown Manhattan expects from us.
            </h2>
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-emerald text-emerald" />
              ))}
            </div>
            <p className="text-muted leading-relaxed max-w-md">
              We hold ourselves to the standard the neighborhood demands: fast, technically sound, and honest
              about what a job actually costs. It&rsquo;s the same standard on Yelp and Google as it is on the
              job site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="border border-line rounded-xl p-6 gradient-border">
                <div className="text-emerald text-xs font-mono uppercase tracking-wide mb-3">{h.label}</div>
                <p className="text-ink text-sm leading-relaxed">{h.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
