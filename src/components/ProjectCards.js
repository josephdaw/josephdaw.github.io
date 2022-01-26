import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Project({ projects }) {
  return (
    <CardGroup>
      {projects.map(project => (
        <Card key={project.id}>
          <Card.Img variant="top" src={project.imgScr} />
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
      ))}

    </CardGroup>
  );
}

export default Project;
