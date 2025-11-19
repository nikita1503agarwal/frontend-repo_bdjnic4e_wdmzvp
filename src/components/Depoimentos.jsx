import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const depoimentos = [
  { name: 'Marina', role: 'Growth Lead', text: 'O curso mudou a forma como estruturamos campanhas — resultado em poucas semanas.' },
  { name: 'Carlos', role: 'Paid Media', text: 'Prático e direto. Escalamos ROI com frameworks aplicáveis no dia a dia.' },
  { name: 'Luiza', role: 'E-commerce', text: 'Material impecável e mentoria ativa. A comunidade é um diferencial.' },
  { name: 'Thiago', role: 'SEO Manager', text: 'Ganhei clareza e processos. Os templates salvam tempo e aumentam qualidade.' },
]

export default function Depoimentos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative bg-[#0b0f16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,165,89,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold sm:text-4xl">O que dizem nossos alunos</h2>
          <div className="hidden text-white/50 md:block">Ascendia</div>
        </div>

        {/* Auto-carousel */}
        <div ref={ref} className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={inView ? { x: ['0%', '-50%'] } : {}}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...depoimentos, ...depoimentos].map((d, i) => (
              <div
                key={i}
                className="relative w-[320px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm"
              >
                <p className="text-white/90">“{d.text}”</p>
                <div className="mt-4 text-sm text-white/60">
                  <span className="font-medium text-white">{d.name}</span> • {d.role}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 text-[20vw] font-extrabold uppercase tracking-tight text-white/5">Ascendia</div>
    </section>
  )
}
