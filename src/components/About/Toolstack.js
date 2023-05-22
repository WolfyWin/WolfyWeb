import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiLinux, SiWindows, SiVisualstudiocode, SiPhpstorm, SiGithub,} from 'react-icons/si'

const tools = [
  { id: 1, icon: <SiLinux />, name: 'Linux' },
  { id: 2, icon: <SiWindows />, name: 'Windows' },
  { id: 3, icon: <SiVisualstudiocode />, name: 'VS Code' },
  { id: 4, icon: <SiPhpstorm />, name: 'PhpStorm' },
  { id: 5, icon: <SiGithub />, name: 'Github' },
]

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col key={tool.id} xs={4} md={2} className="tech-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export { Toolstack }
