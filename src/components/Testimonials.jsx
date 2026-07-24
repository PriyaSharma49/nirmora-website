import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const TESTIMONIALS = [
  {
    quote:
      "Nirmora rebuilt our entire digital presence — branding, ads and CRM — inside eight weeks. The first month alone brought in more qualified leads than our previous two agencies combined.",
    name: 'Founder',
    company: 'Urban Aura Realty',
  },
  {
    quote:
      "What stood out was the reporting. No vague 'brand awareness' slides — just real numbers, every week, and a team that adjusted fast when something wasn't working.",
    name: 'Marketing Lead',
    company: 'Om Sai Industries',
  },
  {
    quote:
      "Our Instagram went from an afterthought to our biggest lead source. Nirmora's content team understands our audience better than we did.",
    name: 'Owner',
    company: "Ginu's Salad Factory",
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5500)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[idx]

  return (
    <section id="testimonials" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center">Client Voices</div>
          <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink leading-tight">
            What it's like to
            <br />
            actually work with us.
          </h2>
        </Reveal>

        <div className="max-w-[760px] mx-auto text-center">
          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
              >
                <div className="text-gold tracking-[3px] text-[14px] mb-5">★★★★★</div>
                <p className="font-display text-[18px] md:text-[23px] font-medium text-ink leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center justify-center gap-3.5 mt-8">
                  <span className="w-9 h-9 rounded-full" style={{ background: `linear-gradient(135deg, hsl(${30 + idx * 40} 65% 62%), hsl(${40 + idx * 20} 55% 45%))` }} />
                  <div className="text-left text-[13px]">
                    <strong className="block text-ink text-[14px]">{t.name}</strong>
                    <span className="text-ink-dim">{t.company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-7">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-[22px] bg-gold' : 'w-2 bg-ink/15'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
