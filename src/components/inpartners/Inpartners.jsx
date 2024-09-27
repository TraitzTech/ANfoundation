import React from "react";
import "./inpartner.css";
import Button from "../button/Button";

const Inpartners = () => {
  return (
    <div className="inpartners-container">
      <div className="inpartners-inner-container">
        <p className="small">Lorem ipsum</p>
        <p className="lg">
          Lorem ipsum dolor sit amet consectetur. Risus proin ut congue nibh.{" "}
        </p>

        <div className="inpartners-button">
          <Button className="fill-orange" content="Become our Partner" />
        </div>
      </div>
    </div>
  );
};

export default Inpartners;
