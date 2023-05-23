import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { SiReactos } from 'react-icons/si'
import { RiRocketLine } from 'react-icons/ri'
import { BsRobot } from 'react-icons/bs'
import logo from '../Assets/img/logo.png'
import { debounce } from 'lodash'

const useScrollHandler = (handler, delay) => {
  const debouncedHandler = useMemo(() => debounce(handler, delay), [handler, delay])

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandler);
    return () => window.removeEventListener('scroll', debouncedHandler)
  }, [debouncedHandler])
}

const NavItem = ({ to, icon: Icon, children }) => {
  return (
    <span>
      <Nav.Link as={Link} to={to} className="nav-link-custom">
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
  const location = useLocation()

  const scrollHandler = useCallback(() => {
    setNavColour(window.scrollY >= 20)
  }, [])

  useScrollHandler(scrollHandler, 200)


  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={navColour ? 'sticky' : 'navbar'} >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey={location.pathname}>
            <Nav.Item>
              <NavItem to="/" icon={SiReactos}>Home</NavItem>
            </Nav.Item>

            <NavDropdown title={<NavItemNoLink icon={BsRobot}>À propos</NavItemNoLink>}>
              <NavDropdown.Item as={Link} to="/aboutme">Qui suis-je</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Mes compétences</NavDropdown.Item>
            </NavDropdown>
               
            <NavDropdown title={<NavItemNoLink icon={RiRocketLine}>Projets</NavItemNoLink>}>
              <NavDropdown.Item as={Link} to="/project">Développement Web</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/design">Design</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <NavItem to="/contact" icon={BsRobot}>Contact</NavItem>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavBar }