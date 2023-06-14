import React from 'react'
import { useParams } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { projectsData } from '../../data/projets.js'

const ProjectDetails = () => {
const { title } = useParams()
const project = projectsData.find(project => project.title === title)

    return (
        <Container fluid className="details-section">
            <Container className="content">
                <div className="details">
                    <h1 className="heading neon">{title}</h1>
                </div>
                <Row className="d-flex justify-content-between">
                    <Col md={6} className="details-bloc-text">
                        <h2 className="details-title neon">Description</h2>
                        <div className="project-desc">{project.description2}</div> 
                        {project.tech && (
                            <>
                                <h2 className="details-title neon">Outils & langages</h2>
                                <Row className="tech-stack-container">
                                    {project.tech.map((Icon, index) => (
                                        <Col xs={6} md={4}  lg={2} className="details-icons gy-2" key={index}>
                                            <Icon size={"2.5rem"} />
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )}
                        {project.ghLink && (
                            <Button variant="primary" href={project.ghLink} target="_blank">
                                <BsGithub /> &nbsp; {"GitHub"}
                            </Button>
                        )}
                        {project.demoLink && (
                            <Button variant="primary" href={project.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
                                <CgWebsite /> &nbsp; {"Demo"}
                            </Button>
                        )}
                        {project.wfLink && (
                            <Button variant="primary" href={project.wfLink} target="_blank" style={{ marginLeft: "10px" }}>
                                <CgWebsite /> &nbsp; {"Wireframes"}
                            </Button>
                        )}
                    </Col>
                    <Col md={6} className="">
                        <img src={project.imgPath} alt="project-img" className="details-image" style={{textAlign:'center'}} />
                    </Col>
                </Row>
                {project.slides && (
                    <Row className="mt-5" >
                        <Col className="bloc-text mt-5 mb-4">
                            <Carousel>
                            {project.slides.map((slide, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={slide.imgPath}
                                            alt={`Slide ${index}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                )}
            </Container>
        </Container>
    )
}

export { ProjectDetails }
