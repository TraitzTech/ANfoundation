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
            Join us equip at-risk youth and communities for resilience and
            sustainable growth?{" "}
          </p>
          <p>
            Connect with us by filling out our online form or emailing us at
            <a href="mailto:awahsaangeniformfdn@gmail.com">
              <span> </span>awahsaangeniformfdn@gmail.com
            </a>
          </p>

          {/* <Socials socialColor="rgba(32, 32, 32, 1)" /> */}
        </div>
        <div className="partner-us-contents-right">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Partneruspage;
