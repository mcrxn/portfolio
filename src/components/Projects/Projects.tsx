import React from "react";
import { ProjectDetails } from "../../interfaces/ProjectDetails";
import { Project } from "../Project/Project";

type ProjectsProps = {
  projects: ProjectDetails[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <>
      <div id="projects">
        <div className="section-title">Projects</div>
        {projects.map((p, i) => (
          <div className="project-wrapper" key={i}>
            <Project project={p} />
          </div>
        ))}
      </div>
    </>
  );
};
