import React from "react";
import "./whoweare.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import culture from "../../assets/culture.png";

import lgimg from "../../assets/peoplecommunity.png";
import kdimg from "../../assets/littlekid.png";
import child from "../../assets/girls.jpg";
import Title from "../title/Title";
import Button from "../button/Button";
import Pillarcard from "../pillarcards/Pillarcard";

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
            bgImage={culture}
            headercontent1="Bambili"
            headercontent2="Limbe"
            headercontent3="Douala"
          />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
