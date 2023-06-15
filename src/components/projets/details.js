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
                <div className="details">
                    <h1 className="heading neon">{title}</h1>
                </div>
                <Row className="d-flex justify-content-between">
                    <Col md={6} className="details-bloc-text">
                        <h2 className="details-title neon">Description</h2>
                        <div className="project-desc">
                          {project.description2}
                        </div> 
                        <div className="button-list justify-content-center">
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
                    </Col>
                    
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img src={project.imgPath} alt="project-img" className="details-image" style={{textAlign:'center'}} />
                    </Col>
                </Row>
                <Col md={8} className="details-bloc-text">
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
