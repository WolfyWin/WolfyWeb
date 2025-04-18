import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import {Techstack, Toolstack} from './stack'

const Skills = () => (
  <Container fluid className="competency-section" id="competency">
    <Container className="content">
      <div className="details">
        <h2 className="heading neon">Compétences</h2>
        <Techstack/>
        <h2 className="heading neon">Outils</h2>
        <Toolstack/>
      </div>
      <div className="mt-3 text-center">
        <Button variant="start glow-on-hover">
          <Link to={`/project`}>
            <h4 className="blue h-projet"> Mes projets </h4>
          </Link>
        </Button>
      </div>
    </Container>
  </Container>
)

export {Skills}
