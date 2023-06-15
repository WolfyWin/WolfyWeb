import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Terminal } from '../anim/terminal'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { MyAvatar } from '../anim/myAvatar'
import { SocialIcon  } from '../icon/icon'

const Home = () => {
    return (
        <>
            <Container fluid className="home-section" id="home">
                <Container className="content">
                    <div className="home-header text-center">
                            <h1 className="heading neon">  Hello World !</h1>
                            <span className="wave" role="img" aria-labelledby="wave">
                                🪐
                            </span>
                    </div>
                    <div className="home-description mt-5 mb-4">
                        <h2 className="home-description-title purple">
                            ★ Bienvenue sur mon portfolio ! ★
                        </h2>
                        <p className="home-description-body">
                            Je suis Rébecca, <b className="purple">développeuse web</b> fullstack et votre <b className="purple">commandant de bord</b> pour cette visite.
                        </p>
                        <p className="home-description-body">
                            Ici, vous découvrirez les galaxies de mon <b className="purple">travail</b>, les étoiles de mes <b className="purple">projets</b> et les constellations de mes <b className="purple">compétences</b> techniques.
                        </p>
                        <p className="home-description-body">
                            Alors, <b className="purple">installez-vous</b>, attachez votre ceinture et préparez-vous au <b className="purple">décollage</b>. 
                        </p>
                        <p className="home-description-body">
                            Vous êtes sur le point de <b className="purple">voyager</b> à travers mon univers !
                        </p>
                    </div>
                </Container>
            </Container>

            <Container fluid className="home-about-section" id="about">
                <Container>
                    <Row className="justify-content-between pt-3 pb-3">
                        <Col md={6} className="home-terminal">
                            <div className="writing-container">
                                <Terminal/>
                            </div>
                            <div className="mt-3">
                                <Button variant="start glow-on-hover" href="/about">
                                    <h2 className="blue"> START </h2>
                                </Button>
                            </div>
                        </Col>
                        <Col md={6} className="home-image">
                            <MyAvatar />
                            <div className="home-about-social">
                                <SocialIcon className="home-social-icons mx-2" href="https://github.com/WolfyWin" icon={AiFillGithub} hoverText="GitHub"/>
                                <SocialIcon className="home-social-icons mx-2" href="https://www.linkedin.com/in/rebeccatinchon/" icon={FaLinkedinIn} hoverText="LinkedIn"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export {Home}
