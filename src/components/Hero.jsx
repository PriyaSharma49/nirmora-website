import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Counter from './Counter.jsx'

function AuroraCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, points = []
    const COLORS = [[201, 162, 75], [140, 100, 53], [217, 181, 119]]
    const cols = 9, rows = 6

    function buildPoints() {
      points = []
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          points.push({
            bx: (i / cols) * w, by: (j / rows) * h,
            ox: (Math.random() - 0.5) * 60, oy: (Math.random() - 0.5) * 60,
            phase: Math.random() * Math.PI * 2,
            speed: 0.2 + Math.random() * 0.3,
            c: COLORS[Math.floor(Math.random() * COLORS.length)],
          })
        }
      }
    }
    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
      buildPoints()
    }
    window.addEventListener('resize', resize)
    resize()

    let t = 0
    let raf
    function draw() {
      t += 0.006
      ctx.clearRect(0, 0, w, h)
      for (const p of points) {
        p.x = p.bx + Math.sin(t * p.speed + p.phase) * p.ox
        p.y = p.by + Math.cos(t * p.speed + p.phase) * p.oy
      }
      ctx.lineWidth = 1
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const right = points[i + (rows + 1)]
        const down = points[i + 1]
        const dist = Math.min(1, 260 / (Math.hypot(p.x - w * 0.68, p.y - h * 0.35) + 1))
        const alpha = 0.04 + dist * 0.14
        ctx.strokeStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${alpha})`
        if (right) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(right.x, right.y); ctx.stroke() }
        if (down && (i + 1) % (rows + 1) !== 0) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(down.x, down.y); ctx.stroke() }
      }
      for (const p of points) {
        const dist = Math.min(1, 220 / (Math.hypot(p.x - w * 0.68, p.y - h * 0.35) + 1))
        if (dist > 0.3) {
          ctx.beginPath()
          ctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${0.5 * dist})`
          ctx.arc(p.x, p.y, 1.6 * dist + 0.5, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

const floatCardBase = 'card-surface p-5 w-[220px] shadow-soft absolute'

export default function Hero() {
  const stageRef = useRef(null)

  function handleMouseMove(e) {
    const stage = stageRef.current
    if (!stage) return
    const r = stage.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    stage.querySelectorAll('[data-float]').forEach((el, i) => {
      const depth = (i + 1) * 8
      el.style.transform = `translate(${x * depth}px, ${y * depth}px)`
    })
  }
  function handleMouseLeave() {
    stageRef.current?.querySelectorAll('[data-float]').forEach((el) => (el.style.transform = ''))
  }

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden">
      <AuroraCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 75% 20%, rgba(201,162,75,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(107,143,90,0.08), transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.85fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
        >
          <div className="eyebrow">Nirmora Creative &nbsp;·&nbsp; Est. Growth Lab</div>
          <h1 className="font-display font-bold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.08] tracking-tight text-ink">
            Marketing that <span className="grad-text">performs.</span>
            <br />
            Design that <span className="grad-text">endures.</span>
          </h1>
          <p className="mt-6 text-[18px] text-ink-soft max-w-[490px] leading-relaxed">
            Nirmora Creative is a full-stack digital agency turning fragmented brands into
            systems of growth — through influencer partnerships, performance media, CRM,
            social and websites built to convert, not just to look good.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#contact" className="btn btn-primary">
              Start a Project <ArrowRight size={15} />
            </a>
            <a href="#work" className="btn btn-ghost">
              See Our Work
            </a>
          </div>
          <div className="flex items-center gap-4 mt-12">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-cream -ml-2.5 first:ml-0"
                  style={{ background: `linear-gradient(135deg, hsl(${30 + i * 40} 65% 62%), hsl(${40 + i * 20} 55% 45%))` }}
                />
              ))}
            </div>
            <p className="text-[14px] text-ink-dim">
              <strong className="text-ink">30+ brands</strong> scaled across real estate, D2C, education &amp; retail
            </p>
          </div>
        </motion.div>

        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-[420px] lg:h-[520px]"
        >
          <div data-float className={`${floatCardBase} top-0 left-[6%] animate-[floatY_6s_ease-in-out_infinite]`}>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-ink-dim">
              <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" /> Engagement Campaign · Live
            </div>
            <div className="font-display font-extrabold text-[32px] mt-2 text-ink">
              <Counter value={541} />
            </div>
            <div className="text-[12.5px] text-ink-dim mt-1.5">Leads generated this cycle</div>
          </div>

          <div data-float className={`${floatCardBase} top-[42%] left-[36%] animate-[floatY_7s_ease-in-out_infinite_1s]`}>
            <div className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">Reach · 30 days</div>
            <div className="font-display font-extrabold text-[32px] mt-2 text-ink">
              <Counter value={173105} />
            </div>
            <div className="text-[12.5px] text-ink-dim mt-1.5">People reached across paid + organic</div>
          </div>

          <div data-float className={`${floatCardBase} top-[74%] left-[2%] !w-[190px] animate-[floatY_6.5s_ease-in-out_infinite_0.5s]`}>
            <div className="font-mono text-[11px] uppercase tracking-wide text-ink-dim">Profile Growth</div>
            <div className="font-display font-extrabold text-[32px] mt-2 text-ink">
              <Counter value={60} suffix="K+" />
            </div>
            <div className="text-[12.5px] text-ink-dim mt-1.5">Profile visits in a single quarter</div>
          </div>

          <div className="absolute w-[260px] h-[260px] rounded-full blur-[70px] opacity-40 -z-10 bg-gold top-[8%] right-[2%]" />
          <div className="absolute w-[220px] h-[220px] rounded-full blur-[70px] opacity-30 -z-10 bg-sage bottom-[2%] right-[18%]" />
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-ink-dim">
        <span className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
        Scroll
      </a>
    </section>
  )
}
