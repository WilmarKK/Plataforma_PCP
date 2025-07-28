import { useEffect, useRef, useState } from 'react'
import { OBSERVER_OPTIONS } from '@/core/config/constants'

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      options || OBSERVER_OPTIONS
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options, hasIntersected])

  return {
    elementRef,
    isIntersecting,
    hasIntersected
  }
}

export const useAnimationOnScroll = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver()

  useEffect(() => {
    const element = elementRef.current
    if (element && hasIntersected) {
      element.style.animationPlayState = 'running'
    }
  }, [hasIntersected])

  return elementRef
}