import Hero from './components/Hero'
import Cursos from './components/Cursos'
import WhyWorks from './components/WhyWorks'
import Depoimentos from './components/Depoimentos'
import Sobre from './components/Sobre'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Cursos />
      <WhyWorks />
      <Depoimentos />
      <Sobre />
      <Footer />
    </div>
  )
}

export default App
