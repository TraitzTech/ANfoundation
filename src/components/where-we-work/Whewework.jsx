import React from "react";
import "./wherewework.css";
import document from "../../assets/Who We Are Revised.pdf";
import { Link } from "react-router-dom";

import Title from "../title/Title";
import Button from "../button/Button";
import image from "../../assets/whoweareimage.jpg";

const Whewework = () => {
  return (
    <div className="where-we-work-container">
      <div className="where-title-container">
        <Title content={"Who We Are"}></Title>
      </div>

      <div className="where-we-work-text">
        <div>
          <p>
            <span>The Awahsa'a Ngeniform (AN) Foundation</span> is committed to
            supporting at-risk youth and communities facing complex and often
            intersecting challenges of unemployment, climate fragility, and
            social fractures including: gender inequality and related violence,
            social exclusion, conflict, and forced displacement.
          </p>
          <p>
            We believe in the potential of every young person and strive to
            create a brighter future for at-risk youth in Cameroon. We provide
            comprehensive support for education and skills including{" "}
            <a href="https://unevoc.unesco.org/home/TVETipedia+Glossary/lang=en/show=term/term=Technical+and+vocational+education+and+training">
              TVET
            </a>{" "}
            and adaptive digital skills, psychosocial services, livelihoods and
            entrepreneurship, leadership development and professionalization,
            together with pertinent policy advocacy.
          </p>
          <p>
            Our approach emphasizes local ownership, fostering sustainable
            solutions for income-generating activities and ensuring long-term
            impact through continuity programs. Our goal is to create a
            supportive and enabling environment for at-risk youth and
            communities in Cameroon, equipping them with the necessary tools to
            achieve their aspirations for a prosperous, resilient society.
          </p>

          <a
            href="https://drive.google.com/file/d/1DmvTmdaybbNnN7qlJ1-g6NEUFVq2fPJp/view?usp=drivesdk"
            target="__blank"
          >
            <button className="fill">Read more</button>
          </a>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whewework;
