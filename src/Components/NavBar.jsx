import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HerroSection.css';
import {Navbar,Nav,Button} from "react-bootstrap";


function NavBar() {
return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="../Components/Pages/Home.js" className="logo"><p className="logo-image">------------------</p></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Sobre</Nav.Link>
      <Nav.Link href="../Components/Pages/Filiar-se.js">Filiar-se</Nav.Link>
      <Nav.Link href="#pricing">Galeria</Nav.Link>
      <Nav.Link href="#pricing">Eventos</Nav.Link>
      <Nav.Link href="#pricing">Declaração</Nav.Link>
      <Nav.Link href="#pricing">Contato</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="../Components/Pages/Filiar-se.js">
      <Button variant="secondary">   Login </Button>{' '}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    );
}


export default NavBar;

