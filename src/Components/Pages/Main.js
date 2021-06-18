import React from 'react';
import '../HerroSection.css';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from '../Carousel';


function Main() {
    return (
        <div>
            <Container fluid>
            <Row className="main">
                <Col className="h2">lorem ipsum
                lorem ipsum
                <h4 className="h4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                 publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h4>
               </Col>
                <Col><Carousel /></Col>
            </Row>
            </Container>
        </div>
    )
}

export default Main;