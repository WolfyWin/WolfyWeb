import React, { useCallback, useState, useEffect } from 'react'
import Preloader from '../src/components/Pre'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Projects } from './components/Projets/Projects'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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


  const effect = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 200
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 0.5
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
  }

  return (
    <Router>
      <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <Particles id="tsparticles" options={effect} init={particlesInit} loaded={particlesLoaded} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  )
}

export default App
