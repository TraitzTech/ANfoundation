import React from "react";
import "./wherewework.css";
import { Link } from "react-router-dom";

import Title from "../title/Title";

const Whewework = () => {
  return (
    <div className="where-we-work-container">s
      <div className="where-we-work-contents">
        <Title content={"Where We Work"} />
        <div className="where-we-work-container-card">
          <div className="where-we-work-card">
            <div className="where-we-work-card-content">
              <a href="#" className="where-we-work-card-heading">
                BAMBILI
              </a>{" "}
              <h2>Our Works</h2>
              <ul>
                <Link to="/works">
                  <li>Growing Mbeligi Together Inaugural - 21st Sept 2024</li>
                </Link>
              </ul>
            </div>
          </div>
          {/* <div className="where-we-work-card"></div> */}
          {/* <div className="where-we-work-card">
            <a href="#" className="where-we-work-card-heading">
              LIMBE
            </a>{" "}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Whewework;
