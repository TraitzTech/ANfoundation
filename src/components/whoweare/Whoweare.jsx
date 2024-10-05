import React from "react";
import "./whoweare.css";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

import lgimg from "../../assets/peoplecommunity.png";
import kdimg from "../../assets/littlekid.png";
import child from "../../assets/girls.jpg";
import Title from "../title/Title";
import Button from "../button/Button";

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
          <div className="who-we-are-right-contents">
            <Link to="/works#home"><h3>
              <FaArrowRight size={30} color="orange" /> Bambili
            </h3></Link>
            
            <h3>
              <FaArrowRight size={30} color="orange" /> Limbe
            </h3>
            <h3>
              <FaArrowRight size={30} color="orange" /> Buea
            </h3>
            <h3>
              <FaArrowRight size={30} color="orange" /> Douala
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
