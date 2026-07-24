import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CTABand() {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal>
          <div className="rounded-xl2 bg-ink text-cream px-8 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h3 className="font-display font-bold text-[26px] md:text-[34px] leading-tight max-w-[560px]">
              We partner to build the growth system behind your next stage.
            </h3>
            <a href="#contact" className="btn btn-gold !text-ink flex-none">
              Contact Us <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
