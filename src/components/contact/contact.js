import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import oni from '../../assets/img/oni.png'
import cosmos from '../../assets/img/cosmos.gif'

const Contact = () => (
    <Container fluid className="details-section">
        <Container>
            <div className="details pb-3">
                <h1 className="details-heading neon">Contact</h1>
            </div>
            <Row className="d-flex bloc-text pt-5">
                <Col md={3} className="">
                    <img src={oni} alt="contact-img" className="details-image" style={{textAlign:'center'}} />
                </Col>
                <Col md={6} className="contact-bloc">
                    <h2>Vous avez un projet ? Une question ?</h2> 
                    <h2>N'hésitez pas à me contacter !</h2>
                </Col >
                <Col md={3}>
                    <img src={oni} alt="contact-img" className="details-image" style={{textAlign:'center'}} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-between pt-5 mt-5">
                <Col md={6}>
                    <img src={cosmos} alt="contact-img" className="details-image cosmos-image" style={{textAlign:'center'}} />
                </Col>
                <Col md={6} className="pt-5">
                    <Form className="form-contact">
                        <Form.Group className="row mb-4">
                            <div className="col-sm-12 col-md-6 mb-4 mb-sm-0">
                                <Form.Control type="name" placeholder="Nom" />
                            </div>
                            <div className="col-sm-12 col-md-6 mb-4 mb-sm-0">
                                <Form.Control type="name" placeholder="Prénom" />
                            </div>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Control type="email" placeholder="Entrer votre email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage" className="mb-4">
                            <Form.Control as="textarea" rows={3} placeholder="Votre message"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Container>
)

export { Contact }
