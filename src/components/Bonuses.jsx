import { ClipboardCheck, Check } from 'lucide-react'
import { BONUSES } from '../data/content'

/**
 * Bonuses section — golden workbook visual on the left,
 * bonus list with value badges on the right.
 */
export default function Bonuses() {
  return (
    <section className="py-20 bg-amber-50/60 border-y border-amber-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Left: Golden workbook mockup ──────────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs bg-[#F2C94C] p-6 rounded-2xl book-shadow text-slate-900 border-2 border-amber-500/40 transform hover:scale-105 transition-transform duration-300">
              <div className="border border-slate-900/20 p-5 rounded-xl text-center space-y-4">
                <div className="text-[9px] tracking-widest uppercase font-bold text-slate-800">
                  THE FOUNDER'S TOOLKIT
                </div>
                <h3 className="font-display font-black text-xl leading-snug">
                  INTERVIEW<br />
                  PREPARATION<br />
                  <span className="bg-slate-900 text-amber-300 px-2 py-0.5 rounded text-sm inline-block mt-1">
                    WORKBOOK
                  </span>
                </h3>
                <p className="text-[10px] font-medium text-slate-800">
                  Prepare, practice, and land 6-figure remote offers
                </p>
                <div className="py-4 bg-amber-300/40 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-12 h-12 text-slate-900" />
                </div>
                <div className="text-[10px] font-bold text-slate-900 bg-white/70 py-1 rounded">
                  INCLUDED FREE TODAY
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Bonus list ─────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-200 text-amber-900 font-extrabold text-xs tracking-wider uppercase">
              EXCLUSIVE BONUSES (VALUE: ₦45,000)
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              But Wait, You're Not Just Getting The Guide...
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              To guarantee you get immediate results, I have included the exact proprietary
              workbooks, trackers, and action plans I use with my private consulting clients.
            </p>

            <div className="space-y-4 pt-2">
              {BONUSES.map(({ title, badge, body }) => (
                <div
                  key={title}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-amber-200/80 shadow-sm flex items-start gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {title}{' '}
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded ml-2">
                        {badge}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
