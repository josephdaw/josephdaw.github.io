import React from 'react';
import { useState, useEffect } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';

// importing images
import instantCrypto from '../img/instant-crypto.png';
import workdayPlanner from '../img/workday-planner.png';


const Main = () => {

  const projects = [
    {
      title: 'InstantCrypto',
      description: 'My first project',
      imgSrc: instantCrypto, 
    },
    {
      title: 'Workday Planner',
      description: 'My second project',
      imgSrc: workdayPlanner, 
    },
  ]

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          {projects.map(project => (<Card 
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          ></Card>))}
        </Col>
        <Col size="md-4">
          
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
