import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Joseph from '../img/joseph.jpg';

function About() {
  return (
    <>
      <Row xs={1} className="g-4 mx-2" style={{
        marginLeft: '0px',
        marginRight: '0px',
        paddingTop: '58px',
        marginTop: '-58px',
        textAlign: 'center',
      }}>

        <h2>Hi, my name is Joe</h2>
        <h4>A full stack web developer with a background in Aviation</h4>
      </Row>
      <Row xs={1} md={2} className="g-4 mx-2" style={{
        marginLeft: '0px',
        marginRight: '0px',
        paddingTop: '58px',
        marginTop: '-58px',
      }}>
        <Col>
          <img src={Joseph} alt="picture of Joseph" style={{ maxHeight: '40vh', display: 'flex' }} />
        </Col>

        <Col>
          <p>
            Welcome, my name is Joseph Daw. I am a full stack developer with a passion for making the web a safer, more secure place.
          </p>
          <p>
            For over a decade I have been teaching myself various programming languages, rebuilding computers, and designing solutions to streamline tasks. I enjoy using technology to save time, especially for repeatitive jobs. I recently enrolled in the Adelaide University Coding Boot Camp as a way of developing my skills to a much higher level.
          </p>
          <p>
            If you have a project in mind I would love to hear from you. You can email me at info@josephdaw.com or reach out to me via one of the methods below.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
