import React from "react";

import { Link } from "react-router-dom";

import "./inpartner.css";
import Button from "../../components/button/Button";

const Inpartners = () => {
  return (
    <div className="inpartners-container" id="partner">
      <div className="inpartners-inner-container">
        <p className="small">Partner with the AN</p>
        <p className="lg">Empower at risk communities for sustainable growth</p>

        <div className="inpartners-button">
          <Link to="/partnerwithus">
            <Button className="fill-orange" content="Become our Partner" />
          </Link>
        </div>
        <div className="cynthia-label">
          <p>Miss Maria-Cynthia Ngwenui, Age: 18</p>
          <p>Youth Advisor, The AN</p>
        </div>
      </div>
    </div>
  );
};

export default Inpartners;
