import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <Container id='footer'>
            <Container style={{display: 'flex', justifyContent: 'space-around'}}>
                <a className="grey-text text-lighten-3" href="http://www.github.com/josephdaw" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="grey-text text-lighten-3" href="https://twitter.com/Joseph_Daw" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/joseph-daw"
                    target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </Container>
            <Container style={{display: 'flex', justifyContent: 'center'}}>
                &copy; 2021 Joseph Daw
            </Container>
        </Container>
    );
}