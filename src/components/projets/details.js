import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { BiChalkboard } from 'react-icons/bi'
import { TfiControlBackward } from 'react-icons/tfi'
import { projectsData } from '../../data/projets.js'
import { SocialIcon, Icon  } from '../icon/icon'

const ProjectDetails = () => {
  const { title } = useParams()
  const project = projectsData.find(project => project.title === title)
  const navigate = useNavigate()

    return (
        <Container fluid className="details-section">
            <Container className="content">
                <div onClick={() => navigate(-1)}>
                  <Icon  icon={TfiControlBackward} className="back-button" hoverText="Retour"/> 
                </div>
                <div className="details mt-3 mb-3">
                    <h1 className="heading neon">{title}</h1>
                </div>
                <Row className="d-flex justify-content-between pt-3">
                    <Col md={7} className="project-bloc-desc">
                        <div className="mb-4">
                            <h2 className="details-title neon">Description</h2>
                        </div>
                        <div className=" description-bloc project-desc p-3">
                            {project.description2}
                        </div>
                        <div className="project-desc-link mb-3">
                            <div className="project-desc text-center">
                                {project.ghLink && (
                                    <SocialIcon  href={project.ghLink} className="project-icons mx-2" target="_blank" icon={BsGithub} hoverText="GitHub"/>
                                )}
                                {project.demoLink && (
                                    <SocialIcon  href={project.demoLink} className="project-icons mx-2" target="_blank" icon={CgWebsite} hoverText="Demo"/>
                                )}
                                {project.wfLink && (
                                    <SocialIcon href={project.wfLink} className="project-icons mx-2" target="_blank" icon={BiChalkboard} hoverText="Wireframes"/>
                                )}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={4} className="project-img">
                        <img src={project.imgPath} alt="project-img" className="img-fluid details-image" />
                    </Col>
                </Row>
                <Col md={8} className="stack-bloc">
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
                </Col>
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
