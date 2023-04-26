import React, { useEffect } from "react";
import { User } from "../../interfaces/User";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

type AboutProps = {
  user: User;
};

export const About = ({ user }: AboutProps) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div id="about">
        <div className="about-info" data-aos="fade-up">
          <h3>About Me</h3>
          <p>{user.about}</p>
        </div>
      </div>
    </>
  );
};
