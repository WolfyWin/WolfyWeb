import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Writing } from './Writing'
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
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🪐
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Rebecca</strong>
              </h1>
              <div className="writing-container">
                <Writing/>
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
