import React from "react";
import Button from "../Component/Button";
import Logo from "../Component/Logo";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import Project from "../Component/Project";

const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Button left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};

export default Project2;
