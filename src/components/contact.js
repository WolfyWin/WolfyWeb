import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { SocialIcon  } from './icon/icon'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import contact from '../assets/img/contact.png'

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
            <Row className="d-flex justify-content-between pt-3 contact-section">
                <Col md={6} className="container-card">
                    <div className="contact-card">
                        <div class="profileimage">
                            <img src={contact} alt="contact-img" className="profile"/>
                        </div>
                        <div className="contact-card-info">
                            <p className="blue noglitch">Rebecca Tinchon</p>
                        </div>
                        <div class="contact-bar">
                            <SocialIcon className="contact-icon mx-2" href="https://github.com/WolfyWin" icon={AiFillGithub} hoverText="GitHub"/>
                            <SocialIcon className="contact-icon mx-2" href="https://www.linkedin.com/in/rebeccatinchon/" icon={FaLinkedinIn} hoverText="LinkedIn"/>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="container-form mt-5 mb-5">
                    <h2 className="contact-title purple text-center">Vous avez un projet ? Une question ?</h2>
                    <Form className="form-contact" onSubmit={handleSubmit}>
                        <Form.Group className="mb-4">
                        <Form.Control required type="name" name="nom" placeholder="Nom / Prénom" pattern="[A-Za-z -]+"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="mb-4">
                            <Form.Control type="email" name="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage" className="mb-4">
                            <Form.Control as="textarea" name="message" rows={3} placeholder="Message"/>
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="start glow-on-hover" type="submit">
                                <h6 className="blue"> Envoyer </h6>
                            </Button>
                        </div>
                    </Form>
                    <p id="success" className="glitch neon" style={{'alignSelf': 'center', 'display': 'none'}}>Votre message a bien été envoyé !</p>
                </Col>
            </Row>
        </Container>
    </Container>
)

export { Contact }
