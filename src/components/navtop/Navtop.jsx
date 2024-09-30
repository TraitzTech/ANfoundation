import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation-container" id="home">
      <div className="navtigation-top-contents">
        <div className={`h3-container ${isSticky ? "sticky" : ""}`}>
          <h3>
            <span className="dot"></span> The Awahsa'a Ngeniform Foundation
          </h3>
        </div>

        <h2>
          Empowering At-Risk Youth and Fostering  Community Development in
          Conflict- Affected Regions.
        </h2>

        <p>
          The Awahsa'a Ngeniform Foundation is dedicated to supporting at-risk
          youth in building a brighter future. We offer mentorship,
          scholarships, and life skills training to help them overcome
          challenges and become leaders in their communities.
        </p>
        <div className="buttons">
          <a href="#partner">
            <Button className="fill" content="Partner with us" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navtop;
