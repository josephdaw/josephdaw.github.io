import React from "react";
import Row from 'react-bootstrap/Row'
import resumePDF from '../joseph-daw-resume.pdf';

export default function Resume() {
  return (
    <>
    <Row xs={1} className="g-4 m-2" style={{
        textAlign: 'center',
      }}>
        <h2>My Resume</h2>
        <p>Click here <a href={resumePDF} download>download my Resume</a></p>
      </Row>
    </>
  );
}
