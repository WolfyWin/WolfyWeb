import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { BiPlanet } from 'react-icons/bi'
import { RxRocket } from 'react-icons/rx'
import { GiSamusHelmet } from 'react-icons/gi'
import { MdMailOutline } from 'react-icons/md'
import logo from '../assets/img/logo.png'
import { debounce } from 'lodash'

const useScrollHandler = (handler, delay) => {
    const debouncedHandler = useMemo(() => debounce(handler, delay), [handler, delay])

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandler);
        return () => window.removeEventListener('scroll', debouncedHandler)
    }, [debouncedHandler])
}

const NavItem = ({ to, icon: Icon, children, closeMenu }) => {
  return (
      <span>
          <Nav.Link as={Link} to={to} className="nav-link-custom" onClick={closeMenu}>
              <Icon className="nav-icon" />
              <span className="nav-text">{children}</span>
          </Nav.Link>
      </span>
  )
}

const NavItemNoLink = ({ icon: Icon, children }) => {
  return (
      <span className="nav-link-custom">
          <Icon className="nav-icon" />
          <span className="nav-text">{children}</span>
      </span>
  )
}

const NavBar = () => {
    const [navColour, setNavColour] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    
    const location = useLocation()

    const scrollHandler = useCallback(() => { setNavColour(window.scrollY >= 20) }, [])

    useScrollHandler(scrollHandler, 200)

    const closeMenu = () => { setIsOpen(false) }


    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className={navColour ? 'sticky' : 'navbar'} onToggle={() => setIsOpen(!isOpen)} expanded={isOpen}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey={location.pathname}>
                        <Nav.Item>
                            <NavItem to="/" icon={BiPlanet} closeMenu={closeMenu}>Home</NavItem>
                        </Nav.Item>

                        <NavDropdown title={<NavItemNoLink icon={GiSamusHelmet}>À propos</NavItemNoLink>}>
                            <NavDropdown.Item as={Link} to="/about" onClick={closeMenu}>Qui suis-je</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Competency" onClick={closeMenu}>Mes compétences</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title={<NavItemNoLink icon={RxRocket}>Projets</NavItemNoLink>}>
                            <NavDropdown.Item as={Link} to="/project" onClick={closeMenu}>Web</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <NavItem to="/contact" icon={MdMailOutline} closeMenu={closeMenu}>Contact</NavItem>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavBar }
