import React from "react";
import "./button.css";

const Button = ({ className = "fill", content }) => {
  return (
    <div className="button-container">
      <button className={className}>{content}</button>
    </div>
  );
};

export default Button;
