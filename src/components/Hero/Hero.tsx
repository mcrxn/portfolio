import React from "react";
import "./Hero.css";
import { User } from "../../interfaces/User";

type HeroProps = {
  user: User;
};

export const Hero = ({ user }: HeroProps) => {
  return (
    <>
      <div id="hero-container">
        <h3>
          Hello, I am {user.name} {user.lastName}
        </h3>
        <h4>{user.title}</h4>
        <p>{user.description}</p>
        <div className="button-container">
          <button className="glowing-btn">
            <span className="glowing-txt">
              View<span className="faulty-letter"> My</span> Resume
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
