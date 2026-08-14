import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

export default function CTAFinal() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-navy-deep py-28 md:py-36 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald/10 rounded-full blur-3xl" />

      <div ref={ref} className="reveal relative max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mb-6 text-balance">
            Let&rsquo;s talk about your system.
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10">
            Tell us what&rsquo;s happening, or what you&rsquo;re building. A licensed technician will respond
            with next steps &mdash; not a sales script.
          </p>

          <div className="flex flex-col gap-4">
            <a href="tel:+12122331001" className="flex items-center gap-3 text-ink text-xl font-display font-bold">
              <Phone size={20} className="text-emerald" />
              (212) 233-1001
            </a>
            <a href="#" className="flex items-center gap-3 text-muted text-sm hover:text-ink transition-colors">
              <MessageCircle size={16} className="text-emerald" />
              Or text us to schedule
            </a>
            <p className="text-muted text-sm mt-4">70 Lafayette St, 4th Floor, New York, NY 10013</p>
          </div>
        </div>

        <div className="bg-navy border border-line rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-emerald font-display font-bold text-xl mb-2">Request received.</div>
              <p className="text-muted text-sm">We&rsquo;ll be in touch shortly. For urgent issues, call us directly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-4"
            >
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="text-xs font-mono uppercase tracking-wide text-muted mb-2 block">
                  What&rsquo;s going on?
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink text-sm outline-none focus:border-emerald transition-colors resize-none"
                  placeholder="No heat, second floor, tenant reports cold radiators since this morning..."
                />
              </div>
              <button
                type="submit"
                className="bg-emerald text-navy-deep font-semibold rounded-full py-3.5 hover:bg-emerald-dark transition-colors mt-2"
              >
                Request Service
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wide text-muted mb-2 block">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink text-sm outline-none focus:border-emerald transition-colors"
      />
    </div>
  );
}
