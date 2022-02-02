import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";



function Contact() {

  const [email, setEmail] = useState();
  
  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <Row id="contact" xs={1} md={2} lg={3} className="g-4 mx-2" style={{
      marginLeft: '0px',
      marginRight: '0px',
      paddingTop: '58px',
      marginTop: '-58px',
    }}>

      <Col>
        <h4>I would love to hear from you!</h4>
        <p>Reach out to me via email at <a href="mailto:info@josephdaw.com">info@josephdaw.com</a></p>
      </Col>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group id='email' className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Type your message" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formButton">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form.Group>
        <Form.Text className="text-muted">
            Please note that this form is a work in progress and does not send an email yet.
          </Form.Text>
      </Form>
    </Row>
  );
}

export default Contact;
