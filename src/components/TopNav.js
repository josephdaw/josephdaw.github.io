import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

export default function TopNav() {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">Joseph Daw</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                        <Nav.Link href="../joseph-daw-resume.pdf" download>My Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}