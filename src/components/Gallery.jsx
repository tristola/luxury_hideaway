import { GALLERY } from '../data.js'

const DELAYS = ['', 'd1', 'd2', 'd3']

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="eyebrow reveal">A Closer Look</span>
            <h2 className="reveal d1">Lived in <em>light</em>.</h2>
          </div>
          <p className="reveal d2">
            Every surface chosen for the way the coastal sun moves across it through the day.
          </p>
        </div>
        <div className="grid-gal">
          {GALLERY.map((g, i) => (
            <figure key={g.cls} className={`${g.cls} reveal ${DELAYS[i] || ''}`}>
              <img src={g.img.src} alt={g.img.alt} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
