import React from 'react';
import { useState, useEffect } from 'react';

// importing components
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Project from './Project';
import Nav from './Nav';



// importing project information
import { projects } from '../projects';

const Main = () => {

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <div>
      <Nav></Nav>
          {projects.map(project => (
          <Project 
            project={project}>
          </Project>))}
    </div>
  );
};

export default Main;
