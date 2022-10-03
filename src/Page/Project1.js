import React from "react";
import Button from "../Component/Button";
import Logo from "../Component/Logo";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import Project from "../Component/Project";

const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Button left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};

export default Project1;
