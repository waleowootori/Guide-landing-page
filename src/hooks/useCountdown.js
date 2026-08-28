import { useState, useEffect } from 'react'

/**
 * Counts down from `initialSeconds`.
 * Resets to 4 hours when it hits zero (rolling timer).
 * Returns a formatted string: "04h : 28m : 42s"
 */
export function useCountdown(initialSeconds) {
  const [total, setTotal] = useState(initialSeconds)

  useEffect(() => {
    const id = setInterval(() => {
      setTotal((s) => (s <= 0 ? 4 * 3600 : s - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')
  const hrs  = Math.floor(total / 3600)
  const mins = Math.floor((total % 3600) / 60)
  const secs = total % 60

  return `${pad(hrs)}h : ${pad(mins)}m : ${pad(secs)}s`
}
