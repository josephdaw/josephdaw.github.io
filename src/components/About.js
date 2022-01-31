import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function About() {
  return (
<Row id="about" xs={1} md={2} lg={3} className="g-4" style={{
    marginLeft: '0px',
    marginRight: '0px',
    paddingTop: '58px',
    marginTop: '-58px',
}}>
    <Col>
        <h2>Hi, my name is Joe</h2>
        <h4>A full stack web developer with a background in Aviation</h4>
    </Col>
</Row>
  );
}

export default About;
