import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>
                    <NavLink to="about" >Joseph Daw</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="about" activeclassname="active">About Me</NavLink>
                        <NavLink to="portfolio" activeclassname="active">Portfolio</NavLink>
                        <NavLink to="contact" activeclassname="active">Contact</NavLink>
                        <NavLink to="resume" activeclassname="active">Resume</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}