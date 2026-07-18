import { IMAGES } from '../assets.js'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={IMAGES.hero.src} alt={IMAGES.hero.alt} />
      </div>
      <div className="hero-top">
        <span>La Victoria · Mactan Newtown<br />Lapu-Lapu City, Cebu</span>
        <span style={{ textAlign: 'right' }}>10°18′N&nbsp; 123°59′E<br />Hilutungan Channel</span>
      </div>
      <h1>
        <span className="hero-line"><span>Wake to</span></span>
        <span className="hero-line"><span>the <span className="it">tide.</span></span></span>
      </h1>
      <div className="hero-foot">
        <p>A two-bedroom suite-level residence at La Victoria, Mactan Newtown — beachfront living on Mactan Island, minutes from the sea and the runway alike.</p>
        <div className="scroll-cue">Scroll to enter</div>
      </div>
    </header>
  )
}
