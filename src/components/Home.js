import React from "react";
import { Link } from "react-router-dom";
import Joseph from '../img/joseph.jpg';

function Home() {
  return (
    <>
        <h2>Hi, my name is Joe</h2>
        <h4>A full stack web developer with a background in Aviation</h4>
        <p>Click here to learn more <Link to="about">about me</Link></p>
        <img src={Joseph} alt="picture of Joseph" style={{maxHeight: '30vh'}}/>
    </>
  );
}

export default Home;
