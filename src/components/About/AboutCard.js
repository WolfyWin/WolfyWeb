import React from 'react'

import Card from 'react-bootstrap/Card'
import { ImStarEmpty } from 'react-icons/im'

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="text-center">
            - About <strong className="purple">Me</strong>
          </h1>
          <br />
          <p className="about-card-body">
            Je m'appelle <span className="purple">Rébecca </span> et je vis en <span className="purple">Alsace</span>.
            <br />
            <br />
            👩🏻‍🚀 Je suis une personne <span className="purple">passionnée</span>, curieuse, <span className="purple">débordante</span> d'idées et d'imagination.
            <br />
            <br />
            👾 Dans la vie j'aime :
          </p>
          <ul>
            <li className="about-activity">
              <ImStarEmpty /> Dessiner, lire.
            </li>
            <li className="about-activity">
              <ImStarEmpty /> Le cinéma et les jeux vidéos.
            </li>
            <li className="about-activity">
              <ImStarEmpty /> Le domaine de la santé mentale.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export { AboutCard }
