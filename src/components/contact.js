import React, { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { SocialIcon  } from './icon/icon'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import contact from '../assets/img/contact.webp'

const Contact = () => {

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const result = await fetch("https://mails.wolfyweb.fr/mail.php", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom: data.get('nom'),
          prenom: data.get('prenom'),
          email: data.get('email'),
          message: data.get('message')
        }),
      })

      const res = await result.json()
    
        if (res.success) {
          form.reset()
          form.style.display = 'none'
          setSuccess(res.success)
          document.getElementById('success').style.display = 'block'
        } else {
          setError(res.errors.join('\n'))
          document.getElementById('error').style.display = 'block'
        }
    } catch (err) {
      setError(`Une erreur est survenue, veuillez réessayer.`)
      document.getElementById('error').style.display = 'block'
    }
  }

  return (
    <Container fluid className="contact-section" >
      <Container className="content">
        <div className="text-center">
          <h1 className="heading neon">Contact</h1>
        </div>
        <Row className="pt-2 justify-content-center">
          <Col md={5} className="container-card">
            <div className="contact-card shadow p-4 mb-4">
              <div className="profileimage">
                <img src={contact} alt="contact-img" className="profile"/>
              </div>
              <div className="contact-card-info">
                <p className="blue noglitch">Rebecca Tinchon</p>
              </div>
              <div className="contact-bar">
                <SocialIcon className="contact-icon mx-2" href="https://github.com/WolfyWin" icon={AiFillGithub} hoverText="GitHub"/>
                <SocialIcon className="contact-icon mx-2" href="https://www.linkedin.com/in/rebeccatinchon/" icon={FaLinkedinIn} hoverText="LinkedIn"/>
                </div>
            </div>
          </Col>
          <Col md={7} className="container-form my-3 shadow p-4 mb-4">
            <h2 className="contact-title purple text-center">Vous avez un projet ? Une question ?</h2>

            <Form className="form-contact" onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Control required type="name" name="nom" placeholder="Nom / Prénom" pattern="[A-Za-zÀ-ÖØ-öø-ÿ '-]+" />
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
            {success && <p id="success" className="glitch neon success">Votre message a bien été envoyé !</p>}
            {!success && error && <p id="error" className="noglitch blue error">{error}</p>}
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export { Contact }
