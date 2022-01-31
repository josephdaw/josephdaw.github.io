import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Contact() {
  return (
<Row id="contact" xs={1} md={2} lg={3} className="g-4" style={{
    marginLeft: '0px',
    marginRight: '0px',
    paddingTop: '58px',
    marginTop: '-58px',
}}>
    <Col>
        <h4>I would love to hear from you!</h4>
        <p>Reach out to me via email at <a href="mailto:info@josephdaw.com">info@josephdaw.com</a></p>
    </Col>
</Row>
  );
}

export default Contact;
