export default function Footer() {
  return (
    <footer className="bg-navy border-t border-line py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
              <path d="M15 2 C15 2 5 13 5 19 A10 10 0 0 0 25 19 C25 13 15 2 15 2Z" stroke="#00C48C" strokeWidth="2" />
              <path d="M15 10 C15 10 10 16 10 20 A5 5 0 0 0 20 20 C20 16 15 10 15 10Z" fill="#00C48C" />
            </svg>
            <span className="font-display font-bold text-ink">EMERALD MECHANICAL</span>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            70 Lafayette St, 4th Floor
            <br />
            New York, NY 10013
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-wide text-muted mb-4">Company</div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink">
              <li><a href="#services" className="hover:text-emerald transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-emerald transition-colors">How We Work</a></li>
              <li><a href="#about" className="hover:text-emerald transition-colors">About</a></li>
              <li><a href="#coverage" className="hover:text-emerald transition-colors">Coverage</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wide text-muted mb-4">Contact</div>
            <ul className="flex flex-col gap-2.5 text-sm text-ink">
              <li><a href="tel:+12122331001" className="hover:text-emerald transition-colors">(212) 233-1001</a></li>
              <li><a href="#contact" className="hover:text-emerald transition-colors">Request Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted">
        <span>&copy; {new Date().getFullYear()} Emerald Mechanical Solutions Inc. All rights reserved.</span>
        <span>Licensed &amp; Insured Specialty Contractor &middot; New York, NY</span>
      </div>
    </footer>
  );
}
