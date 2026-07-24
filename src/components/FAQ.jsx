import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    q: 'Which services do you recommend for a brand just starting out?',
    a: "Usually branding and social media first, to build a foundation, then performance marketing once there's a clear offer to promote. We'll map this out in your free audit.",
  },
  {
    q: 'How fast can a campaign go live?',
    a: 'Most performance campaigns launch within 10–14 days of onboarding. Website builds typically take 3–5 weeks depending on scope.',
  },
  {
    q: 'Do you work with brands outside India?',
    a: 'Yes — while most of our current clients are India-based, our systems for performance media and CRM travel well across markets.',
  },
  {
    q: 'What does reporting actually look like?',
    a: "A weekly dashboard with real numbers — reach, leads, cost per lead, conversion — plus a short written read on what we're changing and why.",
  },
  {
    q: 'Can I hire Nirmora for just one service?',
    a: 'Absolutely. Many clients start with a single service and expand once they see the system working.',
  },
]

function FaqItem({ item, open, onClick }) {
  return (
    <div className="border-b border-ink/10">
      <button onClick={onClick} className="w-full text-left py-6 flex justify-between items-center gap-5 font-display font-semibold text-[16.5px] text-ink">
        {item.q}
        <Plus size={17} className={`flex-none text-gold-deep transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
      </button>
      <div className="grid transition-all duration-400" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <p className="pb-6 text-[14.5px] text-ink-soft max-w-[520px]">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.1fr] gap-14">
        <Reveal>
          <div className="eyebrow">FAQ</div>
          <h2 className="font-display font-bold text-[30px] md:text-[42px] text-ink leading-tight">
            Questions we
            <br />
            get asked most.
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            Can't find what you're looking for?{' '}
            <a href="#contact" className="text-gold-deep font-bold">
              Reach out directly
            </a>
            .
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem key={item.q} item={item} open={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? null : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
