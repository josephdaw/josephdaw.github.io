import React from "react";

function Project({project: {title, description, imgSrc, liveUrl, githubUrl}}) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <i>{description}</i>
        <img className='img-fluid' src={imgSrc} alt="" />
        <a href={liveUrl}>Live Site</a>
        <a href={githubUrl}>GitHub</a>
        </div>
    </div>
  );
}

export default Project;
