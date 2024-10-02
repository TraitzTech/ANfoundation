import React from "react";
import "./partneruspage.css";
import Title from "../../components/title/Title";
import Socials from "../../components/socials/Socials";
import Contact from "../contactus/Contact";

const Partneruspage = () => {
  return (
    <div className="partnerus-container">
      <div className="partner-us-contents">
        <div className="partner-us-contents-left">
          <Title content="Partner With Us" />
          <p>
            Ready to empower at-risk youth with us? Schedule a call to discuss
            how your partnership can make a difference.{" "}
          </p>
          <p>
            Connect with us by filling out our online form, emailing us at
            <a href="mailto:theakwofoundation@gmail.com">
              <span> </span>theakwofoundation@gmail.com.
            </a>
          </p>

          <Socials />
        </div>
        <div className="partner-us-contents-right">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Partneruspage;
