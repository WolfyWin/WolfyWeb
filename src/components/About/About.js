import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Techstack } from './Techstack'
import { Toolstack } from './Toolstack'
import { AboutCard  }from'./AboutCard'

import working from '../../Assets/img/working.jpg'

const SectionTitle = ({ children }) => (
  <h1 className="project-heading">
    <strong className="purple">{children}</strong>
  </h1>
)

const About = () => (
  <Container fluid className="about-section">
    <Container>
      <Row className="justify-content-center align-items-center py-3 pt-5 mt-5">
        <Col md={7} className="px-3">
          <AboutCard />
        </Col>
        <Col md={5} className="py-5 about-img">
          <img src={working} alt="about" className="about-working img-fluid rounded-circle" />
        </Col>
      </Row>
      <SectionTitle>Compétences</SectionTitle>
      <Techstack />
      <SectionTitle>Outils</SectionTitle>
      <Toolstack />
      <SectionTitle>Certifications & Training</SectionTitle>
    </Container>
  </Container>
)

export { About }
