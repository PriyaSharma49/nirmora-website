import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'

const PILLARS = [
  { n: '01', title: 'Improve Efficiency', desc: 'Automated CRM & reporting cut manual work across your funnel.' },
  { n: '02', title: 'Enhance Revenue', desc: 'Performance media and CRM working together, not in silos.' },
  { n: '03', title: 'Elevate Experience', desc: 'Design and content that make your brand feel premium at every touchpoint.' },
]

export default function Pillars() {
  return (
    <section id="pillars" className="py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="card-surface shadow-soft p-8 md:p-14">
          <Reveal className="max-w-[460px]">
            <div className="eyebrow">We Are</div>
            <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink">NIRMORA</h2>
            <p className="mt-4 text-[15.5px] text-ink-soft">
              As a digital growth agency, we don't just run campaigns — we embed a repeatable
              system into your brand's core workflows. That shift is what separates activity
              from actual, compounding growth.
            </p>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {PILLARS.map((p) => (
              <RevealItem key={p.n}>
                <span className="font-mono text-[13px] text-sage">{p.n}</span>
                <h4 className="font-display text-[19px] font-semibold text-ink mt-3 mb-2">{p.title}</h4>
                <p className="text-[14px] text-ink-soft">{p.desc}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
