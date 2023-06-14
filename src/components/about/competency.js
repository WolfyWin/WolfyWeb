import React from 'react'

import { Container } from 'react-bootstrap'
import { Techstack, Toolstack } from './stack'

const Competency= () => (
    <Container fluid className="competency-section" id="competency">
        <Container className="content">
            <div className="details">
                <h2 className="heading neon">Compétences</h2>
                <Techstack />
                <h2 className="heading neon">Outils</h2>
                <Toolstack />
            </div>
        </Container>
    </Container>
)

export { Competency }
