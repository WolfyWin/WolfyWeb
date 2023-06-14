import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { projectsData } from '../../data/projets'

const Projects = () => (

    <Container fluid className="project-section">
        <Container>
            <div className="text-center">
                <h1 className="heading neon"> Mes projets</h1>
            </div>

            <Row className="project-grid">
                {projectsData.map((project, index) => (
                    <Col key={index} className="project-card-container">
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={project.imgPath} alt="card-img" />
                            <Card.Body>
                                <Card.Title className="neon card-title">
                                    {project.title}
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    {project.description}
                                </Card.Text>
                                <Link to={`/project-details/${project.title}`} className="project-details-link">
                                    plus de détails
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </Container>
)

export { Projects }
