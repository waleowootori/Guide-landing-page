import { Clock } from 'lucide-react'
import { useCountdown } from '../hooks/useCountdown'

/**
 * Sticky notification bar at the very top of the page.
 * Shows a "Special Launch Cohort" badge and a live countdown timer.
 */
export default function NotificationBar() {
  const countdown = useCountdown(4 * 3600 + 28 * 60 + 42)

  return (
    <aside
      aria-label="Limited Offer"
      className="bg-forest-900 text-amberGold-100 py-2.5 px-4 sticky top-0 z-50 border-b border-forest-700/50 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium gap-2">

        {/* Left: promo label */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
            SPECIAL LAUNCH COHORT
          </span>
          <span>
            Get Instant Access + All 3 Bonuses at <strong>70% OFF</strong>
          </span>
        </div>

        {/* Right: countdown timer */}
        <div className="flex items-center gap-2 font-mono text-amber-300">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="font-bold">Price rises in:</span>
          <span className="bg-forest-800 px-2 py-0.5 rounded border border-forest-700 font-semibold tracking-wider">
            {countdown}
          </span>
        </div>

      </div>
    </aside>
  )
}
