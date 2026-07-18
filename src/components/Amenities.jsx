import { AMENITIES } from '../data.js'

const DELAYS = ['', 'd1', 'd2']

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="wrap">
        <span className="eyebrow reveal">Suite-Level Living</span>
        <h2 className="reveal d1">Everything tended to, so nothing interrupts the view.</h2>
        <div className="am-grid">
          {AMENITIES.map((a, i) => (
            <div key={a.ic} className={`reveal ${DELAYS[i % 3]}`}>
              <span className="ic">{a.ic}</span>
              <h3>{a.h}</h3>
              <p>{a.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
