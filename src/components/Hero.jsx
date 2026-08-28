import {
  ArrowRight,
  Zap,
  Sparkles,
  Globe,
  CheckCircle2,
  DollarSign,
} from "lucide-react";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
];

/**
 * Hero section — headline, CTA button, and animated book-mockup card.
 *
 * Props:
 *  onCTAClick — scrolls page to #pricing
 */
export default function Hero({ onCTAClick }) {
  return (
    <section className="pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Left: Copy ──────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <span className="w-2.6 h-3.5 text-amber-600" />
              The Ultimate Remote Career Framework
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              STOP APPLYING BLINDLY. <br />
              <span className="gold-gradient-text">
                START SECURING REAL OFFERS.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              You don't need another generic list of remote job boards. You need
              an exact battle-tested system to beat ATS filters, pitch
              international founders directly, and get paid in USD/GBP — even
              with a Nigerian or African passport.
            </p>

            {/* CTA block */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#pricing"
                  onClick={onCTAClick}
                  className="inline-flex justify-center items-center gap-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all">
                  <span>Get the Guide &amp; Toolkits for ₦9,999</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex flex-col justify-center sm:justify-start gap-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 justify-center sm:justify-start">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>Instant PDF &amp; Spreadsheet Access</span>
                  </div>
                  <div className="text-xs font-bold text-red-500 text-center sm:text-left animate-pulse mt-1">
                    Price goes back to ₦19,999 soon!
                  </div>
                </div>
              </div>

              {/* Micro trust signals */}
              <div className="pt-4 flex items-center gap-4 text-xs text-slate-500">
                <div className="flex -space-x-2">
                  {AVATAR_URLS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Student"
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-amber-300 font-bold text-[10px] flex items-center justify-center ring-2 ring-white">
                    +480
                  </div>
                </div>
                <span>
                  Joined by <strong>480+ Africans</strong> landing US/EU remote
                  gigs
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Book mockup ───────────────────────────────────── */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/30 to-forest-600/20 rounded-3xl blur-2xl -z-10" />

              {/* Book card */}
              <div className="bg-[#FAF7F0] border border-[#E8DFC8] rounded-2xl p-6 sm:p-8 book-shadow transform hover:-rotate-1 transition-transform duration-500">
                <div className="border border-dashed border-[#D4C3A3] p-5 rounded-xl text-center space-y-4">
                  <div className="text-[10px] tracking-[0.25em] font-extrabold uppercase text-slate-400">
                    REMOTE CAREER SYSTEM
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-forest-900 text-amber-300 mb-1">
                      EDITION 2026
                    </span>
                    <h2 className="font-display font-black text-2xl text-slate-900 leading-tight">
                      30-DAY GUIDE
                      <br />
                      <span className="text-amber-700">
                        TO SECURE A REMOTE JOB
                      </span>
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium italic">
                      Prepare, apply, interview, and get hired in 30 days
                    </p>
                  </div>

                  {/* Globe art */}
                  <div className="py-4 flex justify-center">
                    <div className="w-36 h-28 bg-forest-800 rounded-lg p-3 flex items-center justify-center border-2 border-amber-600/40 shadow-inner">
                      <div className="w-28 h-20 bg-forest-900 rounded border border-emerald-500/30 flex flex-col items-center justify-center text-center p-2">
                        <Globe
                          className="w-6 h-6 text-amber-400 animate-spin"
                          style={{ animationDuration: "12s" }}
                        />
                        <span className="text-[9px] font-bold text-white mt-1">
                          GLOBAL OFFERS
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E8DFC8]/60 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span className="text-emerald-700 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified Links
                      Inside
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating earnings badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">
                    Earn in FX Currency
                  </div>
                  <div className="text-[10px] text-slate-500">
                    $1,500 – $4,500/month avg.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
