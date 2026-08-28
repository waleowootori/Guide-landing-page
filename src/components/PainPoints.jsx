import { XCircle, Hourglass, HelpCircle } from 'lucide-react'
import { PAIN_CARDS } from '../data/content'

// Map icon string names from content.js to actual Lucide components
const ICON_MAP = { XCircle, Hourglass, HelpCircle }

/**
 * "Does this sound painfully familiar?" — dark forest-green section
 * highlighting the three pain points of the target buyer.
 */
export default function PainPoints() {
  return (
    <section className="py-20 bg-forest-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-amberGold-50">
            Does this sound painfully familiar?
          </h2>
          <p className="text-emerald-200/80 text-sm mt-3">
            If you have been applying for months without a single interview invite, you are
            not untalented — your method is broken.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_CARDS.map(({ iconClass, icon, title, body }) => {
            const Icon = ICON_MAP[icon]
            return (
              <div
                key={title}
                className="bg-forest-800/80 border border-forest-700 p-8 rounded-2xl hover:bg-forest-700/60 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-emerald-100/70 text-sm leading-relaxed">{body}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
