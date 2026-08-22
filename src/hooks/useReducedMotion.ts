import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia(QUERY).matches
  )

  useEffect(() => {
    const query = window.matchMedia(QUERY)
    const onChange = () => setPrefersReducedMotion(query.matches)

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}
