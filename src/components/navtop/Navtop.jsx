import React from "react";

import "./navtop.css";
import Button from "../button/Button";
const Navtop = () => {
  return (
    <div className="navigation-container">
      <div className="navtigation-top-contents">
        <h3>
          <span className="dot"></span> The Awahsa'a Ngeniform Foundation
        </h3>
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
          <Button className="fill" content="Partner with us" />
          <Button className="empty" content="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Navtop;
