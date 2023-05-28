import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MyAvatar } from './MyAvatar'
import { AnimatedIcon } from '../Anim/Animated'

const Home2 = () => {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className=" justify-content-between" >
            <Col xs={12} sm={12} md={5} lg={5}className="home-about-description mt-4 mb-4">
              <h1 className="about-heading">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Je suis quelqu'un de passionné, curieuse et débordante d'idées et d'imagination.
                <br />
                <br />
                J'ai suivi une <b className="purple">formation intensive</b> de trois mois en développement<b className="purple">PHP Symfony</b> à la Wild Code School, où j'ai devellopée une <b className="purple"> passion</b> indéfectible pour le code.
                <br />
                <br />
                Je suis désormais <b className="purple">développeuse fullstack</b> et je travaille actuellement avec <b className="purple">PHP, Symfony, Javascript, react et redux</b>.
              </p>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} className="myAvatar mt-4 mb-4">
              <MyAvatar />
              <div className="home-about-social">
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/WolfyWin"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AnimatedIcon icon={AiFillGithub} />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/rebeccatinchon/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AnimatedIcon icon={FaLinkedinIn} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export { Home2 }