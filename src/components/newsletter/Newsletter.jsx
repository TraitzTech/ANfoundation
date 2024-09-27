import React from "react";
import "./newsletter.css";

import phone from "../../assets/phoneicon.png";
import location from "../../assets/location.png";

import Button from "../button/Button";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-contents">
        <div className="newsletter-contents-left">
          <h3>Newsletter</h3>
          <p>Get latest news and updates</p>
        </div>
        <div className="newsletter-contents-right">
          <div className="right-button">
            <input type="email" placeholder="Enter your email" required></input>
            <Button content="Subscribe" />
          </div>
          <div className="right-contact">
            <img src={phone} alt="phone Icon" />
            <div className="">
              <p>+(123) 456 789 0000</p>
              <p>hello@domainname.org</p>
            </div>
          </div>

          <div className="right-location">
            <img src={location} alt="Location Icon" />
            <div>
              <p>steet number, City</p>
              <p>state, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
