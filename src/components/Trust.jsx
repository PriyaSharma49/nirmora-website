import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'
import Counter from './Counter.jsx'
import urban from '../assets/clients/Urban.webp'
import datal from '../assets/clients/Datal.webp'
import soham from '../assets/clients/Soham.webp'
import omsai from '../assets/clients/Omsai.webp'
import bharat from '../assets/clients/Bharat.webp'
import bamboo from '../assets/clients/Bamboo.webp'
import astrelle from '../assets/clients/Astrelle.webp'
import aidz from '../assets/clients/Aidz.webp'

const LOGOS = [urban, datal, soham, omsai, bharat, bamboo, astrelle, aidz]

const STATS = [
  { value: 30, suffix: '+', label: 'Brands Scaled' },
  { value: 500, suffix: '+', label: 'Leads / Campaign' },
  { value: 2, suffix: '', label: 'Lakh+ Monthly Reach' },
  { value: 4, suffix: '+', label: 'Years in Craft' },
]

export default function Trust() {
  return (
    <section id="trust" className="py-16 border-y border-ink/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal>
          <p className="text-center text-[13px] text-ink-dim mb-10">
            Trusted by growing brands across real estate, D2C, education &amp; retail
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex items-center gap-16 w-max animate-[scrollX_34s_linear_infinite]">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
             <img 
             key={i} 
             src={logo} 
             alt="Client logo" 
             className="h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300" 
/>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-5 mt-14">
          {STATS.map((s, i) => (
            <RevealItem key={s.label} className={`text-center px-3 ${i !== 0 ? 'md:border-l border-ink/10' : ''}`}>
              <div className="font-display font-extrabold text-[30px] md:text-[42px] grad-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <span className="text-[13px] text-ink-dim">{s.label}</span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
