import React, { useEffect } from "react";
import "./Skills.css";
import { User } from "../../interfaces/User";
import Aos from "aos";
import "aos/dist/aos.css";
import code from "./../../assets/code.svg";

type SkillsProps = {
  user: User;
};

export const Skills = ({ user }: SkillsProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div id="skills">
        <h1>Skills</h1>
        <div className="skills-container" data-aos="fade-up">
          <div className="skills-card">
            <h2 className="card-title">Languages</h2>
            <img src={code} alt="" />
            <div className="skills-info">
              {user.skills.languages.map((l) => (
                <span>{l}</span>
              ))}
            </div>
          </div>
          <div className="skills-card">
            <h2 className="card-title">Frameworks</h2>
            <img src="" alt="" />
            <div className="skills-info">
              {user.skills.frameworks.map((f) => (
                <span>{f}</span>
              ))}
            </div>
          </div>
          <div className="skills-card">
            <h2 className="card-title">Languages</h2>
            <img src="" alt="" />
            <div className="skills-info">
              {user.skills.other.map((o) => (
                <span>{o}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
