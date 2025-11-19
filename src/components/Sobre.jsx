import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Sobre() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="relative bg-[#ECECEC] py-24 text-[#0b0f16]">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Sobre a Ascendia</h2>
            <p className="mt-4 text-lg text-slate-700">
              Capacitamos profissionais em Marketing Digital através de cursos práticos, atualizados e focados em performance real.
            </p>
          </div>

          <div className="relative">
            <motion.div style={{ x }} className="h-48 w-full rounded-2xl bg-gradient-to-r from-[#FFA559] to-[#495579] opacity-80 blur-md" />
            <div className="absolute inset-0 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-black/5 bg-white/60 p-6 shadow-2xl backdrop-blur">
                <div className="h-8 w-8 rounded bg-[#FFA559]" />
                <p className="mt-3 text-sm text-slate-700">Frameworks práticos</p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white/60 p-6 shadow-2xl backdrop-blur">
                <div className="h-8 w-8 rounded bg-[#27374D]" />
                <p className="mt-3 text-sm text-slate-700">Projetos reais</p>
              </div>
              <div className="rounded-xl border border-black/5 bg-white/60 p-6 shadow-2xl backdrop-blur">
                <div className="h-8 w-8 rounded bg-[#495579]" />
                <p className="mt-3 text-sm text-slate-700">Mentoria ativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
