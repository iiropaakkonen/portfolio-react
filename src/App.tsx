import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechBand from './components/TechBand'
import Footer from './components/Footer'
import FadeIn from './components/FadeIn'

function App() {

  return (
    <>
    <div className="bg-white dark:bg-gray-900">
      <Header/>
      <FadeIn>
      <Hero/>
      <TechBand/>
      <Projects/>
      <Contact/>
      </FadeIn>
      <Footer/>
    </div>
    </>
  )
}

export default App
