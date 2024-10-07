import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";

import arrowUp from "../../assets/arrowUp.png";

import { FaArrorUp, FaArrowUp } from "react-icons/fa";

import logo from "../../assets/footerlogo.png";
import Button from "../../components/button/Button";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-contents">
        <div className="footer-contents-b1">
          <div className={`h3-container`}>
            <h3>
              <span className="dot"></span> The Awahsa'a Ngeniform Foundation
            </h3>
          </div>
          <p>
            Join our mission to empower at-risk communities for sustainable
            growth.
          </p>

          <div className="footer-button">
            <Link to="/partnerwithus">
              {" "}
              <Button className="fill" content="Partner with us" />
            </Link>
          </div>
        </div>
        <div className="footer-contents-b2">
          <h3>About</h3>
          <div className="a-links">
            {/* <Link to="/home#home">Home</Link> */}
            {/* <a href="#about">About</a> */}
            <a href="#pillars">Our Pillars</a>
            {/* <a href="#">What others say</a> */}
            {/* <a href="#">Partner with us</a> */}
          </div>
        </div>

        {/* <div className="footer-contents-b3">
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
        </div> */}

        <div className="footer-contents-b5">
          <h3>Connect with us</h3>
          <Socials socialColor="rgba(32, 32, 32, 1)" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
