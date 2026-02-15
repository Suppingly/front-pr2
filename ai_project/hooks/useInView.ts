import { useEffect, useRef, useState, type RefObject } from 'react'

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string; ref?: RefObject<T | null> }
) {
  const defaultRef = useRef<T>(null)
  const ref = options?.ref ?? defaultRef
  const [isInView, setIsInView] = useState(false)
  const { threshold = 0.1, rootMargin = '0px 0px -80px 0px' } = options ?? {}

  useEffect(() => {
    const el = ref?.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, ref])

  return { ref, isInView }
}
