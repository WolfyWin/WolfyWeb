import React from 'react'

import { Container} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


const Design = () => {
  return (
    <Container fluid className="design" id="design">
      <div className="justify-content-center align-items-center py-3 pt-5 mt-5">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/seed/picsum/500/200"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/seed/picsum/500/200"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/seed/picsum/500/200"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    </Container>
  )
}

export { Design }
