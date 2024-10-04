import React from "react";
import "./whoweare.css";
import lgimg from "../../assets/peoplecommunity.png";
import kdimg from "../../assets/littlekid.png";
import child from "../../assets/girls.jpg";
import Title from "../title/Title";
import Button from "../button/Button";

const Whoweare = () => {
  return (
    <div className="who-we-are-container" id="about">
      <div className="who-we-are-contents">
        <div className="who-we-are-left">
          <img src={lgimg} alt="community people" />
          <img src={kdimg} alt="Kids image" />
          <img src={child} alt="Child image" />
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
