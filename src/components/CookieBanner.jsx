import { useEffect, useState } from 'react'
import { getConsent, setConsent, initAnalytics, track, ANALYTICS_CONFIGURED } from '../analytics.js'

// Shows a consent banner until the visitor accepts or declines. Analytics
// (Google Analytics 4) only loads — and cookies are only set — after "Accept".
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only prompt when analytics is configured and no choice has been made yet.
    if (ANALYTICS_CONFIGURED && !getConsent()) setVisible(true)
  }, [])

  const accept = () => {
    setConsent('granted')
    initAnalytics()
    track('cookie_consent', { choice: 'granted' })
    setVisible(false)
  }

  const decline = () => {
    setConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        We use cookies for anonymous analytics to understand how visitors find ALON and
        improve the site. No tracking happens until you accept.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-decline" onClick={decline}>Decline</button>
        <button type="button" className="cookie-accept" onClick={accept}>Accept</button>
      </div>
    </div>
  )
}
