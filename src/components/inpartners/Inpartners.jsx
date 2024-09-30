import React from "react";
import "./inpartner.css";
import Button from "../button/Button";

const Inpartners = () => {
  return (
    <div className="inpartners-container" id="partner">
      <div className="inpartners-inner-container">
        <p className="small">Partner with the AN</p>
        <p className="lg">
          Support Education & Skills Training. Break the cycle of poverty,
          partner with us.
        </p>

        <div className="inpartners-button">
          <Button className="fill-orange" content="Become our Partner" />
        </div>
      </div>
    </div>
  );
};

export default Inpartners;
