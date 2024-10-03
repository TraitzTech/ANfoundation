import React from "react";
import "./bfooter.css"

import arrowUp from "../../assets/arrowUp.png";

const Bfooter = () => {
  return (
    <div className="footer-rbottom">
      <p>The Awahsa’a Ngeniform Foundation - 2024, All rights reserved</p>
      <div>
        <a href="www.traitz.tech">
          Traitz Tech{" "}
          <a href="#home">
            <span>
              {" "}
              <img src={arrowUp} alt="the arrow" />{" "}
            </span>
          </a>{" "}
        </a>
      </div>
    </div>
  );
};

export default Bfooter;
