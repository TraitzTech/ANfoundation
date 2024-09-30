import React from "react";
import "./footer.css";
import arrowUp from '../../assets/arrowUp.png'

import { FaArrorUp, FaArrowUp } from "react-icons/fa";

import logo from "../../assets/footerlogo.png";
import Button from "../button/Button";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-contents">
        <div className="footer-contents-b1">
          <img src={logo} alt="footr logo" />
          <p>
          Join our mission to empower the next generation.
          </p>

          <div className="footer-button">
            <Button className="fill-orange" content="Become a Partner" />
          </div>
        </div>
        <div className="footer-contents-b2">
          <h3>About</h3>
          <div className="a-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pillars">Our Pillars</a>
            {/* <a href="#">What others say</a> */}
            {/* <a href="#">Partner with us</a> */}
          </div>
        </div>

        <div className="footer-contents-b3">
          <h3>Quick Links</h3>
          <div className="a-links">
            <a href="#">Work with us</a>
            <a href="#">Who we are</a>
            <a href="#">Our Stories</a>
          </div>
        </div>

        <div className="footer-contents-b4">
          <h3>Quick Links</h3>
          <div className="a-links">
            <a href="#">Latest Contributions</a>
            <a href="#">Partners</a>
            <a href="#">Social contacts</a>
          </div>
        </div>

        <div className="footer-contents-b5">
          <h3>Connect with us</h3>
          <Socials socialColor="rgba(32, 32, 32, 1)" />
        </div>
      </div>
      <hr />
      <div className="footer-rbottom">
        <p>The Awahsa’a Ngeniform Foundation - 2024, All rights reserved</p>
        <div>
          <a href="www.traitz.tech">Traitz Tech <a href="#home"><span> <img src={arrowUp} alt="the arrow" />  </span></a> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
