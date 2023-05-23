import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import Preloader from './components/Anim/Pre'
import { particlesConfig } from './components/Anim/Particles'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { AboutMe } from './components/About/Me'
import { Projects } from './components/Projets/Projects'
import { Design } from './components/Projets/Design/Design'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function App() {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadFull(engine);
  }, [])

  const particlesLoaded = useCallback(async container => {
      console.log(container);
  }, [])

  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const effect = useMemo(() => particlesConfig, [])

  return (
    <Router>
      <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <Particles id="tsparticles" options={effect} init={particlesInit} loaded={particlesLoaded} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/design" element={<Design />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  )
}

export default App
