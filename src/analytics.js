// ────────────────────────────────────────────────────────────────────────────
// Analytics (Google Analytics 4) — one place for all tracking.
//
// Set your Measurement ID in a `.env` file at the project root:
//     VITE_GA_ID=G-XXXXXXXXXX
// (see .env.example). When it's absent — e.g. in local dev — tracking is a no-op,
// so nothing is sent and no GA script loads. Restart `npm run dev` after editing .env.
// ────────────────────────────────────────────────────────────────────────────

const GA_ID = import.meta.env.VITE_GA_ID
const CONSENT_KEY = 'alon_cookie_consent'

/** True only when a GA Measurement ID is configured — used to gate the cookie banner. */
export const ANALYTICS_CONFIGURED = Boolean(GA_ID)

/** Returns 'granted', 'denied', or null (no decision yet). */
export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

/** Persist the visitor's cookie choice ('granted' | 'denied'). */
export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* storage unavailable — ignore */
  }
}

/** Injects the GA4 (gtag.js) script and configures it. Safe to call once on mount. */
export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

/** Fire a GA4 event. No-ops if analytics isn't configured. */
export function track(event, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', event, params)
}
