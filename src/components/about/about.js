import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import funny from '../../assets/img/funny.webp'
import hobbies from '../../assets/img/hobbies.webp'
import logo from '../../assets/img/logo.webp'
import ripley from '../../assets/img/ripley.webp'
import space from '../../assets/img/space.svg'

const About = () => (
  <Container fluid className="about-section">
    <Container className="content">
      <div className="text-center">
        <h1 className="heading neon"> About me </h1>
      </div>
      <Row className="about-row">
        <Col md={7} className="mb-3 mb-md-0 order-2 order-md-1">
          <Card className="quote-card-view">
            <Card.Body>
              <h3 className="about-card-title">
                ✨ <span className=" blue"> Qui suis-je ?</span>
              </h3>
              <div className="about-card-body">
                <p>
                  Je m'appelle <span className="purple">Rébecca </span> et je vis en <span className="purple">Alsace</span>.
                </p>
                <p>
                  Je suis une personne <span className="purple">passionnée</span>, curieuse, <span className="purple">débordante</span> d'idées et d'imagination 👩🏻‍🚀
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="px-5 about-img order-1 order-md-2">
          <img src={funny} alt="about" className="about-funny img-avatar"/>
        </Col>
      </Row>
      <Row className="about-row">
        <Col md={5} className="px-5 about-img order-1 order-md-1">
          <img src={hobbies} alt="about" className="about-hobbies img-fluid"/>
        </Col>
        <Col md={7} className="order-2 order-md-2">
          <Card className="quote-card-view">
            <Card.Body>
              <h3 className="about-card-title">
                👾 <span className=" blue"> Ce que j’aime dans la vie </span>
              </h3>
              <div className="about-card-body">
                <p>
                  <span className="purple">Dessiner</span>, le <span className="purple">cinéma</span>, les <span className="purple">jeux vidéo</span>, et explorer tout ce qui touche à <span className="purple">la santé mentale</span>.
                </p>
                <p>
                  Je suis une grande amatrice de cinéma, et plus particulièrement de <span className="purple">science-fiction</span>.
                </p>
                <p>
                  Ma <span className="purple">curiosité insatiable</span> me pousse aussi à explorer des domaines aussi vastes que la <span className="purple">science</span>, la <span className="purple">médecine</span>, la <span className="purple">psychologie</span> … et même <span className="purple">l’astronomie</span>. 🌌
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="about-row">
        <Col md={7} className="order-2 order-md-1">
          <Card className="quote-card-view">
            <Card.Body>
              <h3 className="about-card-title">
                👩🏻‍💻 <span className=" blue"> Une développeuse… mais pas que ! </span>
              </h3>
              <div className="about-card-body">
                <p>
                  Depuis mon plus jeune âge, je <span className="purple">dessine</span> et je <span className="purple">crée</span> des univers qui reflètent ma <span className="purple">personnalité singulière</span>.
                </p>
                <p>
                  Cette passion <span className="purple">artistique</span> m’a naturellement menée vers le <span className="purple">design</span>, me permettant notamment de concevoir moi-même <span className="purple">mon logo</span> et <span className="purple">mon site web</span>.
                </p>
                <p>
                  J’aime l’idée d’allier <span className="purple">logique</span> et <span className="purple">imagination</span>, <span className="purple">rigueur</span> et <span className="purple">créativité</span>, dans tout ce que je fais.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="px-5 about-img order-1 order-md-2">
          <img src={logo} alt="about" className="img-fluid"/>
        </Col>
      </Row>
      <Row className="about-row">
        <Col md={5} className="px-5 about-img">
          <img src={ripley} alt="about" className=" ripley img-fluid rounded-circle"/>
        </Col>
        <Col md={7}>
          <Card className="quote-card-view">
            <Card.Body>
              <h3 className="about-card-title">
                🐾 <span className=" blue">Une amoureuse des animaux</span>
              </h3>
              <div className="about-card-body">
                <p>
                  J'adore les <span className="purple">animaux </span>et je partage ma vie avec quatre <span className="purple">chats</span> et un <span className="purple">chien</span>, tous aussi <span className="purple">uniques qu’attachants</span>.
                </p>
                <p>
                  Mon <span className="purple">amour</span> pour eux m'a amenée à m'intéresser de près à la <span className="purple">nutrition animale</span>, un domaine que je trouve aussi <span className="purple">complexe que passionnant</span>.
                </p>
                <p>
                  <span className="purple">Passionnée</span> du monde aquatique, je m’initie à <span className="purple"> l’aquariophilie</span> depuis plusieurs années.
                </p>
                <p>
                  Entre <span className="purple">recherche</span>, <span className="purple">entretien</span>, et <span className="purple">observation</span> du comportement des espèces, ce hobby est pour moi une vraie <span className="purple"> source d’équilibre et d’inspiration</span>.
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
            <Card.Body>
              <h3 className="about-card-title"> 🧠 <span className=" blue">Une neuroAtypie assumée</span>
              </h3>
              <div className="about-card-body">
                <p>
                  Je suis <span className="purple">neuroAtypique</span>, et je considère cette particularité comme une <span className="purple">richesse</span>.
                </p>
                <p>
                  Elle me permet de voir le monde <span className="purple">autrement</span>, de penser <span className="purple">différemment</span>, et surtout, d’apprendre avec <span className="purple">intensité et passion</span>.
                </p>
                <p>
                  Chaque <span className="purple">échange</span> est pour moi l’occasion de m’ouvrir à d’autres <span className="purple">perspectives</span>, de <span className="purple">découvrir</span>, d'<span className="purple">apprendre</span>, et de <span className="purple">grandir</span>.
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="px-5 about-img order-1 order-md-2">
          <img src={space} alt="about" className="img-fluid"/>
        </Col>
      </Row>
      <div className="mt-3 text-center">
        <Button variant="start glow-on-hover">
          <Link to={`/timeline`}>
            <h4 className="blue"> Mon parcours </h4>
          </Link>
        </Button>
      </div>
    </Container>
  </Container>
)

export {About}
