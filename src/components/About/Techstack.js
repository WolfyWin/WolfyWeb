import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiJavascript1, DiReact, DiGit, DiSass, DiLess } from 'react-icons/di'
import { SiCsswizardry, SiPhp, SiRedux, SiSymfony, SiMysql, SiBootstrap, SiHugo } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'

const Techstack = () => {
  return (
    <Row className="tech-stack-container">
      {[TiHtml5, SiCsswizardry, SiPhp, SiSymfony, DiJavascript1, DiReact, SiRedux, DiGit, SiHugo, SiMysql, SiBootstrap, DiSass, DiLess]
        .map((Icon, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <Icon />
          </Col>
        ))}
    </Row>
  )
}

export { Techstack }
