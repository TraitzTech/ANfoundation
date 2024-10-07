import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./navtop.css";
import Button from "../../components/button/Button";
const Navtop = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div id="home">
      <div className="navigation-container">
        <div className="navtigation-top-contents">
          <div className={`h3-container ${isSticky ? "sticky" : ""}`}>
            <Link to="/home#home">
              <h3>
                <span className="dot"></span> The Awahsa'a Ngeniform Foundation
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
