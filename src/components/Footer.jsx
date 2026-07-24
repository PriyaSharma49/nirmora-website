import { Instagram, Linkedin } from 'lucide-react'
import markLogo from '../assets/brand/mark-logo.webp'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Influencer Marketing', href: '#services' },
      { label: 'Website Development', href: '#services' },
      { label: 'Performance Marketing', href: '#services' },
      { label: 'CRM Systems', href: '#services' },
      { label: 'Social Media Marketing', href: '#services' },
    ],
  },
  {
    title: 'Thought Leadership',
    links: [
      { label: 'Case Studies', href: '#work' },
      { label: 'Blog', href: '#' },
      { label: 'Guides', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 border-t border-white/10 bg-black">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">

          <div>
            <a href="#top" className="flex items-center gap-3">

              <span className="font-display font-bold text-[18px] tracking-[0.04em] text-[#D4AF37]">
                NIRMORA
              </span>
            </a>

            <p className="mt-4 max-w-[280px] text-[14px] text-white/70">
              A digital growth agency for brands that want proof, not promises.
            </p>

            <div className="flex gap-3 mt-6">
              {[Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>


          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">

              <h5 className="font-display text-[13px] tracking-wide uppercase text-[#D4AF37] mb-1">
                {col.title}
              </h5>

              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[14.5px] text-white/85 hover:text-[#D4AF37] transition-colors"
                >
                  {l.label}
                </a>
              ))}

            </div>
          ))}

        </div>


        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />


        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[13px] text-white/60">
          <span>
            © 2026 Nirmora Creative. All rights reserved.
          </span>

          <span>
            Designed &amp; built by the Nirmora studio.
          </span>
        </div>

      </div>
    </footer>
  )
}