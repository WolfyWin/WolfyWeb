import React, { useCallback, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ScrollToTop from './components/ScrollToTop'
import { Preloader, particlesConfig, NavBar, Home, Competency, About, Projects, ProjectDetails, Contact, Footer} from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  const initializeParticles = useCallback(async engine => {
      await loadFull(engine);
  }, [])

  const handleParticlesLoaded = useCallback(async () => {
  }, []);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <Preloader load={isLoading} />
      <div className="App" id={isLoading ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Particles id="tsparticles" options={particlesConfig} init={initializeParticles} loaded={handleParticlesLoaded} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Competency" element={<Competency />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project-details/:title" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
