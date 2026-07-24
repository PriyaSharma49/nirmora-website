import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'
import imgInfluence from '../assets/services/InfluenceMarketing.webp'
import imgWeb from '../assets/services/WebDevelopment.webp'
import imgPerformance from '../assets/services/PerformanceMarketing.webp'
import imgCRM from '../assets/services/CustomerRelationship.webp'
import imgSocial from '../assets/services/SocialmediaMarketing.webp'

const SERVICES = [
  {
    idx: '01',
    img: imgInfluence,
    title: 'Influencer Marketing',
    desc: 'We connect brands with the right creators — not the biggest ones — to build reach, trust and engagement that converts into real sales.',
  },
  {
    idx: '02',
    img: imgWeb,
    title: 'Website Development',
    desc: 'Modern, responsive, SEO-friendly websites and web apps engineered for performance, speed and a user experience that holds attention.',
  },
  {
    idx: '03',
    img: imgPerformance,
    title: 'Performance Marketing',
    desc: 'ROI-focused paid campaigns across Google, Meta and LinkedIn — built around measurable growth, not impressions.',
  },
  {
    idx: '04',
    img: imgCRM,
    title: 'CRM Systems',
    desc: 'We implement CRM workflows that automate lead management, streamline follow-ups and strengthen every customer relationship.',
  },
  {
    idx: '05',
    img: imgSocial,
    title: 'Social Media Marketing',
    desc: 'Creative content, strategy and community management that builds a brand presence people actually want to follow.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-[680px] mb-14">
          <div className="eyebrow">What We Do</div>
          <h2 className="font-display font-bold text-[26px] md:text-[36px] text-ink leading-tight">
            Five disciplines.
            <br />
            One growth system.
          </h2>
          <p className="mt-3 text-[15px] text-ink-soft">
            Every service is built to plug into the others — creative feeds performance,
            performance feeds CRM, CRM feeds retention. Pick one, or run the full stack.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SERVICES.map((s) => (
            <RevealItem
              key={s.idx}
              className="group [perspective:1200px] h-[280px]"
              >
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden border border-ink/10"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className="absolute top-3 right-3 font-mono text-[10px] text-white/70">{s.idx}</span>
                  <h3 className="absolute bottom-3 left-3 right-3 font-display text-[18px] font-semibold text-white leading-snug">
                    {s.title}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl border border-ink/10 bg-white p-4 flex flex-col justify-center [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="font-mono text-[10px] text-ink-dim opacity-60 mb-1.5">{s.idx}</span>
                  <h3 className="font-display text-[13.5px] font-semibold text-ink mb-1.5 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[11.5px] text-ink-soft leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}