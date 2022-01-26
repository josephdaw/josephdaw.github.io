import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function Project({ projects }) {
  return (
<Row xs={1} md={2} lg={3} className="g-4">
{projects.map(project => (
    <Col>
        <Card key={project.id}>
          <Image src={project.imgSrc} ></Image>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href={project.liveUrl}>Live Site</a>
              <a href={project.githubUrl}>GitHub</a>
            </small>
          </Card.Footer>
        </Card>
    </Col>
  ))}
</Row>
  );
}

export default Project;
