import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import working from '../../Assets/img/working.jpg'

const SectionTitle = ({ children }) => (
    <h2 className="mt-3 mb-3">{children}</h2>
)

const AboutMe = () => (
    <Container fluid className="home-section" id="aboutMe">
        <Container className="home-content">
            <h1 className="text-center">
                - About <strong className="purple">Me</strong>
            </h1>
            <Row className=" justify-content-between" >
                <Col xs={12} sm={12} md={7} lg={7} className="bloc-text mt-4 mb-4">
                    <p>
                        Je m'apelle Rébecca et je suis une développeuse full stack passionnée.
                        J'ai suivi une formation intensive de trois mois en développement PHP Symfony à la Wild Code School, où j'ai devellopée une passion indéfectible pour le code.
                        Mais je ne suis pas seulement une développeuse.
                        Depuis ma plus tendre enfance, je dessine, créant des univers qui reflètent ma personnalité.
                        Cette passion pour l'art s'est étendue au design, me permettant de réaliser mon propre logo et mon site web, des créations qui allient technicité et esthétique.
                        Je suis une fervente admiratrice du cinéma, et plus particulièrement de science-fiction. Cet univers est une source d'inspiration inépuisable pour moi. 
                        Ma curiosité insatiable me pousse également à explorer les domaines de la science, de la médecine, de la psychologie et de la psychiatrie, ainsi que l'astronomie.
                        Je suis autiste, mais cela ne m'empêche pas d'adorer apprendre des autres. Chaque interaction est pour moi une occasion d'enrichir mes connaissances et de comprendre un peu plus le monde qui m'entoure.
                        J'adore les animaux, et je partage ma vie avec quatre chats et un chien. Ma passion pour eux m'a amenée à m'intéresser de près à la nutrition animale, un domaine fascinant qui allie science et bien-être.
                        Enfin, le maquillage est pour moi une forme d'art qui permet de se transformer et donne l'impression d'être quelqu'un d'autre, de plus fort. C'est une expression de soi qui, tout comme le code, nécessite précision et créativité.
                        Voilà un aperçu de qui je suis. N'hésitez pas à explorer mon site pour en savoir plus sur mon travail et mes passions
                    </p>
                </Col>
                <Col md={4} className="py-5 about-img">
                    <img src={working} alt="about" className="about-working img-fluid rounded-circle" />
                </Col>
            </Row>
            <Row className=" justify-content-between" >
                <div className="mt-5">
                    <h2 className="text-center">
                        - Blala <strong className="purple">...</strong>
                    </h2>
                    <Row className="mb-3">
                        <Col md={4} className="py-5 about-img">
                            <img src={working} alt="about" className="about-working img-fluid" />
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={7} className="bloc-text mt-4 mb-4">
                            <h4>React JS</h4>
                            <p>Développement d'applications robustes et performantes avec React JS et Redux.</p>
                        </Col>
                    </Row>
                    <Row className="mb-3 justify-content-between">
                        <Col xs={12} sm={12} md={7} lg={7} className="bloc-text mt-4 mb-4">
                            <h4>Base de données</h4>
                            <p>Gestion de bases de données SQL et NoSQL, y compris MySQL, MongoDB et Firebase.</p>
                        </Col>
                        <Col md={4} className="py-5 about-img">
                            <img src={working} alt="about" className="about-working img-fluid" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={4} className="py-5 about-img">
                            <img src={working} alt="about" className="about-working img-fluid" />
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={7} className="bloc-text mt-4 mb-4">
                            <h4>Base de données</h4>
                            <p>Gestion de bases de données SQL et NoSQL, y compris MySQL, MongoDB et Firebase.</p>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>
  </Container>
)

export { AboutMe }
