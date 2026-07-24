import { useState } from 'react'
import Reveal, { RevealStagger, RevealItem } from './Reveal.jsx'
import aidz from '../assets/clients/Aidz.webp'
import urban from '../assets/clients/Urban.webp'
import bharat from '../assets/clients/Bharat.webp'
import bamboo from '../assets/clients/Bamboo.webp'
import omsai from '../assets/clients/Omsai.webp'
import palm from '../assets/clients/Palm.webp'
import astrelle from '../assets/clients/Astrelle.webp'
import soham from '../assets/clients/Soham.webp'
import datel from '../assets/clients/Datal.webp'

const FILTERS = ['All Work', 'Branding', 'Real Estate', 'FMCG & Industry']

const CASES = [
  {
    cats: ['branding'], logo: aidz, name: 'Didiz',
    desc: 'A precision measuring-tools brand with a mark that reads instantly at any size — from packaging to storefront signage.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'real'], logo: urban, name: 'Urban Aura Realty',
    desc: 'Full identity plus lead-generation campaigns for a modern urban real estate brand.',
    tag: 'Branding + Performance Marketing',
  },
  {
    cats: ['branding', 'real'], logo: bharat, name: 'Bharat Park',
    desc: 'A civic-scale identity built around a mark that had to work on wayfinding, print and digital in equal measure.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: bamboo, name: 'Bam&Boo',
    desc: 'Packaging-first identity for a natural baby-care brand, built to feel gentle on shelf and trustworthy at a glance.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: omsai, name: 'Om Sai Industries',
    desc: 'An industrial-manufacturing identity built for credibility across every touchpoint, from letterheads to plant signage.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: palm, name: 'SG Rebel Rise Global',
    desc: 'A 100% palm oil brand mark designed for shelf standout and food-safe trust, from label to export packaging.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: astrelle, name: 'Astrelle',
    desc: 'A soft-luxury sleepwear identity — a mark and palette designed to feel like a slow, sunlit morning.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: soham, name: 'Soham Enterprises',
    desc: 'A clean, trustworthy enterprise mark built to travel across invoices, signage and digital alike.',
    tag: 'Branding & Identity',
  },
  {
    cats: ['branding', 'fmcg'], logo: datel, name: 'Datel Enterprises',
    desc: 'A sharp, high-contrast enterprise mark built for instant recognition across product lines and paperwork alike.',
    tag: 'Branding & Identity',
  },
]

const filterKey = (f) => {
  if (f === 'Real Estate') return 'real'
  if (f === 'FMCG & Industry') return 'fmcg'
  return f.toLowerCase()
}

export default function Portfolio() {
  const [active, setActive] = useState('All Work')
  const visible = CASES.filter((c) => active === 'All Work' || c.cats.includes(filterKey(active)))

  return (
    <section id="work" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-[560px]">
            <div className="eyebrow">Selected Work</div>
            <h2 className="font-display font-bold text-[30px] md:text-[44px] text-ink leading-tight">
              Brands we&apos;ve built,<br />launched, and grown.
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] text-ink-soft md:text-right">
            A cross-section of identities and campaigns across real estate, industry, and consumer goods.
          </p>
        </Reveal>

        <div className="flex gap-2.5 flex-wrap mb-11">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full border text-[13px] font-semibold uppercase tracking-wide transition-all duration-250 ${
                active === f ? 'bg-ink text-cream border-ink' : 'bg-white/70 border-ink/15 text-ink-soft hover:border-gold'
              }`}>
              {f}
            </button>
          ))}
        </div>

        <RevealStagger key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((c) => (
            <RevealItem key={c.name} className="card-surface p-4 flex flex-col h-full min-h-[245px] transition-transform duration-400 hover:-translate-y-1.5">
              <div className="h-12 w-full flex items-center mb-6 overflow-hidden">
                <img src={c.logo} alt={`${c.name} logo`} className="max-h-12 max-w-full w-auto object-contain" />
              </div>
              <h3 className="font-display text-[18px] font-semibold text-ink mb-2">{c.name}</h3>
              <p className="text-[13.5px] leading-relaxed text-ink-soft flex-1">{c.desc}</p>
              <div className="mt-6 pt-4 border-t border-ink/10">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-gold-deep font-bold">{c.tag}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
