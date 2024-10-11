import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./navtop.css";
import Button from "../../components/button/Button";
const Navtop = () => {
  const [isSticky, setIsSticky] = useState(false);

  // const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home">
      <div className="navigation-container">
        <div className="navtigation-top-contents">
          <div className={`h3-container ${isSticky ? "sticky" : ""}`}>
            <Link to="/home#home">
              <h3 className="nav-top-header">
                <span className="dot"></span> The Awahsa'a Ngeniform Foundation
                (AN)
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
