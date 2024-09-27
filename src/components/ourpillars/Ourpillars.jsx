import React from "react";
import "./ourpillars.css";
import Title from "../title/Title";
import Pillarcard from "../pillarcards/Pillarcard";

const Ourpillars = () => {
  return (
    <div className="ourPillars-container">
      <div className="ourPillars-title">
        <Title content="Our Pillars" />
      </div>
      <div className="ourPillars-contents">
        <Pillarcard />
        <Pillarcard />
        <Pillarcard />
        <Pillarcard />
        <Pillarcard />
      </div>
    </div>
  );
};

export default Ourpillars;
