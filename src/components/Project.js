import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Project({ id, imgSrc, title, description, liveUrl, githubUrl }) {
  return (
    <Col>
      <Card key={id}>
        <Image src={imgSrc} ></Image>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted" style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            <a href={liveUrl}>Live Site</a>
            <a href={githubUrl}>GitHub</a>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
}
