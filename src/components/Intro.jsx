import { STATS } from '../data.js'

export default function Intro() {
  return (
    <section className="intro">
      <div className="wrap">
        <span className="eyebrow reveal">An Entire 2-Bedroom Suite</span>
        <p className="big reveal d1">
          A home that holds the horizon. ALON is a suite-level retreat in the{' '}
          <em>La Victoria</em> tower at Mactan Newtown — where the day begins barefoot on
          warm stone and ends over the Hilutungan Channel. Two bedrooms, one unbroken view
          of the sea.
        </p>
        <div className="intro-meta reveal d2">
          {STATS.map((s) => (
            <div key={s.l}>
              <span className="n">{s.n}</span>
              <span className="l">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
