import React from "react";
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
      </div>
    </>
  );
};
