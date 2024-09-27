import React from "react";
import "./whoweare.css";
import lgimg from "../../assets/peoplecommunity.png";
import kdimg from "../../assets/littlekid.png";
import child from "../../assets/child.png";
import Title from "../title/Title";
import Button from "../button/Button";

const Whoweare = () => {
  return (
    <div className="who-we-are-container">
      <div className="who-we-are-contents">
        <div className="who-we-are-left">
          <img src={lgimg} alt="community people" />
          <img src={kdimg} alt="Kids image" />
          <img src={child} alt="Child image" />
        </div>

        <div className="who-we-are-right">
          <Title content="Who we are" />
          <p>
            The Awahsa’a Ngeniform Foundation (AN) seeks to support excellence
            and leadership in youth livelihoods, scholarship, culture, and
            community development with a focus on at-risk youth in fragile and
            conflict contexts.{" "}
          </p>
          <div className="whobutton">
            <Button content="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
