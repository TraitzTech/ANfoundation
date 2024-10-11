import React from "react";
import "./whoweare.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import culture from "../../assets/culture.png";

import lgimg from "../../assets/Mask group (1).png";
import kdimg from "../../assets/solarpanels.jpg";
import child from "../../assets/Mask group.png";
import Title from "../title/Title";
import Button from "../button/Button";
import Pillarcard from "../pillarcards/Pillarcard";
import image from "../../assets/skills.png";

const Whoweare = () => {
  return (
    <div className="who-we-are-container" id="about">
      <Title content={"Where We Work"} />
      <div className="who-we-are-contents">
        <div className="who-we-are-left">
          <img src={lgimg} alt="community people" />
          <img src={kdimg} alt="Kids image" />
          <img src={child} alt="Child image" />
        </div>

        <div className="who-we-are-right">
          <Pillarcard
            bgImage={image}
            headercontent1="Bambili"
            headercontent2="Limbe"
            plus={"+"}
            headercontent3="Douala (with SSTR)"
          />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
