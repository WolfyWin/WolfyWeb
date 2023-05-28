import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Terminal } from '../anim/terminal'
import homeLogo from '../../assets/img/hero.png'
import { Home2  }from './home2'

const Home = () => {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading neon">
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
