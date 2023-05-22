import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { SiReactos } from 'react-icons/si'
import { RiRocketLine } from 'react-icons/ri'
import { BsRobot } from 'react-icons/bs'
import { animated } from 'react-spring'
import logo from '../Assets/img/logo.png'
import { debounce } from 'lodash'

const useScrollHandler = (handler, delay) => {
  const debouncedHandler = useMemo(() => debounce(handler, delay), [handler, delay]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandler);
    return () => window.removeEventListener('scroll', debouncedHandler)
  }, [debouncedHandler])
}

const NavItem = ({ to, icon: Icon, children, onClick }) => {
  return (
    <Nav.Item>
      <Nav.Link as={animated(Link)} to={to} onClick={onClick}className="nav-link-custom">
        <Icon className="nav-icon" />
        <span className="nav-text">{children}</span>
      </Nav.Link>
    </Nav.Item>
  )
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
  >
    {children}
  </div>
))

const NavBar = () => {
  const [expand, setExpand] = useState(false)
  const [navColour, setNavColour] = useState(false)
  const location = useLocation()

  const scrollHandler = useCallback(() => {
    setNavColour(window.scrollY >= 20)
  }, [])

  useScrollHandler(scrollHandler, 200)

  const navLinkOnClick = () => setExpand(false)

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(!expand)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey={location.pathname}>
            <NavItem to="/" icon={SiReactos} onClick={navLinkOnClick}>Home</NavItem>
            <NavItem to="/about" icon={BsRobot} onClick={navLinkOnClick}>About</NavItem>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <NavItem to="#" icon={RiRocketLine} onClick={navLinkOnClick}>Projets</NavItem>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item as={Link} to="/project" className="dropdown-item-custom">Développement Web</Dropdown.Item>
                <Dropdown.Item as={Link} to="/design" className="dropdown-item-custom">Design</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <NavItem to="/contact" icon={BsRobot} onClick={navLinkOnClick}>Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export { NavBar }