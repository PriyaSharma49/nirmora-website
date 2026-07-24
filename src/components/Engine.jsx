import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const LEVERS = [
  { title: 'Creative Studio', desc: 'Brand systems & content built for every channel, not just one.' },
  { title: 'Paid Media Desk', desc: 'Always-on optimisation across Meta, Google & LinkedIn.' },
  { title: 'CRM & Automation', desc: 'Every lead routed, tagged and followed up automatically.' },
  { title: 'Web & Product', desc: 'Conversion-first builds that plug straight into the funnel.' },
  { title: 'Weekly Reporting', desc: 'One dashboard, real numbers, no vanity metrics.' },
]

export default function Engine() {
  return (
    <section id="engine" className="py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal>
          <div className="card-surface shadow-soft grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 p-8 md:p-14">
            <div>
              <div className="eyebrow">The Nirmora Engine</div>
              <h2 className="font-display font-bold text-[26px] md:text-[36px] text-ink leading-tight">
                One system, running
                <br />
                every discipline in sync.
              </h2>
              <p className="mt-4 max-w-[460px] text-[15px] text-ink-soft">
                Most agencies run each service in isolation. Nirmora runs one connected engine —
                creative feeds media, media feeds CRM, CRM feeds the next creative brief — so
                every brand we touch compounds instead of resetting each month.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 mt-6 text-[13.5px] font-bold text-gold-deep">
                See how it applies to your brand <ArrowRight size={14} />
              </a>
            </div>
            <ul className="flex flex-col">
              {LEVERS.map((l, i) => (
                <li key={l.title} className={`py-4 text-[14.5px] text-ink-soft ${i !== LEVERS.length - 1 ? 'border-b border-ink/10' : ''} ${i === 0 ? 'pt-0' : ''}`}>
                  <strong className="block font-display font-semibold text-[15px] text-ink mb-0.5">{l.title}</strong>
                  {l.desc}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
