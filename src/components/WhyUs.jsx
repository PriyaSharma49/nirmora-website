import Reveal from './Reveal.jsx'

const ROWS = [
  { label: 'Team', them: 'Junior-led execution', us: 'Expert, senior-reviewed team' },
  { label: 'Strategy', them: 'Copy-paste playbooks', us: 'Creative thinking, built for your brand' },
  { label: 'Decisions', them: 'Gut feel', us: 'Data-driven strategy, weekly reviews' },
  { label: 'Timelines', them: 'Slow revisions', us: 'Fast delivery, tight sprints' },
  { label: 'Stack', them: 'Legacy tools', us: 'Modern technology & automation' },
  { label: 'Support', them: 'Ticket queues', us: 'Dedicated point of contact' },
  { label: 'Reporting', them: 'Vanity metrics', us: 'Transparent, real-number reporting' },
  { label: 'Focus', them: 'Activity', us: 'Results-driven approach' },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.1fr] gap-14">
        <Reveal>
          <div className="eyebrow">Why Nirmora</div>
          <h2 className="font-display font-bold text-[30px] md:text-[42px] text-ink leading-tight">
            Agencies promise growth.
            <br />
            We <span className="grad-text">instrument</span> it.
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            Here's the honest difference between how most agencies operate and how we do.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-ink/12 rounded-xl2 overflow-hidden bg-white/50">
            <div className="grid grid-cols-[0.8fr_1.1fr_1.1fr] items-center px-5 py-4 bg-cream-deep/60 font-mono text-[12px]">
              <span></span>
              <span className="text-ink-dim">Typical Agency</span>
              <span className="text-gold-deep">Nirmora</span>
            </div>
            {ROWS.map((r) => (
              <div key={r.label} className="grid grid-cols-[0.8fr_1.1fr_1.1fr] items-center px-5 py-4 text-[13.5px] border-t border-ink/10">
                <span className="font-bold text-ink text-[13px]">{r.label}</span>
                <span className="text-ink-dim line-through decoration-ink/20">{r.them}</span>
                <span className="text-ink">{r.us}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
