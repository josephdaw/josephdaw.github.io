import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Joseph Daw</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="about">About Me</Link>
                        <Link className="Link" to="portfolio">Portfolio</Link>
                        <Link to="contact">Contact Me</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}