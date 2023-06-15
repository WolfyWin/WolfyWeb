import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import oni from '../assets/img/oni.png'
import contact from '../assets/img/contact.gif'

var success = false


const handleSubmit = async (e) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const data = new FormData(form)

    const result = await fetch( "https://mails.wolfyweb.fr/mail.php" , {
        method: "POST",
        body: JSON.stringify( {
            nom: data.get('nom'),
            prenom: data.get('prenom'),
            email: data.get('email'),
            message: data.get('message')
        } ),
        headers: {
            'Accept': 'application/json'
        }
    });

    const res = await result.json()

    success = res.success

    if (res.success) {
        form.reset()
        form.style.display = 'none'
        document.getElementById('success').style.display = 'block'
    }
    else {
        alert(res.errors.join('\n'))
    }
}

const Contact = () => (

    <Container fluid className="details-section">
        <Container className="content">
            <div className="text-center">
                <h1 className="heading neon">Contact</h1>
            </div>

            <Row className="d-flex bloc-text mb-5">
                <Col md={2}>
                    <img src={oni} alt="contact-img" className="details-image" style={{textAlign:'center'}} />
                </Col>
                <Col md={8} className="contact-bloc">
                    <h2>Vous avez un projet ? Une question ?</h2> 
                    <h2>N'hésitez pas à me contacter !</h2>
                </Col >
                <Col md={2}>
                    <img src={oni} alt="contact-img" className="details-image" style={{textAlign:'center'}} />
                </Col>
            </Row>

            <Row className="d-flex bloc-text">
                <Col md={6}>
                    <img src={contact} alt="contact-img" className="pt-5 pb-5" style={{textAlign:'center'}} />
                </Col>

                <Col md={6} className="mt-5 mb-5" style={{'display': 'flex'}}>

                    <p id="success" className="glitch neon" style={{'alignSelf': 'center', 'display': 'none'}}>Votre message a bien été envoyé !</p>

                    <Form className="form-contact" onSubmit={handleSubmit}>
                        <Form.Group className="row mb-4">
                            <div className="col-sm-12 col-md-6 mb-4 mb-sm-0">
                                <Form.Control type="name" name="nom" placeholder="Nom" />
                            </div>
                            <div className="col-sm-12 col-md-6 mb-4 mb-sm-0">
                                <Form.Control type="name" name="prenom" placeholder="Prénom" />
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Control type="email" name="email" placeholder="Entrer votre email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage" className="mb-4">
                            <Form.Control as="textarea" name="message" rows={3} placeholder="Votre message"/>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="start glow-on-hover" type="submit">
                                <h6 className="blue"> Envoyer </h6>
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Container>
)

export { Contact }
