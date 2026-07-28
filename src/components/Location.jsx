import { LOCATION_POINTS } from '../data.js'
import { IMAGES } from '../assets.js'

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="loc-bg">
        <img src={IMAGES.locationAerial.src} alt={IMAGES.locationAerial.alt} loading="lazy" />
      </div>
      <div className="loc-inner">
        <div>
          <span className="eyebrow reveal" style={{ color: 'var(--brass-light)' }}>The Setting</span>
          <h2 className="reveal d1">La Victoria, Mactan Newtown, <em>at your feet.</em></h2>
          <p className="reveal d2">
            La Victoria sits within Mactan Newtown — a 30-hectare beachfront township on Mactan
            Island — with its own private beach club,
            boardwalk, and dive-grade waters of the Hilutungan Channel just a 5-minute walk away.
            Shops, cafés, and everyday services sit right at your doorstep, with the international
            gateway of Cebu only minutes further.
          </p>
        </div>
        <ul className="loc-points reveal d2">
          {LOCATION_POINTS.map((p) => (
            <li key={p.name}>
              <span>{p.name}</span>
              <span className="dist">{p.dist}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
