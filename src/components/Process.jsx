import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'

const STEPS = [
  { n: '01', title: 'Discover', desc: 'Understand the brand, audience and business goals from the inside out.' },
  { n: '02', title: 'Research', desc: 'Study the market, competitors and channels where your buyers actually live.' },
  { n: '03', title: 'Strategy', desc: 'Build a channel plan tied to specific, measurable growth targets.' },
  { n: '04', title: 'Design', desc: 'Craft the creative system — brand, content and interface — end to end.' },
  { n: '05', title: 'Development', desc: 'Build the website, CRM and automation layer that supports the strategy.' },
  { n: '06', title: 'Launch', desc: 'Ship campaigns and product in tightly scoped, fast-moving sprints.' },
  { n: '07', title: 'Optimization', desc: "Read the data weekly and cut what isn't converting, fast." },
  { n: '08', title: 'Growth', desc: 'Scale what works into a repeatable, compounding growth engine.' },
]

export default function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center">How We Work</div>
          <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink leading-tight">
            An eight-step system,
            <br />
            run on every project.
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            Nothing improvised. Every engagement moves through the same disciplined
            sequence, so growth compounds instead of resetting each month.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-xl2 overflow-hidden">
          {STEPS.map((s) => (
            <RevealItem key={s.n} className="bg-cream-soft p-8 transition-colors duration-300 hover:bg-white">
              <span className="font-mono text-[13px] text-sage opacity-80">{s.n}</span>
              <h4 className="font-display text-[19px] font-semibold text-ink mt-3.5 mb-2">{s.title}</h4>
              <p className="text-[13.5px] text-ink-soft">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
