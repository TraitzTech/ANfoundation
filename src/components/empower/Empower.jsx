import React from "react";
import "./empower.css";
import { Link } from "react-router-dom";

import Button from "../button/Button";

const Empower = () => {
  return (
    <div className="empower-container">
      <h2>
        Empowering At-Risk Youth and Fostering  Community Development in
        Conflict-Affected Regions.
      </h2>

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
