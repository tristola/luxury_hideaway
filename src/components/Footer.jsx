import { CONTACT } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-brand">AL<em>O</em>N</div>
        <div className="foot-cols">
          <div>
            <h4>Discover</h4>
            <a href="#residence">The Residence</a>
            <a href="#gallery">Gallery</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <p>La Victoria, Mactan Newtown</p>
            <p>Lapu-Lapu City, Cebu, Philippines</p>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 ALON · La Victoria, Mactan Newtown. All rights reserved.</span>
        <span>Entire suite · 2 Bedrooms · Beachfront</span>
      </div>
    </footer>
  )
}
