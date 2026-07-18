import { MARQUEE } from '../data.js'

export default function Marquee() {
  // Duplicate the list so the -50% translate loop is seamless.
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>
    </div>
  )
}
