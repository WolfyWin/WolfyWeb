import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap'
import { Techstack, Toolstack } from './stack'
import { ImStarEmpty } from 'react-icons/im'

import working from '../../assets/img/working.jpg'

const About = () => (
  <Container fluid className="about-section" id="competences">
    <Container>
      <Row className="justify-content-center align-items-center py-3 pt-5 mt-5">
        <Col md={7} className="px-3">
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h1 className="text-center">
                  - About <strong className="purple">Me</strong>
                </h1>
                <br />
                <p className="about-card-body">
                  Je m'appelle <span className="purple">Rébecca </span> et je vis en <span className="purple">Alsace</span>.
                  <br />
                  <br />
                  👩🏻‍🚀 Je suis une personne <span className="purple">passionnée</span>, curieuse, <span className="purple">débordante</span> d'idées et d'imagination.
                  <br />
                  <br />
                  👾 Dans la vie j'aime :
                </p>
                <ul>
                  <li className="about-activity">
                    <ImStarEmpty /> Dessiner, lire.
                  </li>
                  <li className="about-activity">
                    <ImStarEmpty /> Le cinéma et les jeux vidéos.
                  </li>
                  <li className="about-activity">
                    <ImStarEmpty /> Le domaine de la santé mentale.
                  </li>
                </ul>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="py-5 about-img">
          <img src={working} alt="about" className="about-working img-fluid rounded-circle" />
        </Col>
      </Row>
      <div className="details">
        <h2 className="details-heading neon">Compétences</h2>
          <Techstack />
        <h2 className="details-heading neon">Outils</h2>
          <Toolstack />
      </div>
    </Container>
  </Container>
)

export { About }
