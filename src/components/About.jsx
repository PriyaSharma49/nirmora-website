import Reveal from './Reveal.jsx'

const VALUES = [
  { title: 'Mission', desc: 'Turn every rupee of marketing spend into a measurable, repeatable growth loop.' },
  { title: 'Vision', desc: "Become the growth infrastructure of choice for India's next generation of brands." },
  { title: 'Values', desc: 'Data over opinion. Craft over templates. Transparency over vanity metrics.' },
]

const TIMELINE = [
  { year: '2022', title: 'Nirmora is founded', desc: 'Started as a two-person branding & creative desk working with local D2C founders.' },
  { year: '2023', title: 'Performance wing launches', desc: 'Built a dedicated paid-media team across Meta, Google & LinkedIn.' },
  { year: '2024', title: 'CRM & web development', desc: 'Added technology capability — CRM systems and conversion-first websites.' },
  { year: '2026', title: '30+ brands scaled', desc: 'Now an embedded growth partner across real estate, education, D2C & retail.' },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
        <Reveal>
          <div className="eyebrow">About Nirmora</div>
          <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink leading-tight">
            We build the systems
            <br />
            behind brands that <span className="grad-text">scale.</span>
          </h2>
          <p className="mt-5 text-[16.5px] text-ink-soft">
            Nirmora began as a two-person creative desk solving one problem: brands were
            spending on marketing without a system to compound it. Today we operate as an
            embedded growth partner — branding, content, performance media and the
            technology to hold it all together — for founders who want proof, not promises.
          </p>
          <div className="flex flex-col gap-5 mt-9">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h4 className="font-display text-[16px] text-gold-deep font-semibold mb-1">{v.title}</h4>
                <p className="text-[14.5px] text-ink-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-l border-ink/15 pl-8 flex flex-col gap-11">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-[42px] top-1 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(201,162,75,0.18)]" />
                <span className="font-mono text-[13px] text-sage tracking-wide">{t.year}</span>
                <h4 className="font-display text-[19px] text-ink font-semibold mt-2">{t.title}</h4>
                <p className="text-[14.5px] text-ink-soft mt-1.5">{t.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
