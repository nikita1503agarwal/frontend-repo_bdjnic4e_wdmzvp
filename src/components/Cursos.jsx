import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const cursos = [
  { title: 'SEO & Otimização', desc: 'Domine técnicas modernas de ranqueamento e análise.', color: '#27374D' },
  { title: 'Marketing em Redes Sociais', desc: 'Construa marcas memoráveis e campanhas que convertem.', color: '#495579' },
  { title: 'E-mail Marketing Avançado', desc: 'Automação, segmentação e copy com alta performance.', color: '#27374D' },
  { title: 'Google Ads & Tráfego Pago', desc: 'Escale resultados com mídia paga e otimização contínua.', color: '#495579' },
]

export default function Cursos() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const smooth = useSpring(y, { stiffness: 80, damping: 20 })

  return (
    <section id="cursos" ref={ref} className="relative bg-[#27374D] py-24 text-white">
      {/* Parallax background layer */}
      <motion.div style={{ y: smooth }} className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#FFA559] blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-[#495579] blur-[120px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Cursos em Destaque</h2>
          <p className="mt-3 max-w-2xl text-white/70">Conteúdos práticos, atualizados e orientados a performance real.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cursos.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(140deg, ${c.color}33, transparent)` }} />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#FFA559]">
                  <span className="text-sm font-medium">Ver detalhes</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
