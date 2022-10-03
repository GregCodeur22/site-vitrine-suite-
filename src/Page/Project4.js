import React from "react";
import Button from "../Component/Button";
import Logo from "../Component/Logo";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import Project from "../Component/Project";

const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Button left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
