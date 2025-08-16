
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        
        <Contact />
      </main>
  <Footer />
    </div>
  )
}
