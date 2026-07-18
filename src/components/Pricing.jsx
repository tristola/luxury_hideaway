import { PRICE_ROWS } from '../data.js'
import { track } from '../analytics.js'

export default function Pricing() {
  return (
    <section className="specs">
      <div className="wrap">
        <div className="specs-copy reveal">
          <span className="eyebrow" style={{ color: 'var(--brass-light)' }}>Your Stay</span>
          <h2>The <em>entire</em> suite — your home by the sea.</h2>
          <p>
            The whole two-bedroom residence is yours: a private sea-facing balcony, full
            kitchen, and fast Wi-Fi. Sleeps four in comfort, a five-minute walk from the sand.
          </p>
          <p>Professionally managed, with a 24-hour local host on call throughout your stay.</p>
        </div>
        <div className="price-card reveal d1">
          <span className="eyebrow">Opening Soon · 2BR</span>
          <div className="amt">₱9,000 <small>/ night</small></div>
          <div className="sub">Indicative all-in rate — taxes, linens &amp; cleaning included</div>
          <div className="price-table">
            {PRICE_ROWS.map((r) => (
              <div className="row" key={r.k}>
                <span>{r.k}</span>
                <span>{r.v}</span>
              </div>
            ))}
          </div>
          <a
            href="#inquire"
            className="btn"
            style={{ display: 'inline-block', marginTop: '1.6rem' }}
            onClick={() => track('cta_click', { location: 'pricing' })}
          >
            Register Interest
          </a>
        </div>
      </div>
    </section>
  )
}
