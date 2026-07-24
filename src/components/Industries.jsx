import { Building2, ShoppingBag, GraduationCap, UtensilsCrossed, UserCircle2 } from 'lucide-react'
import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'

const INDUSTRIES = [
  { icon: Building2, label: 'Real Estate' },
  { icon: ShoppingBag, label: 'D2C & Retail' },
  { icon: GraduationCap, label: 'Education' },
  { icon: UtensilsCrossed, label: 'Food & Beverage' },
  { icon: UserCircle2, label: 'Personal Brands' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-[680px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center">Where We Create Impact</div>
          <h2 className="font-display font-bold text-[28px] md:text-[38px] text-ink leading-tight">
            Built for the industries
            <br />
            we know best.
          </h2>
        </Reveal>

        <RevealStagger className="flex flex-wrap justify-between gap-4">
          {INDUSTRIES.map(({ icon: Icon, label }) => (
            <RevealItem key={label} className="flex-1 min-w-[150px] flex flex-col items-center gap-4 text-center py-8 px-3.5 border border-ink/10 rounded-xl transition-all duration-300 hover:border-gold hover:-translate-y-1 hover:bg-white/70">
              <Icon size={30} className="text-gold-deep" strokeWidth={1.6} />
              <span className="text-[13.5px] font-semibold text-ink">{label}</span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
