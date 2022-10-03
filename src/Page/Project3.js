import React from "react";
import Button from "../Component/Button";
import Logo from "../Component/Logo";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import Project from "../Component/Project";

const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Button left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export default Project3;
