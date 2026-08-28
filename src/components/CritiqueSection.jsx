import { CRITIQUE_CARDS } from '../data/content'

/**
 * Section id="critique"
 * 5-point brutally honest critique cards comparing old vs new approach.
 */
export default function CritiqueSection() {
  return (
    <section id="critique" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Why This Guide Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            5 Core Strategies for Landing Remote Roles
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Most remote job guides fail buyers because they sell hopeful theory. Here is why
            the old model fails and how our redesigned product guarantees real traction.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRITIQUE_CARDS.map(({ n, title, flaw, fix, span }) => (
            <div
              key={n}
              className={`bg-sand p-6 rounded-2xl border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between ${span}`}
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold mb-3">
                  {n}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Old way:</strong> {flaw}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-emerald-800 font-semibold bg-emerald-50/70 p-2.5 rounded-lg">
                <strong>10x Upgrade:</strong> {fix}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
