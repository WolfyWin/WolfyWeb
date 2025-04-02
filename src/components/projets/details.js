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
import Stack from '../about/stack'

const ProjectLinks = ({link, icon, hoverText}) => (
  link && <SocialIcon href={link} className="project-icons mx-2" target="_blank" icon={icon} hoverText={hoverText}/>
)

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
            <h2 className="details-title neon mb-4">Description</h2>

            <div className="description-bloc project-desc p-3">
              {project.description2}
            </div>

            <div className="project-desc-link mb-3 text-center">
              <ProjectLinks link={project.ghLink} icon={BsGithub} hoverText="GitHub"/>
              <ProjectLinks link={project.demoLink} icon={CgWebsite} hoverText="Demo"/>
              <ProjectLinks link={project.wfLink} icon={BiChalkboard} hoverText="Wireframes"/>
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
              <Stack items={project.tech}/>
            </>
          )}
        </Col>

        {project.slides && (
          <Row className="mt-5" >
            <Col className="bloc-text mt-5 mb-4">
              <Carousel>
                {project.slides.map((slide, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={slide.imgPath} alt={`Slide ${index}`}/>
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
