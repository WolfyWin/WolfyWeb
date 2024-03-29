import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import funny from '../../assets/img/funny.webp'
import hobbies from '../../assets/img/hobbies.webp'
import logo from '../../assets/img/logo.webp'
import ripley from '../../assets/img/ripley.webp'
import space from '../../assets/img/space.svg'
import { ImStarEmpty } from 'react-icons/im'

const About = () => (
    <Container fluid className="about-section" id="about">

        <Container className="content">
            <div className="text-center">
                <h1 className="heading neon"> About me </h1>
            </div>

            <Row className="about-row">
              <Col md={7} className="mb-3 mb-md-0 order-2 order-md-1">
                    <Card className="quote-card-view">
                        <Card.Body className="blockquote mb-0">
                            <div className="about-card-body">
                                <p>
                                    Je m'appelle <span className="purple">Rébecca </span> et je vis en <span className="purple">Alsace</span>.
                                </p>
                                <p>
                                    Je suis une personne <span className="purple">passionnée</span>, curieuse, <span className="purple">débordante</span> d'idées et d'imagination 👩🏻‍🚀
                                </p>
                                <p>
                                    👾 Dans la vie j'aime :
                                </p>
                            </div>
                            <div className="about-card-list">
                                <ul>
                                    <li className="about-activity">
                                        <ImStarEmpty className="ImStarEmpty blue"/> Dessiner, lire.
                                    </li>
                                    <li className="about-activity">
                                        <ImStarEmpty className="ImStarEmpty blue"/> Le cinéma et les jeux vidéos.
                                    </li>
                                    <li className="about-activity">
                                        <ImStarEmpty className="ImStarEmpty blue"/> Le domaine de la santé mentale.
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className="px-5 about-img order-1 order-md-2">
                    <img src={funny} alt="about" className="about-funny img-fluid" />
                </Col>
            </Row>
            <Row className="about-row">
                <Col md={5} className="px-5 about-img order-1 order-md-1">
                    <img src={hobbies} alt="about" className="about-hobbies img-fluid" />
                </Col>
                <Col md={7} className="order-2 order-md-2" >
                    <Card className="quote-card-view">
                        <Card.Body className="blockquote mb-0">
                            <div className="about-card-body">
                                <p>
                                    Je suis une fervente admiratrice de <span className="purple">cinéma</span>, et plus particulièrement de <span className="purple">science-fiction</span>.
                                </p>
                                <p>
                                    Cet <span className="purple">univers</span> est pour moi une source d' <span className="purple">inspiration</span> inépuisable dans mon quotidien.
                                </p>
                                <p>
                                    Ma <span className="purple">curiosité</span> insatiable me pousse également à explorer les domaines de la <span className="purple">science</span>, de la <span className="purple">médecine</span>, de la <span className="purple">psychologie</span> et de la psychiatrie, ainsi que l'<span className="purple">astronomie</span>.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="about-row">
                <Col md={7} className="order-2 order-md-1">
                    <Card className="quote-card-view">
                        <Card.Body className="blockquote mb-0">
                            <div className="about-card-body">
                                <p>
                                    Je ne suis pas seulement <span className="purple">développeuse</span>. 
                                </p> 
                                <p>
                                    Depuis ma plus tendre enfance, je <span className="purple">dessine</span>, créant des univers qui reflètent ma <span className="purple">personnalité unique</span>. 
                                </p>
                                <p>
                                    Cette passion pour l'<span className="purple">art</span> s'est étendue au <span className="purple">design</span>, me permettant de réaliser mon propre <span className="purple">logo</span> et mon <span className="purple">site web</span>.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className="px-5 about-img order-1 order-md-2">
                    <img src={logo} alt="about" className="img-fluid" />
                </Col>
            </Row>
            <Row className="about-row">
                <Col md={5} className="px-5 about-img">
                    <img src={ripley} alt="about" className=" ripley img-fluid rounded-circle" />
                </Col>
                <Col md={7}>
                    <Card className="quote-card-view">
                        <Card.Body className="blockquote mb-0">
                            <div className="about-card-body">
                                <p>
                                    J'adore les <span className="purple">animaux </span>et je partage ma vie avec quatre <span className="purple">chats</span> et un <span className="purple">chien</span>.
                                </p>
                                <p>
                                    Mon <span className="purple">amour</span> pour eux m'a amenée à m'intéresser de près à la <span className="purple">nutrition animale</span>, un domaine que je trouve <span className="purple">fascinant</span>.
                                </p>
                                <blockquote>
                                    <p className="quote">
                                        ❝ <span className="purple">Je vous présente Ripley</span> ❞
                                    </p>
                                </blockquote>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="about-row">
                <Col md={7} className="order-2 order-md-1">
                    <Card className="quote-card-view">
                        <Card.Body className="blockquote mb-0">
                            <div className="about-card-body">
                                <p>
                                    J'ai une <span className="purple">particularité</span>, je suis <span className="purple">neuroAtypique</span>, mais cela ne m'empêche pas d'adorer apprendre des autres.
                                </p> 
                                <p>
                                    Chaque <span className="purple">interaction</span> est pour moi une occasion d'enrichir mes <span className="purple">connaissances</span> et de <span className="purple">comprendre</span> un peu plus le monde qui m'entoure.
                                </p>
                                <p>
                                    C'est assez <span className="purple">inhabituel</span> de parler de moi, mais voilà un aperçu de <span className="purple">qui je suis</span>.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className="px-5 about-img order-1 order-md-2">
                    <img src={space} alt="about" className="img-fluid" />
                </Col>
            </Row>
            <div className="mt-3 text-center">
              <Button variant="start glow-on-hover">
                <Link to={`/skills`}>
                  <h2 className="blue"> SKILLS </h2>
                </Link>
              </Button>
            </div>
        </Container>
    </Container>
)

export { About }
