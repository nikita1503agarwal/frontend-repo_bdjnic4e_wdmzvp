import { motion } from 'framer-motion'

const items = [
  { title: 'Foco em Resultados', desc: 'Metodologias orientadas a métricas e crescimento real.' },
  { title: 'Atualização Contínua', desc: 'Conteúdo vivo, alinhado com as mudanças do mercado.' },
  { title: 'Certificação Profissional', desc: 'Reconhecimento para acelerar sua carreira e propostas.' },
  { title: 'Suporte Especializado', desc: 'Mentoria e comunidade para tirar dúvidas e evoluir.' },
]

export default function WhyWorks() {
  return (
    <section className="relative bg-[#1a2230] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(73,85,121,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Por que nossos cursos funcionam?</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-[#FFA559]/60 transition-all duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start gap-4">
                {/* Futuristic icon (simple lines) */}
                <svg className="mt-1 h-8 w-8 text-[#FFA559]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" opacity="0.6" />
                  <path d="M7 12h10M12 7v10" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-white/70">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
