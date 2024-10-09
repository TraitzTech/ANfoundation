import React from "react";
import "./wherewework.css";
import { Link } from "react-router-dom";

import Title from "../title/Title";
import Button from "../button/Button";

const Whewework = () => {
  return (
    <div className="where-we-work-container">
      <div className="where-title-container">
        <Title content={"Who We Are"}></Title>
      </div>

      <div className="where-we-work-text">
        <p>
          The <span>Awahsa'a Ngeniform (AN) Foundation</span> is committed to
          supporting at-risk youth and communities facing complex and often
          intersecting challenges of unemployment, gender inequality and related
          violence, social exclusion, conflict, climate fragility, and forced
          displacement.
          <p>
            We believe in the potential of every young person and strive to
            create a brighter future for all at-risk youth in Cameroon. We
            provide comprehensive support through education and skills,
            psychosocial support services, leadership development, and advocacy
            for policy change.{" "}
          </p>
          <p>
            Our approach emphasizes local ownership, fostering sustainable
            solutions for income-generating activities, and ensuring long-term
            impact through beneficiary continuity programs. Our goal is to
            create a supportive and enabling environment for at-risk youth and
            communities in Cameroon, providing them with needed tools to achieve
            their positive aspirations for development and a prosperous,
            resilient society.{" "}
          </p>
        </p>
        <a href="https://drive.google.com/file/d/13K-pM2Vn5TDLqRGt1jv8h8Q19zzguiRQ/view?usp=drivesdk" target="__blank">
          <Button content={"Read more"} />
        </a>
      </div>
    </div>
  );
};

export default Whewework;
