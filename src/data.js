// Central content for the ALON marketing site.
// Swap these values (rates, contact details) before publishing.
// Images live in one place — see src/assets.js and public/images/README.md.

import { IMAGES } from './assets.js'

export const CONTACT = {
  email: 'stay@alon-mactan.ph',
  phone: '+63 917 000 0000',
  phoneHref: 'tel:+639170000000',
  address: 'La Victoria, Mactan Newtown, Lapu-Lapu City, Cebu',
}

export const STATS = [
  { n: '79', l: 'sqm suite' },
  { n: '2', l: 'Bedrooms' },
  { n: '2', l: 'Bathrooms' },
  { n: '5', l: 'min to beach' },
  { n: '4', l: 'Sleeps' },
]

export const MARQUEE = [
  '2 Bedrooms · 2 Baths',
  '79 sqm suite',
  '5-min walk to the beach',
  'Resort infinity pool',
  'Suite-level service',
]

export const LIVING_FEATURES = [
  { ft: 'Living & dining', fv: 'Open-plan, sea-facing' },
  { ft: 'Kitchen', fv: "Chef's galley, stone counters" },
  { ft: 'Balcony', fv: 'Private, full sunset outlook' },
  { ft: 'The beach', fv: 'A 5-minute walk away' },
]

export const BEDROOM_FEATURES = [
  { ft: 'Primary suite', fv: 'King · ensuite · sea view' },
  { ft: 'Second bedroom', fv: 'Queen or twin · garden view' },
  { ft: 'Bathrooms', fv: '2 full, rain showers' },
  { ft: 'Climate', fv: 'Cross-ventilated + silent A/C' },
]

export const GALLERY = [
  { cls: 'g1', img: IMAGES.balcony, caption: 'The balcony & sea view' },
  { cls: 'g2', img: IMAGES.ensuite, caption: 'Ensuite' },
  { cls: 'g3', img: IMAGES.kitchen, caption: 'Kitchen' },
  { cls: 'g4', img: IMAGES.secondBedroom, caption: 'Second room' },
]

export const AMENITIES = [
  { ic: '01', h: 'Infinity & Kiddie Pools', p: 'A resort-style infinity pool, kiddie pool, and sun deck for guests of the tower.' },
  { ic: '02', h: 'Fitness Center & Trail', p: 'A fully equipped gym plus an outdoor fitness trail winding through the township.' },
  { ic: '03', h: 'Dining by Gordon Ramsay', p: 'A signature Gordon Ramsay restaurant sits within Mactan Newtown — moments away.' },
  { ic: '04', h: 'Family-Friendly', p: "Kids' play area, daycare facility, and a relaxation lounge make longer stays easy." },
  { ic: '05', h: 'Fast Wi-Fi & Local Host', p: 'Fibre Wi-Fi throughout the suite and a 24-hour local host on call for anything you need.' },
  { ic: '06', h: 'Secure, Gated Township', p: '24/7 security, covered parking, elevators, and a function room for gatherings.' },
]

export const LOCATION_POINTS = [
  { name: 'Newtown Beach & beach club', dist: '5-min walk' },
  { name: 'Restaurant by Gordon Ramsay', dist: '3 min' },
  { name: 'Shangri-La & Mövenpick resorts', dist: '5 min' },
  { name: 'Mactan-Cebu Intl Airport (MCIA)', dist: '15 min' },
  { name: 'Cebu City & IT Park', dist: '40 min' },
]

export const PRICE_ROWS = [
  { k: 'Weekly stay', v: '₱56,700 · save 10%' },
  { k: 'Monthly stay', v: '₱198,000 · save 27%' },
  { k: 'Minimum stay', v: '2 nights' },
  { k: 'Check-in / out', v: '3:00 PM / 11:00 AM' },
  { k: 'Guests', v: 'Up to 4' },
]
