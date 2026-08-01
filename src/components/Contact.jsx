import { useState } from 'react'
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [company, setCompany] = useState("")
const [service, setService] = useState("Influencer Marketing")
const [message, setMessage] = useState("")

  async function handleSubmit(e) {
  e.preventDefault()

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        service,
        message,
      }),
    })

    const data = await response.json()

    if (data.success) {
      setSent(true)

      setName("")
      setEmail("")
      setCompany("")
      setService("Influencer Marketing")
      setMessage("")
    } else {
      alert("Failed to send message.")
    }
  } catch (err) {
    console.error(err)
    alert("Server not running.")
  }
}

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal>
          <div className="card-surface shadow-soft grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="p-9 md:p-14 border-b md:border-b-0 md:border-r border-ink/10">
              <div className="eyebrow">Get In Touch</div>
              <h2 className="font-display font-bold text-[28px] md:text-[38px] text-ink leading-tight">
                Let's build your
                <br />
                growth system.
              </h2>
              <p className="mt-4 max-w-[380px] text-[15px] text-ink-soft">
                Tell us where your brand is today. We'll come back with a clear plan —
                not a generic proposal.
              </p>

              <div className="flex flex-col gap-4 mt-9">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wide text-ink-dim mb-1">Email</span>
                  <a href="mailto:hello@nirmoracreative.com" className="font-semibold text-ink hover:text-gold-deep transition-colors">
                    hello@nirmoracreative.com
                  </a>
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wide text-ink-dim mb-1">Phone</span>
                  <a href="tel:+91 73043 02068" className="font-semibold text-ink hover:text-gold-deep transition-colors">
                    +91 73043 02068
                  </a>
                  <a
                    href="https://wa.me/917304302068?text=Hi%20Nirmora%2C%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Nirmora on WhatsApp"
                    className="block text-[13px] text-ink-dim hover:text-gold-deep transition-colors mt-0.5"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-wide text-ink-dim mb-1">Studio</span>
                  <span className="font-semibold text-ink">Mulund, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex gap-3 mt-7">
  {[Instagram, Linkedin, Twitter].map((Icon, i) => (
    <a key={i} href="#" className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center hover:border-gold hover:text-gold-deep hover:-translate-y-0.5 transition-all">
      <Icon size={16} />
    </a>
  ))}
</div>
</div>

             

            <form onSubmit={handleSubmit} className="p-9 md:p-14 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name"><input
               type="text"
               required
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Your name"
               className="field-input"
              /></Field>
                <Field label="Email">
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="field-input"
                />
                </Field>
              </div>
              <Field label="Company">
              <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Brand / company name"
              className="field-input"
               />
              </Field>
              <Field label="Service Interested In">
                <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="field-input"
                >
                  <option>Influencer Marketing</option>
                  <option>Website Development</option>
                  <option>Performance Marketing</option>
                  <option>CRM Systems</option>
                  <option>Social Media Marketing</option>
                  <option>Full Growth System</option>
                </select>
              </Field>
              <Field label="Tell us about your project">
                <textarea
                 rows={4}
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 placeholder="A few lines about your brand and goals..."
                 className="field-input resize-y"
                 />
              </Field>
              <button type="submit" className="btn btn-primary justify-center w-full">
                Send Message <ArrowRight size={15} />
              </button>
              {sent && <div className="text-center text-[13.5px] text-sage">✓ Thanks — we'll be in touch within one business day.</div>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[12px] text-ink-dim tracking-wide">{label}</span>
      {children}
    </label>
  )
}
