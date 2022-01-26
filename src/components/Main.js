import React from 'react';
import { useState, useEffect } from 'react';

// importing components
import Project from './Project';
import TopNav from './TopNav';
import ProjectCards from './ProjectCards'



// importing project information
import { projects } from '../projects';

const Main = () => {

  return (
    <div>
      <TopNav></TopNav>
      <ProjectCards projects={projects}></ProjectCards>
    </div>
  );
};

export default Main;
