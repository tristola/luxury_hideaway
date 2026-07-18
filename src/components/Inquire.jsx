import { useState } from 'react'
import { CONTACT } from '../data.js'
import { track } from '../analytics.js'

export default function Inquire() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // GA4 recommended lead event + a named event for this site's key conversion.
    track('generate_lead')
    track('interest_registered', { has_message: form.msg.trim().length > 0 })
    // Wire this to your mailing-list / CRM here.
    setSent(true)
  }

  return (
    <section className="inquire" id="inquire">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Register Your Interest</span>
          <h2>Be first to <em>the tide.</em></h2>
          <p className="lead">
            ALON isn't open for booking just yet. Leave your details and we'll be in touch
            the moment reservations open — with full photos, availability, and an early-bird rate.
          </p>
          <div className="contact-meta">
            <a href={`mailto:${CONTACT.email}`}><span className="k">Email</span><span>{CONTACT.email}</span></a>
            <a href={CONTACT.phoneHref}><span className="k">WhatsApp</span><span>{CONTACT.phone}</span></a>
            <div><span className="k">Location</span><span>{CONTACT.address}</span></div>
          </div>
        </div>

        {sent ? (
          <div className="reveal in form-done">
            <h2>You're on the list.</h2>
            <p className="form-note">
              Thank you for your interest — we'll reach out as soon as ALON opens for reservations.
            </p>
          </div>
        ) : (
          <form className="reveal d1" onSubmit={onSubmit}>
            <div className="field">
              <input type="text" id="name" name="name" value={form.name} onChange={update} required />
              <label htmlFor="name">Full name</label>
            </div>
            <div className="field">
              <input type="email" id="email" name="email" value={form.email} onChange={update} required />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="field-stack">
              <span>Message (optional)</span>
              <textarea
                id="msg"
                name="msg"
                rows="3"
                value={form.msg}
                onChange={update}
                placeholder="Tell us what you're looking for, or when you're hoping to visit."
              />
            </div>
            <button type="submit" className="btn">Register Interest</button>
            <p className="form-note">No booking or payment — we'll only contact you about ALON's opening.</p>
          </form>
        )}
      </div>
    </section>
  )
}
