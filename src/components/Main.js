import React from 'react';
import { useState, useEffect } from 'react';

// importing components
import Project from './Project';
import Nav from './Nav';



// importing project information
import { projects } from '../projects';

const Main = () => {

  return (
    <div>
      <Nav></Nav>
          {projects.map(project => (<Project 
            project={project}>
          </Project>))}
    </div>
  );
};

export default Main;
