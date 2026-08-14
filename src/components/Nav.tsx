import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Coverage', href: '#coverage' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 2 C15 2 5 13 5 19 A10 10 0 0 0 25 19 C25 13 15 2 15 2Z" stroke="#00C48C" strokeWidth="2" />
            <path d="M15 10 C15 10 10 16 10 20 A5 5 0 0 0 20 20 C20 16 15 10 15 10Z" fill="#00C48C" />
          </svg>
          <span className="font-display font-bold tracking-tight text-lg text-ink">
            EMERALD <span className="text-emerald">MECHANICAL</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+12122331001" className="flex items-center gap-2 text-sm text-ink font-medium">
            <Phone size={16} className="text-emerald" />
            (212) 233-1001
          </a>
          <a
            href="#contact"
            className="bg-emerald text-navy-deep text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-dark transition-colors"
          >
            Schedule Service
          </a>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-line px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink text-base">
              {l.label}
            </a>
          ))}
          <a href="tel:+12122331001" className="flex items-center gap-2 text-ink font-medium">
            <Phone size={16} className="text-emerald" /> (212) 233-1001
          </a>
          <a href="#contact" className="bg-emerald text-navy-deep text-sm font-semibold px-5 py-3 rounded-full text-center">
            Schedule Service
          </a>
        </div>
      )}
    </header>
  );
}
