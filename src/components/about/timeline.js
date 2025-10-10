import React from 'react'
import {Link} from 'react-router-dom'
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa'
import {Container, Card, Badge, Button} from 'react-bootstrap'
import { FaUserGraduate, FaRocket, FaSatellite, FaStar, FaDownload, FaFilePdf } from 'react-icons/fa'


const experiences = [
  {
    date: '2023 - 2025',
    title: 'Développeuse Web Fullstack',
    role: 'Développeuse',
    description: [
      'Développement de la plateforme Claroline (PHP, Symfony, React/Redux)',
      'Intégration front (Bootstrap, SCSS, composants réactifs)',
      'Amélioration du design et de l’ergonomie',
      'Création d’outils spécifiques et de thèmes personnalisés',
      'Maintenance et gestion des tickets clients'
    ],
    badges: ['PHP', 'Symfony', 'React', 'Redux', 'Bootstrap', 'SCSS', 'Linux', 'Git']
  },
  {
    date: '2022',
    title: 'Formation Développeur Web PHP',
    role: 'Stagiaire',
    description: [
      'Formation intensive à la Wild Code School, avec un accent sur PHP et Symfony.',
      "Conception d'applications web, intégration d'interfaces, bonnes pratiques de code."
    ],
    badges: ['PHP', 'Symfony', 'HTML', 'CSS', 'Git', 'JavaScript']
  },
  {
    date: '2021',
    title: 'Formation Développeur Web & Mobile',
    role: 'Stagiaire',
    description: [
      "Formation intensive à l'ENI Informatique, axée sur les fondamentaux du développement web et mobile."
    ],
    badges: ['HTML', 'CSS', 'JAVA']
  },
  {
    date: '2013',
    title: 'BEP & BAC métiers administratifs',
    role: 'Étudiante',
    description: [
      'Obtention du BEP et du BAC métiers des services administratifs au Lycée Charles de Bovelles.'
    ],
    badges: ['Bureautique', 'Gestion', 'Organisation']
  },
]
const icons = [
  <FaStar />, <FaSatellite />, <FaRocket />, <FaUserGraduate />
]

const CV_URL = '/cv/rebecca-tinchon-cv.pdf'
const CV_FILENAME = 'Rebecca-Tinchon-CV.pdf'

const Timeline = () => {
  return (
    <Container fluid className="timeline-section">
      <Container className="content">
        <div className="text-center mb-5">
          <h1 className="heading neon">Mon parcours</h1>
        </div>

        <div className="d-flex justify-content-center gap-4 mb-5">
            <Button
              as="a"
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              className="timeline-button"
            >
              <FaFilePdf className="me-2 mb-1" />
              Voir le CV (PDF)
            </Button>

            <Button
              as="a"
              href={CV_URL}
              download={CV_FILENAME}
              variant="outline-light"
              className="timeline-button"
            >
              <FaDownload className="me-2 mb-1" />
              Télécharger le CV
            </Button>
        </div>

        <div className="timeline-wrapper mx-5">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>

              <div className="timeline-point-icon">
                {icons[index % icons.length]}
              </div>

              <Card className="timeline-card">
                <Card.Body>
                  <h3 className="timeline-title blue mb-2 text-start">{exp.title}</h3>
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <FaCertificate className="me-2" />{exp.role}
                    </span>
                    <span className="timeline-content-info-date">
                      <FaCalendarAlt className="me-2" />{exp.date}
                    </span>
                  </div>
                  <ul className="timeline-list text-start">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {exp.badges.map((tech, i) => (
                      <Badge key={i} className="badge me-2 mb-1">
                        {String(tech)}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Button variant="start glow-on-hover">
            <Link to={`/skills`}>
              <h2 className="blue">SKILLS</h2>
            </Link>
          </Button>
        </div>
      </Container>
    </Container>
  )
}

export {Timeline}
