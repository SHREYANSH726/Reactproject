import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Custom CSS

const Navbars = () => {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand href="/" className="nav-brand">MyApp</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered nav items */}
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">Contact</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action2">Another Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/something-else">Something Else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
