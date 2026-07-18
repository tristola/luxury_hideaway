import { useEffect, useState } from 'react'
import { track } from '../analytics.js'

const scrollToInquire = () => {
  track('cta_click', { location: 'nav_burger' })
  document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="brand">ALON</div>
      <div className="nav-links">
        <a href="#residence">The Residence</a>
        <a href="#gallery">Gallery</a>
        <a href="#amenities">Amenities</a>
        <a href="#location">Location</a>
        <a href="#inquire" className="nav-cta" onClick={() => track('cta_click', { location: 'nav' })}>Register Interest</a>
      </div>
      <button type="button" className="burger" onClick={scrollToInquire}>Register</button>
    </nav>
  )
}
