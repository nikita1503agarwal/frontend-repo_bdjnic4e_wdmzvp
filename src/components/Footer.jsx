export default function Footer() {
  return (
    <footer className="relative bg-black py-12 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(255,165,89,0.2),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10">
        <div className="text-xl font-bold tracking-wide">Ascendia</div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          {['Cursos', 'Blog', 'Quem Somos', 'Contato'].map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-[#FFA559]">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {['twitter', 'linkedin', 'instagram'].map((s) => (
            <a key={s} href="#" className="group relative">
              <span className="absolute -inset-2 rounded-full bg-[#FFA559]/0 blur transition-colors group-hover:bg-[#FFA559]/20" />
              <svg className="relative h-5 w-5 text-white/80 transition-colors group-hover:text-[#FFA559]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Ascendia. Todos os direitos reservados.</div>
    </footer>
  )
}
