import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { 
  TiHtml5,
  SiCsswizardry,
  SiPhp, SiSymfony,
  DiJavascript1,
  DiReact,
  SiRedux,
  DiGit,
  SiHugo,
  SiMysql,
  SiBootstrap,
  DiSass,
  DiLess,
  SiLinux,
  SiWindows,
  SiVisualstudiocode,
  SiPhpstorm,
  SiGithub
} from '../../data/stack.js'

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

const Toolstack = () => {
  return (
    <Row className="tech-stack-container">
      {[SiLinux, SiWindows, SiVisualstudiocode, SiPhpstorm , SiGithub]
        .map((Icon, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <Icon />
          </Col>
        ))}
    </Row>
  )
}

export { Toolstack }