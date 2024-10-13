import React from "react";
import "./swipercard.css";
import Button from "../../components/button/Button";

const Swippercard = ({ bgImage, headercontent, text }) => {
  return (
    <div className="swipper-card-container">
      <div className="swipper-card">
        <div className="s-img">
          <img src={bgImage} alt="the background" />
        </div>

        <h3>{headercontent}</h3>
        <p>{text}</p>

        {/* <div className="swipper-button">
          <Button className="fill-orange" content="see more" />
        </div> */}
      </div>
    </div>
  );
};

export default Swippercard;
