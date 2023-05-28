import React from 'react'
import { Container, Form, Button, Row } from 'react-bootstrap'

const Contact = () => (
    <Container fluid className="contact-section  p-sm-5" id="contact">
        <Row className="row text-center my-5">
            <div className="col-12">
                <h1 className="project-heading">
                    Contact
                </h1>
            </div>
        </Row>
         <Row className="row">
            <div className="col-sm-12 col-md-6 mb-sm-0 mb-4">
            </div>
            <div className="col-sm-12 col-md-6">
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
            </div>
        </Row>
    </Container>
)

export { Contact }
