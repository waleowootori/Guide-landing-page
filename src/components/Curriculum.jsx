import { FileText, Linkedin, Send, ShieldAlert } from 'lucide-react'
import { CURRICULUM_CARDS } from '../data/content'

// Map icon strings from content.js to Lucide components
const ICON_MAP = { FileText, Linkedin, Send, ShieldAlert }

/**
 * Section id="curriculum"
 * 4 core framework pillars displayed as hover-lift cards.
 */
export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 max-w-6xl mx-auto px-4 sm:px-6">

      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          The Core Framework
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
          The 30-Day Blueprint to Your Remote Career
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          This isn't another generic advice ebook. It's a structured, day-by-day system
          designed to overhaul your professional presentation, streamline your application
          process, and get you in front of global decision-makers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CURRICULUM_CARDS.map(({ icon, title, body }) => {
          const Icon = ICON_MAP[icon]
          return (
            <div
              key={title}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          )
        })}
      </div>

    </section>
  )
}
