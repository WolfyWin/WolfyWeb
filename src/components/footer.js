import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithubAlt } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'

const Footer = () => {
  const year = new Date().getFullYear()

  const SocialIcon = ({ href, children }) => (
    <li className="social-icons">
      <a
        href={href}
        style={{ color: 'white' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  )

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Designé et développé par Rébecca Tinchon</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>© {year} WolfyWeb</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <SocialIcon href="https://github.com/WolfyWin"><FaGithubAlt /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/rebeccatinchon/"><SiLinkedin /></SocialIcon>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export {Footer} 
