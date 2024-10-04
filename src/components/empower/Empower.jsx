import React from "react";
import "./empower.css";
import { Link } from "react-router-dom";

import Button from "../button/Button";

const Empower = () => {
  return (
    <div className="empower-container">
      <h2>
        Empowering At-Risk Youth and Fostering  Community Development in
        Conflict- Affected Regions.
      </h2>

      <p>
        The Awahsa'a Ngeniform Foundation is dedicated to supporting at-risk
        youths in building a brighter future. We offer mentorship, scholarships,
        and life skills training to help youths overcome challenges and become
        leaders in their communities.
      </p>
      <div className="buttons">
        <Link to="/partnerwithus">
          {" "}
          <Button className="fill" content="Partner with us" />
        </Link>
      </div>
    </div>
  );
};

export default Empower;
