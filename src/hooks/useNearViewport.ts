import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

const ROOT_MARGIN = '300px'

export const useNearViewport = (ref: RefObject<Element | null>) => {
  const [isNear, setIsNear] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || isNear) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) setIsNear(true)
      },
      { rootMargin: ROOT_MARGIN }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, isNear])

  return isNear
}
