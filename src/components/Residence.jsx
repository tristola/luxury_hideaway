import { LIVING_FEATURES, BEDROOM_FEATURES } from '../data.js'
import { IMAGES } from '../assets.js'

function FeatureList({ items }) {
  return (
    <ul className="feature-list">
      {items.map((f) => (
        <li key={f.ft}>
          <span className="ft">{f.ft}</span>
          <span className="fv">{f.fv}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Residence() {
  return (
    <>
      <section className="residence" id="residence">
        <div className="wrap">
          <div className="split">
            <div className="split-media reveal">
              <img src={IMAGES.livingRoom.src} alt={IMAGES.livingRoom.alt} />
              <span className="media-tag">The Great Room</span>
            </div>
            <div className="split-body reveal d1">
              <span className="eyebrow">Living, Reimagined</span>
              <h2>Floor-to-ceiling <em>glass</em>, and nothing between you and the water.</h2>
              <p>
                The great room opens entirely onto a sea-facing balcony, dissolving the line
                between inside and shore. Lime-washed walls, hand-finished narra wood, and a
                kitchen built for long, slow mornings — 79 sqm that lives far larger.
              </p>
              <FeatureList items={LIVING_FEATURES} />
            </div>
          </div>
        </div>
      </section>

      <section className="residence" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split rev">
            <div className="split-body reveal">
              <span className="eyebrow">Two Bedrooms</span>
              <h2>Each room a <em>quiet</em> harbour for the night.</h2>
              <p>
                The primary suite faces the sea with a walk-in wardrobe and a stone-clad
                ensuite. The second bedroom — equally generous — opens to the garden side,
                cool and shaded for rest at any hour.
              </p>
              <FeatureList items={BEDROOM_FEATURES} />
            </div>
            <div className="split-media reveal d1">
              <img src={IMAGES.primaryBedroom.src} alt={IMAGES.primaryBedroom.alt} />
              <span className="media-tag">Primary Suite</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
