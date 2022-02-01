import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Type your message" />
        </Form.Group>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Row>
  );
}

export default Contact;
