import React, { useEffect } from "react";
import { ProjectDetails } from "../../interfaces/ProjectDetails";
import { Project } from "../Project/Project";
import "./Projects.css";
import "aos/dist/aos.css";
import Aos from "aos";

type ProjectsProps = {
  projects: ProjectDetails[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="projects">
        <div className="section-title" data-aos="fade-right">
          Projects
        </div>
        {projects.map((p, i) => (
          <div className="project-wrapper" key={i}>
            <Project project={p} />
          </div>
        ))}
      </div>
    </>
  );
};
