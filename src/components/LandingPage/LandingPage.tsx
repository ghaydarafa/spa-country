import React from "react";
import "./LandingPage.css";
import ExploreButton from "../ExploreButton/ExploreButton";


const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1 className="title">Countrypedia</h1>
      <ExploreButton/>
    </div>
  );
};

export default LandingPage;
