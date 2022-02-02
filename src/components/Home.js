import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
        <h2>Hi, my name is Joe</h2>
        <h4>A full stack web developer with a background in Aviation</h4>
        <p>Learn more: <Link to="about">About Me</Link></p>
    </>
  );
}

export default Home;
