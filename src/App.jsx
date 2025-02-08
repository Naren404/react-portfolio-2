import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import DarkModeSwitcher from './components/DarkModeSwitcher'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import RecentWorks from './components/RecentWorks'
import Skills from './components/Skills'
import Summary from './components/Summary'

function App() {
  return (
    <>
      <DarkModeSwitcher />

      <div className="wrapper-container">
        <Navbar />
        <Hero />
        <Summary />
        <Skills />
        <RecentWorks />
        <AboutMe />
        <Contact />
        <Footer />
        <GoToTop />
      </div>
    </>
  )
}

export default App
