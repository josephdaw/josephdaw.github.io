import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            </Container>
        </Navbar>
    );
}