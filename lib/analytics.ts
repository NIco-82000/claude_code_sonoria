type EventName = 'cta_click' | 'scroll_depth' | 'form_submit' | 'demo_request'

interface EventParams {
  [key: string]: string | number | boolean
}

export const trackEvent = (eventName: EventName, params?: EventParams) => {
  if (typeof window !== 'undefined') {
    // Hook pour analytics (Google Analytics, Mixpanel, etc.)
    console.log('[Analytics]', eventName, params)

    // Exemple avec GA4
    if (window.gtag) {
      window.gtag('event', eventName, params)
    }
  }
}

export const trackScroll = () => {
  if (typeof window === 'undefined') return

  let ticking = false
  const depths = [25, 50, 75, 100]
  const tracked = new Set<number>()

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = window.scrollY
        const percent = Math.floor((scrolled / scrollHeight) * 100)

        depths.forEach(depth => {
          if (percent >= depth && !tracked.has(depth)) {
            tracked.add(depth)
            trackEvent('scroll_depth', { depth })
          }
        })

        ticking = false
      })
      ticking = true
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  return () => window.removeEventListener('scroll', handleScroll)
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
