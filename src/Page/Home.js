import React from "react";
import Button from "../Component/Button";
import DynamicText from "../Component/DynamicText";
import Mouse from "../Component/Mouse";
import Navigation from "../Component/Navigation";
import SocialNetwork from "../Component/SocialNetwork";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>FS AGENCY</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Button right={"/project-1"} />
      </div>
    </div>
  );
};

export default Home;
