import React from 'react'

import { Container, Row } from 'react-bootstrap'


const Design = () => (
  <Container fluid className="design-section">
    <Container className="design-content">
      <h1 className="project-heading">
        My Recent <strong className="purple">Design</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <div className="placeholder" style={{ width: "300px", height: "200px", backgroundColor: "#ccc", marginBottom: "10px" }}></div>


        <div className="placeholder" style={{ width: "100px", height: "100px", backgroundColor: "#ccc" }}></div>
      </Row>
    </Container>
    <Container className="design-content">
      <h1 className="project-heading">
        My Recent <strong className="purple">Design</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <div className="placeholder" style={{ width: "300px", height: "200px", backgroundColor: "#ccc", marginBottom: "10px" }}></div>


        <div className="placeholder" style={{ width: "100px", height: "100px", backgroundColor: "#ccc" }}></div>
      </Row>
    </Container>
    <Container className="design-content">
      <h1 className="project-heading">
        My Recent <strong className="purple">Design</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <div className="placeholder" style={{ width: "300px", height: "200px", backgroundColor: "#ccc", marginBottom: "10px" }}></div>


        <div className="placeholder" style={{ width: "100px", height: "100px", backgroundColor: "#ccc" }}></div>
      </Row>
    </Container>
  </Container>
)

export { Design }
