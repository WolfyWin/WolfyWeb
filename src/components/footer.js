import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { SocialIcon  } from './icon/icon'

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container className="pt-3 pb-4">
        <Row className="footer-row">
          <Col md={8} className="footer-copyright">
            <h3>© Copyright 2025 - WolfyWeb</h3>
          </Col>
          <Col md={4} className="footer-socials pt-2">
            <div className="social-icons">
              <SocialIcon className="footer-social-icons" href="https://github.com/WolfyWin" icon={AiFillGithub} hoverText="GitHub"/>
              <SocialIcon className="footer-social-icons" href="https://www.linkedin.com/in/rebeccatinchon/"icon={FaLinkedinIn} hoverText="LinkedIn" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export {Footer}
