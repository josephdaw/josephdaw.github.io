import React from "react";
import Row from 'react-bootstrap/Row'
import Project from "./Project";

// importing project information
import { projects } from '../projects';

export default function Portfolio() {
  return (
<Row id="portfolio" xs={1} md={2} lg={3} className="g-4" style={{
    marginLeft: '0px',
    marginRight: '0px',
    paddingTop: '58px',
    marginTop: '-58px',
}}>
{projects.map(project => (
    <Project project={project}/>
  ))}
</Row>
  );
}

