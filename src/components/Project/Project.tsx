import React from "react";
import "./Project.css";
import { ProjectDetails } from "../../interfaces/ProjectDetails";

type ProjectProps = {
  project: ProjectDetails;
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <div className="project-container">
        <div className="project-thumbnail">
          <img
            src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?w=1380&t=st=1682338334~exp=1682338934~hmac=e206aa4ac4d054e29a23ac6879790149ffb830379b5afbfde5271c38d61005b2"
            alt=""
          />
        </div>
        <div className="project-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((t, i) => (
              <div className="tech" key={i}>
                {t}
              </div>
            ))}
          </div>
          <div className="buttons-wrapper">
            <button>TEST</button>
            <button>Test</button>
          </div>
        </div>
      </div>
    </>
  );
};
