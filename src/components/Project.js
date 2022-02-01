import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Project({ projects }) {
  console.log(projects)
  return (
    <>
    {projects.map(project => (
      <Col key={project.id}>
          <Card >
            <Image src={project.imgSrc} style={{objectFit: 'cover', height: '25vh'}}/>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted" style={{
                display: 'flex',
                justifyContent: 'space-around'
              }}>
                <a href={project.liveUrl}>Live Site</a>
                <a href={project.githubUrl}>GitHub</a>
              </small>
            </Card.Footer>
          </Card>
        </Col>
      ))
    }
    </>
  );
}
