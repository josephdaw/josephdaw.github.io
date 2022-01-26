import React from 'react';
import { useState, useEffect } from 'react';

// importing components
import Project from './Project';
import TopNav from './TopNav';



// importing project information
import { projects } from '../projects';

const Main = () => {

  return (
    <div>
      <TopNav></TopNav>
          {projects.map(project => (<Project 
            project={project}>
          </Project>))}
    </div>
  );
};

export default Main;
