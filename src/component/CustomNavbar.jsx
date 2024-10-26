import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css"

const CustomNavbar = () => {
  return (
    <BootstrapNavbar className="navbar3" bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/"> My Website </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home </Nav.Link>
            <Nav.Link as={Link} to="/about"> About </Nav.Link>
            <Nav.Link as={Link} to="/blog"> Blog </Nav.Link>
            <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>
            <Nav.Link as={Link} to="/login">Join Us!</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
