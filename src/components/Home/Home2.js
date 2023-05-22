import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MyAvatar } from './MyAvatar'
import { AnimatedIcon } from '../Animated'

const Home2 = () => {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={7} lg={7} className="home-about-description mt-4 mb-4">
              <h1 className="about-heading">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                Je suis quelqu'un de passionné, curieuse et débordante d'idées et d'imagination.
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> C++, Javascript and Python. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Deep Learning and Natural Language Processing.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
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