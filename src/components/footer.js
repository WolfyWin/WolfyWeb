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
            <Container className="pt-3 pb-4">
                <Row>
                    <Col md={6} className="footer-copywright">
                        <h3>© Copyright {year} - WolfyWeb</h3>
                    </Col>
                    <Col md={6} className="footer-icons pt-2">
                        <SocialIcon href="https://github.com/WolfyWin"><FaGithubAlt /></SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/rebeccatinchon/"><SiLinkedin /></SocialIcon>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export {Footer} 
