import { NAV_LINKS } from '../data/content'

/**
 * Top navigation bar.
 * Each nav link smoothly scrolls to its matching section via href="#id".
 * Smooth-scroll is handled by `scroll-behavior: smooth` in index.css.
 *
 * Props:
 *  onGetGuide — called when the "Get The Guide" CTA is clicked (scrolls to #pricing)
 */
export default function Navbar({ onGetGuide }) {
  return (
    <header>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">

        {/* Brand logo + wordmark */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-forest-900 flex items-center justify-center text-amber-400 font-bold font-display text-lg shadow-sm">
            R
          </div>
          <a href="#" className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-forest-900">
            REMOTE CAREER <span className="text-amber-600">SYSTEM</span>
          </a>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          {NAV_LINKS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-forest-900 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="#pricing"
          onClick={onGetGuide}
          className="bg-forest-900 hover:bg-forest-800 text-amberGold-50 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          Get The Guide
        </a>

      </nav>
    </header>
  )
}
