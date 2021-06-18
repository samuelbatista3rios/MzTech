import React from 'react';
import {Carousel} from 'react-bootstrap';

function Car() {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
    <img
      className="d-block w-100"
      src="../imagens/clube tiro.jpg"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../imagens/clube tiro.jpg"
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
      src="../imagens/clube tiro.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default Car;