import React from "react";
import "./title.css";

const Title = ({ content }) => {
  return (
    <div className="title-container">
      <div className="dot"></div>
      <h2>{content}</h2>
    </div>
  );
};

export default Title;
