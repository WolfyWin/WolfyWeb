import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Terminal } from '../Anim/Terminal'
import homeLogo from '../../Assets/img/hero.png'
import { Home2  }from './Home2'

const Home = () => {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello World !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🪐
                </span>
              </h1>
              <div className="writing-container">
                <Terminal/>
              </div>
            </Col>

            <Col md={5} className="home-image">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </>
  )
}

export {Home}
