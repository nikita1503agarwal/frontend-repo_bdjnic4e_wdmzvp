import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const ROTATING_WORDS = [
  'Estratégia',
  'Resultados',
  'Crescimento',
  'Performance',
  'Domínio',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Parallax transforms for subtle layered depth
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 60])
  const yMed = useTransform(scrollYProgress, [0, 1], [0, 120])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])

  const rotatingWord = useMemo(() => ROTATING_WORDS[index], [index])

  const scrollToCourses = () => {
    const el = document.getElementById('cursos')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(255,165,89,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-6 sm:px-10">
        <motion.div style={{ y: ySlow }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60 backdrop-blur">
            Ascendia • Educação em Marketing Digital
          </span>
        </motion.div>

        <motion.h1
          style={{ y: yMed }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: 'easeOut' }}
          className="mt-6 max-w-4xl text-left text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl"
        >
          Elevamos sua performance digital com conhecimento que transforma
          <br />
          <span className="mt-3 inline-block bg-gradient-to-r from-[#FFA559] via-white to-[#495579] bg-clip-text text-transparent">
            {rotatingWord}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 max-w-xl text-left text-base text-white/80 sm:text-lg"
        >
          Aprenda com especialistas em um ambiente imersivo, com projetos reais, frameworks atuais e foco absoluto em resultados.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-10">
          <button
            onClick={scrollToCourses}
            className="group relative inline-flex items-center gap-3 rounded-xl bg-[#FFA559] px-6 py-3 text-black transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none"
          >
            <span className="absolute inset-0 -z-0 rounded-xl opacity-70 blur-xl" style={{ background: 'radial-gradient(closest-side, #FFA559, transparent)' }} />
            <span className="relative z-10 font-semibold tracking-wide">Explorar Cursos</span>
            <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Subtle floating orbs for depth */}
      <motion.div style={{ y: ySlow }} className="pointer-events-none absolute right-10 top-24 h-32 w-32 rounded-full bg-[#495579]/20 blur-2xl" />
      <motion.div style={{ y: yMed }} className="pointer-events-none absolute bottom-16 left-10 h-24 w-24 rounded-full bg-[#FFA559]/20 blur-xl" />
    </section>
  )
}
