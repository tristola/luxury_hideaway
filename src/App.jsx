import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal.js'
import { getConsent, initAnalytics } from './analytics.js'
import CookieBanner from './components/CookieBanner.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Intro from './components/Intro.jsx'
import Residence from './components/Residence.jsx'
import Gallery from './components/Gallery.jsx'
import Amenities from './components/Amenities.jsx'
import Location from './components/Location.jsx'
import Pricing from './components/Pricing.jsx'
import Inquire from './components/Inquire.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()

  // Returning visitors who already accepted get analytics without re-prompting.
  useEffect(() => {
    if (getConsent() === 'granted') initAnalytics()
  }, [])

  return (
    <>
      <CookieBanner />
      <Nav />
      <Hero />
      <Marquee />
      <Intro />
      <Residence />
      <Gallery />
      <Amenities />
      <Location />
      <Pricing />
      <Inquire />
      <Footer />
    </>
  )
}
