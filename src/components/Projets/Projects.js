import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { ProjectCards } from './ProjectCards'
import codeheroes from '../../Assets/img/Projects/codeheroes.png'
import alterlms from '../../Assets/img/Projects/alterlms.png'
import cthulhu from '../../Assets/img/Projects/cthulhu.png'
import veille from '../../Assets/img/Projects/veille.png'
import autism from '../../Assets/img/Projects/autism.png'

const projectsData = [
  {
    imgPath: cthulhu,
    title: "Cthulhu Game",
    description: "Cthulhu game est un jeu de Morpion initialement développé en react integré dans Symfony. Ce projet va évoluer par la suite, ainsi que son univers inspiré de notre cher Howard Phillips Lovecraft.",
    ghLink: "https://github.com/WolfyWin/Cthulhu_game",
    demoLink: "",
  },
  {
    imgPath: alterlms,
    title: "AlterLMS",
    description: "Le site d'AlterLMS est un site statique généré à l'aide de hugo dans le but de présenter l'entreprise et ses services.",
    ghLink: "https://github.com/alterlms/site",
    demoLink: "https://www.alterlms.fr/",
  },
  {
    imgPath: codeheroes,
    title: "Code Heroes",
    description: "Réalisation d'un site e-learning sous forme de RPG en PHP/Symfony.",
    ghLink: "https://github.com/WolfyWin/code_heroes",
    demoLink: "https://codeheroes.skullbot.fr/" 
  },
  {
    imgPath: veille,
    title: "Sensibilisation à l’accessibilité",
    description: "Présentation et sensibilisation à l'accessibilité web des personnes neuroAtypiques dans le cadre d'une veille technologique.",
    demoLink: "https://drive.google.com/file/d/1gsQKqImI4JQN4oT3pb0so32PIR-8Tv-P/view"
  },
  {
    imgPath: autism,
    title: "Journée mondiale de sensibilisation à l'autisme 🧠",
    description: "Rédaction d'un article pour la journée mondiale de sensibilisation à l'autisme.",
    demoLink: "https://www.alterlms.fr/blog/articles/sensibilisation-tsa/"
  },
]

const Projects = () => (
  <Container fluid className="project-section">
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projectsData.map((project, index) => (
          <Col md={4} className="project-card" key={index}>
            <ProjectCards {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
)

export { Projects }
