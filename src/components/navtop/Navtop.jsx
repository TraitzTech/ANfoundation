import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navtop.css";

const Navtop = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);

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
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navtop;