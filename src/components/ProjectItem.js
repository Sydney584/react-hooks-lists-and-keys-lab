import React from "react";

function ProjectItem({ name, about, technologies }) {
  
    const technologiesArray = technologies.map((techo) => (
      <span key={techo}>{techo}</span>
    ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesArray}
      </div>
    </div>
  );
}

export default ProjectItem;
