import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'
import Counter from './Counter.jsx'
import childrenday from '../assets/social/childrenday.webp'
import landdesign from '../assets/portfolio/landdesign.webp'
import succeed from '../assets/social/succeed.webp'
import time from '../assets/social/time.webp'
import socialMedia from '../assets/social/SocialMedia.webp'

const PIECES = [
  { img: childrenday, title: "Children's Day Creative", tag: 'Festive Post' },
  { img: landdesign, title: 'Project Launch Creative', tag: 'Real Estate' },
  { img: succeed, title: 'Brand Voice Content', tag: 'Engagement Post' },
  { img: time, title: 'Daily Content Series', tag: 'Engagement Post' },
]

export default function SocialWall() {
  return (
    <section id="social-wall" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-[560px]">
            <div className="eyebrow">Inside the Studio</div>
            <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink leading-tight">
              A few pieces from<br />the content calendar.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] text-ink-soft md:text-right">
            Festive creative, launch posts, and everyday content — designed to fit the feed and still look like the brand.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
          {PIECES.map((p) => (
            <RevealItem key={p.title} className="group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-cream-deep">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h4 className="font-display text-[14px] font-semibold text-ink mt-3 leading-snug">{p.title}</h4>
              <span className="font-mono text-[10px] uppercase tracking-wide text-gold-deep font-bold">{p.tag}</span>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="card-surface bg-cream-deep/50 grid grid-cols-1 md:grid-cols-[1.5fr_0.4fr] overflow-hidden">
            <div className="p-8 md:p-8">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-dim mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" /> Social Media Handling
              </div>
              <div className="font-display font-extrabold text-[40px] md:text-[52px] grad-text leading-none">
                <Counter value={218} suffix="K+" />
              </div>
              <p className="mt-3 max-w-[380px] text-[14.5px] text-ink-soft">
                Content views generated across Instagram through consistent, on-brand posting and audience-first content planning.
              </p>
              <p className="mt-2 text-[13px] font-semibold text-ink-dim">
                24 posts published · organic growth, no bought followers
              </p>
            </div>
            <div className="relative min-h-[100px] overflow-hidden">
              <img src={socialMedia} alt="Instagram content preview" className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
