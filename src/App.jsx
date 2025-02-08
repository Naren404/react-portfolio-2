import { Route, Routes } from 'react-router'
import './App.css'
import DarkModeSwitcher from './components/DarkModeSwitcher'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
      <DarkModeSwitcher />
      
      <div className="wrapper-container">
        <Navbar />
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/skills' element={<SkillsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

        <Footer />
        <GoToTop />
      </div>
    </>
  )
}

export default App
